import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })

  const billboard = await getBillboard('71aed976-3c1c-4fa5-ac5f-0a7649782665')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="محصولات ویژه" items={products} />
        </div>
      </div>
    </div>
  )
}
export default HomePage
