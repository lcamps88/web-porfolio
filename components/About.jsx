import Container from '@/components/Container'

const About = () => {
  return (
    <section id='profile' className='w-full flex flex-wrap bg-custom_gradient gap-y-14 xl:gap-y-20 pt-16 md:pt-20 2xl:pt-32 pb-16 2xl:pb-28'>
      <Container customStyle='w-full flex flex-wrap justify-between responsive_container gap-y-10'>
        <div className='w-full flex lg:section-width-45 flex-col p-3 border-2 border-orange-400 rounded-lg'>
            <div className='w-full flex bg-about bg-cover bg-center bg-no-repeat min-h-[20rem] lg:min-h-[30rem] rounded-lg'></div>
        </div>
        <div className='w-full flex lg:section-width-45 flex-col gap-y-5 justify-center text-white'>
          <h2>Professional Summary</h2>
          <p>
          With over 10 years of experience in web development, I specialize in creating advanced web solutions centered around WordPress, enhanced by modern technologies like JavaScript, React, and Tailwind CSS. My expertise includes developing and customizing WordPress themes and plugins, integrating robust and optimized functionalities that boost performance and user experience.
          </p>
          <p>
          With a focus on efficiency and scalability, I leverage React to enhance interactivity and Tailwind CSS to ensure a clean, responsive design in every project. My commitment is to deliver websites that not only look great but are also fast, SEO-optimized, and easily scalable. I am dedicated to contributing my technical expertise to organizations seeking innovation and growth in the web development field.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About
