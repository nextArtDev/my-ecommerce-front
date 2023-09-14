'use client'

import axios from 'axios'
import { useEffect } from 'react'
import { redirect, useSearchParams } from 'next/navigation'

import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { removeAll } from '@/redux/slices/cardSlice'
import Currency from '@/components/Currency'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import getZibal from '@/actions/get-zibal'

const Summary = () => {
  const searchParams = useSearchParams()

  const dispatch = useDispatch<AppDispatch>()
  const items = useAppSelector((state) => state.cardReducer.items)

  const ZibalVerification = async (amount: number, referenceId: string) => {
    const res = await getZibal({ amount, referenceId })
    console.log(res)
  }

  // const items = useCart((state) => state.items);
  // const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  // ****Redirection after response to checkout****
  useEffect(() => {
    // 1=success 2=error

    if (searchParams.get('success') === '1') {
      toast({ title: 'پرداخت تکمیل شد.' })
      // removeAll();
      // success=1&status=2&trackId=3317549026
      //gateway.zibal.ir/start/{{trackId}}
      const referenceId = searchParams.get('trackId')
      console.log(referenceId!)
      ZibalVerification(totalPrice, referenceId!)

      dispatch(removeAll())
    }
    if (searchParams.get('success') === '2') {
      toast({
        title: 'مشکلی پیش آمده.',
        description: 'عملیات پرداخت تکمیل نشد.',
        variant: 'destructive',
      })
    }
  }, [searchParams, dispatch])

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
        totalPrice,
      }
    )
    console.log(response.data)
    window.location = response.data.url
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">خلاصه سفارشات</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">مجموع سفارش</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        پرداخت
      </Button>
    </div>
  )
}

export default Summary
