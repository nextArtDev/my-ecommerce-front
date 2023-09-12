'use client'

import { ShoppingCart } from 'lucide-react'

import { Product } from '@/types'
import Currency from './Currency'
import { Button } from './ui/button'
// import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product
}

const Info: React.FC<InfoProps> = ({ data }) => {
  // const cart = useCart();

  const onAddToCart = () => {
    // cart.addItem(data);
  }

  return (
    <div className="">
      <h1 className="text-3xl text-right font-bold text-gray-900 pb-4">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between ">
        <p className="flex gap-2 text-2xl text-red-400 ">
          <Currency value={data?.price} />
          تومان
        </p>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">سایز:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">رنگ</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-12 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 bg-red-500 rounded-full"
        >
          اضافه‌کردن به سبد
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  )
}

export default Info
