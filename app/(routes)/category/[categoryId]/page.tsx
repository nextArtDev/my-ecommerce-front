import getProducts from '@/actions/get-products'
import getCategory from '@/actions/get-category'
import getSizes from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'

import MobileFilters from './components/mobile-filters'
import Billboard from '@/components/Billboard'
import Filter from './components/filters'
import NoResults from '@/components/NoResult'
import ProductCard from '@/components/ProductCard'

//for having no-cache here
export const revalidate = 0

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  // we need searchParams to filter by colorId & sizeId
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl">
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="سایزها" data={sizes} />
              <Filter valueKey="colorId" name="رنگها" data={colors} />
            </div>
            {/* Rendering products related to filters */}
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
