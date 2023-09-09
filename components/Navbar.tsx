import Link from 'next/link'
import { MainNav } from './MainNav'

// import MainNav from '@/components/main-nav'
// import Container from '@/components/ui/container'
// import NavbarActions from '@/components/navbar-actions'
import getCategories from '@/actions/get-categories'

const Navbar = async () => {
  //   const categories = await getCategories()

  return (
    <div className="border-b mx-auto max-w-7xl">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">فروشگاه</p>
        </Link>
        <MainNav />
        {/* <MainNav data={categories} /> */}
        {/* <NavbarActions /> */}
      </div>
    </div>
  )
}

export default Navbar