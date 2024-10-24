import Main from '@/components/Main'
import SideNav from '@/components/SideNav'
import Image from 'next/image'

export const metadata = {
  title: 'Portfolioe',
  description: 'description template ',
}

export default function Home() {
  return (
    <>
      <SideNav />
      <Main />
    </>
  )
}
