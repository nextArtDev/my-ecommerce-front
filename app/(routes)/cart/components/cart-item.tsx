import Image from 'next/image'
import { X } from 'lucide-react'
import { Product } from '@/types'
import IconButton from '@/components/IconButton'
import Currency from '@/components/Currency'

import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { removeItem } from '@/redux/slices/cardSlice'

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useAppSelector((state) => state.cardReducer)
  const dispatch = useDispatch<AppDispatch>()
  // const cart = useCart();

  const onRemove = () => {
    // cart.removeItem(data.id);
    dispatch(removeItem(data))
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative mr-4 flex flex-1 flex-col justify-between sm:mr-6">
        <div className="absolute z-10 left-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500 pl-4">{data.color.name}</p>
            <p className="ml-4 border-r border-gray-200 pr-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <Currency value={data.price} /> تومان
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
