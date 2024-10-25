import Main from '@/components/Main'
import SideNav from '@/components/SideNav'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Work from '@/components/Work'

export const metadata = {
  title: 'Portfolioe',
  description: 'description template ',
}

export default function Home() {
  return (
    <>
      <SideNav/>
      <Main />
      <About/>
      <Skills/>
      <Work/>
    </>
  )
}
