'use client'

import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { Expand, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'

// import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
import IconButton from './IconButton'
import Currency from './Currency'
import { onOpen } from '@/redux/slices/modalSlice'
import { addItem } from '@/redux/slices/cardSlice'

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>()
  //   const previewModal = usePreviewModal()
  //   const cart = useCart()
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    //overwrite the fact that wrapper div hasn't onClick and stop it
    event.stopPropagation()

    dispatch(onOpen(data))
    //   previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    dispatch(addItem(data))
    // cart.addItem(data)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center gap-2">
        <Currency value={data?.price} />
        تومان
      </div>
    </div>
  )
}

export default ProductCard
