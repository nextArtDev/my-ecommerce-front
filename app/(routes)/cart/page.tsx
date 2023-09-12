'use client'

import { useEffect, useState } from 'react'

import Summary from './components/summary'
import CartItem from './components/cart-item'
import { useAppSelector } from '@/redux/store'
export const revalidate = 0

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  // const cart = useCart();
  const cart = useAppSelector((state) => state.cardReducer)
  // console.log(localStorage.getItem('cart-storage'))
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">سبد خرید</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">سبد خرید شما خالی است.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
