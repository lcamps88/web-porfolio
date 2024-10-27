'use client'
import Image from 'next/image'
import bgImage from '@/public/images/bg-portfolio.webp'

import { TypeAnimation } from 'react-type-animation'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Main = () => {
  return (
    <section className=''>
      <Image
        alt=''
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={bgImage}
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
        <div className='content-center flex-wrap gap-y-5 m-auto h-full w-full flex flex-col justify-center lg:items-start responsive_container text-white'>
          <h2>I&apos;m Lisandra Camps</h2>
          <h3>
            I&apos;m a
            <TypeAnimation
              sequence={[
                'Front Developer',
                1000, // Waits 1s
                'Coder',
                2000, // Waits 2s
                'Backend Developer',
                () => {
                  console.log('Sequence completed')
                },
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em',
                paddingLeft: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            />
          </h3>
          {/* <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <BsFacebook size={20} className='cursor-pointer text-white' />
            <BsTwitter size={20} className='cursor-pointer text-white' />
            <BsInstagram size={20} className='cursor-pointer text-white' />
            <BsLinkedin size={20}className='cursor-pointer text-white'  />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Main
