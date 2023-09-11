'use client'

import Gallery from '@/components/gallery'
import Info from '@/components/info'
import Modal from './Modal'

import { useAppSelector } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { onClose } from '@/redux/slices/modalSlice'

const PreviewModal = () => {
  const dispatch = useDispatch<AppDispatch>()
  const product = useAppSelector((state) => state.modalReducer.data)
  const { isOpen } = useAppSelector((state) => state.modalReducer)

  if (!product) {
    return null
  }

  return (
    // <Modal open={()=> previewModal.isOpen} onClose={previewModal.onClose}>
    <Modal open={isOpen} onClose={() => dispatch(onClose())}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  )
}

export default PreviewModal
