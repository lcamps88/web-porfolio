import Container from '@/components/Container'
import { CgWebsite } from 'react-icons/cg'
import { FaShopify } from 'react-icons/fa'
import { FaElementor, FaWebflow } from 'react-icons/fa6'
import { GrWordpress } from 'react-icons/gr'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { TfiDrupal } from 'react-icons/tfi'

import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri'
import { SiNpm, SiPhp } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

import { FaLaptopCode } from 'react-icons/fa'
import { RiNodejsLine } from 'react-icons/ri'
import { SiMongodb, SiMongoosedotws } from 'react-icons/si'
import { TbBrandMysql } from 'react-icons/tb'

import { FaGitAlt, FaGithubAlt } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa6'

import { PiFigmaLogoFill } from 'react-icons/pi'
import { SiAdobexd, SiJirasoftware, SiPostman } from 'react-icons/si'

const Skills = () => {
  return (
    <>
      <section
        id='work'
        className='w-full flex flex-wrap bg-custom_gradient_up gap-y-14 xl:gap-y-20 pt-5 pb-10 2xl:pb-20'
      >
        <Container customStyle='w-full flex flex-wrap justify-between responsive_container gap-y-10 text-white'>
          <h2 className='w-full flex'>Technical Skills</h2>
          <div className='w-full grid md:grid-cols-2 xl:grid-cols-4 gap-10'>
            <div className='w-full flex flex-col gap-y-5 p-5 border-red_card border-3 rounded-lg hover:bg-red_card hover:transition-all'>
              <h3>
                CMS <br /> Platforms
              </h3>
              <ul className='list-none w-full flex flex-col gap-y-5 p-5 bg-white text-black rounded-lg h-full'>
                <li className='flex flex-row gap-x-3 items-center'>
                  <GrWordpress className='text-xl' />
                  <p>WordPress</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <PiShoppingCartSimpleFill className='text-xl' />
                  <p>WooCommerce</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaShopify className='text-xl' />
                  <p>Shopify</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <TfiDrupal className='text-xl' />
                  <p>Drupal</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaWebflow className='text-xl' />
                  <p>WebFlow</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <CgWebsite className='text-xl' />
                  <p>Wix</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaElementor className='text-xl' />
                  <p>Elementor</p>
                </li>
              </ul>
            </div>
            <div className='w-full flex flex-col  gap-y-5  p-5 border-blue_card border-3 text-white rounded-lg hover:bg-blue_card hover:transition-all'>
              <h3>Frontend Technologies</h3>
              <ul className='list-none w-full flex flex-col gap-y-5 p-5 bg-white text-black rounded-lg h-full'>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaHtml5 className='text-xl' />
                  <p>HTLM5</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaCss3Alt className='text-xl' />
                  <p>CSS3</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <RiJavascriptFill className='text-xl' />
                  <p>JavaScript</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiPhp className='text-2xl' />
                  <p>PHP</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <BsFillBootstrapFill className='text-xl' />
                  <p>Bootstrap</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <TbBrandReactNative className='text-xl' />
                  <p>React</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <RiNextjsFill className='text-xl' />
                  <p>NextJs</p>
                </li>
              </ul>
            </div>
            <div className='w-full flex flex-col  gap-y-5  p-5 border-green_card border-3 text-white rounded-lg hover:bg-green_card hover:transition-all'>
              <h3>Backend Technologies</h3>
              <ul className='list-none w-full flex flex-col gap-y-5 p-5 bg-white text-black rounded-lg h-full'>
                <li className='flex flex-row gap-x-3 items-center'>
                  <RiNodejsLine className='text-xl' />
                  <p>NodeJS</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiMongodb className='text-xl' />
                  <p>MongoDB</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaLaptopCode className='text-xl' />
                  <p>REST APIs</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <TbBrandMysql className='text-xl' />
                  <p>SQL</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiNpm className='text-xl' />
                  <p>NPM</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiMongoosedotws className='text-xl' />
                  <p>Mongoose ORM</p>
                </li>
              </ul>
            </div>
            <div className='w-full flex flex-col  gap-y-5  p-5 border-pink_card border-3 rounded-lg hover:bg-pink_card hover:transition-all'>
              <h3>Tools & Frameworks</h3>
              <ul className='list-none w-full flex flex-col gap-y-5 p-5 bg-white text-black rounded-lg h-full'>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaGitAlt className='text-xl' />
                  <p>Git</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaGithubAlt className='text-xl' />
                  <p>GitHub</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <FaGitlab className='text-xl' />
                  <p>Gitlab</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <PiFigmaLogoFill className='text-xl' />
                  <p>Figma</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiAdobexd className='text-xl' />
                  <p>AdobeXd </p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiPostman className='text-xl' />
                  <p>Postman</p>
                </li>
                <li className='flex flex-row gap-x-3 items-center'>
                  <SiJirasoftware className='text-xl' />
                  <p>Jira</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Skills
