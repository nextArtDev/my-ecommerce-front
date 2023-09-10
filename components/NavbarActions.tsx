'use client'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  //Our cart uses local storage, so this cause hydration error
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  //   const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="mr-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-red-500 px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="mr-2 text-sm font-medium text-white">
          {/* {cart.items.length} */} 3
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
