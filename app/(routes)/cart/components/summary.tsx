'use client'

import axios from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { removeAll } from '@/redux/slices/cardSlice'
import Currency from '@/components/Currency'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

const Summary = () => {
  const searchParams = useSearchParams()

  const dispatch = useDispatch<AppDispatch>()
  const items = useAppSelector((state) => state.cardReducer.items)

  // const items = useCart((state) => state.items);
  // const removeAll = useCart((state) => state.removeAll);

  //Redirection after response to checkout
  useEffect(() => {
    if (searchParams.get('success')) {
      toast({ title: 'پرداخت تکمیل شد.' })
      // removeAll();
      dispatch(removeAll())
    }

    if (searchParams.get('canceled')) {
      toast({
        title: 'مشکلی پیش آمده.',
        description: 'عملیات پرداخت تکمیل نشد.',
        variant: 'destructive',
      })
    }
  }, [searchParams, dispatch])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    )

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
        تسویه
      </Button>
    </div>
  )
}

export default Summary
