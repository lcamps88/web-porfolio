import Container from '@/components/Container'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaSquarePhone } from 'react-icons/fa6'
import Link from 'next/link'

const Contact = () => {
  let currentYear = new Date().getFullYear()

  return (
    <>
      <section
        id='contact'
        className='w-full flex flex-wrap bg-custom_gradient gap-y-14 xl:gap-y-20 pt-5 xl:pt-16 pb-28 2xl:pb-32'
      >
        <Container customStyle='w-full flex flex-wrap gap-y-16 text-white justify-center xl:justify-between responsive_container'>
          <h2>Contact</h2>
          <div className='w-full grid lg:grid-cols-3 gap-5 text-white justify-center xl:justify-between'>
            <Link
              href='mailto:lisandra.camps@gmail.com'
              className='flex justify-start items-center gap-x-5 hover:cursor-pointer'
            >
              <MdEmail className='text-[2rem]' />{' '}
              <p>lisandra.camps@gmail.com</p>
            </Link>
            <Link
              href='tel:+15612552290'
              className='flex justify-start items-center gap-x-5 hover:cursor-pointer'
            >
              <FaSquarePhone className='text-[2rem]' /> <p>(561)- 255 - 2290</p>
            </Link>
            <Link
              href='https://www.linkedin.com/in/lisandra-camps/'
              target='_blank'
              className='flex justify-start items-center gap-x-5 hover:cursor-pointer'
            >
              <BsLinkedin className='text-[1.75rem]' />{' '}
              <p>linkedin.com/in/lisandra-camps</p>
            </Link>
          </div>
        </Container>
      </section>
      <section className='w-full p-10 flex justify-center bg-black text-white'>
        <p className='text-center xl:text-left'>
          © {currentYear} LisyTech Solution. All Rights Reserved
        </p>
      </section>
    </>
  )
}

export default Contact
