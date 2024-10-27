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
            Experienced WordPress Developer with over three years of expertise
            in designing, developing, and maintaining custom websites. Skilled
            in creating efficient and optimized web solutions using WordPress,
            WooCommerce, and other CMS platforms. Proficient in theme and plugin
            customization, SEO optimization, and eCommerce integration. Seeking
            to leverage technical skills and experience to contribute to a
            dynamic organization and grow within the web development field.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About
