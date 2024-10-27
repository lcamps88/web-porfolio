import Main from '@/components/Main'
import SideNav from '@/components/SideNav'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Frontend Developer Portfolio | Lisandra',
  description: 'Explore the portfolio of Lisandra, a frontend developer specializing in creating intuitive and visually engaging web experiences that combine design with optimized functionality',
}

export default function Home() {
  return (
    <>
      <SideNav />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}
