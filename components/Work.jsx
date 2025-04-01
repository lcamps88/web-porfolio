import Container from '@/components/Container'
import ProjectsCard from './ProjectsCard'
import Project1 from '@/public/images/diosef.org.webp'
import Project2 from '@/public/images/nocostshoes.webp'
import Project3 from '@/public/images/realestate4all.webp'
import Project4 from '@/public/images/schmutzes.webp'
import Project5 from '@/public/images/pink-zebra-store-locator.vercel.app.webp'
import Project6 from '@/public/images/sann-kalla.webp'
import Project7 from '@/public/images/ce-restaurants1.png'

const Work = () => {
  return (
    <section
      id='projects'
      className='w-full flex flex-wrap bg-black gap-y-14 xl:gap-y-20 pt-10 pb-16 2xl:pb-20'
    >
      <Container customStyle='w-full flex flex-wrap justify-between responsive_container gap-y-10'>
        <div className='w-full flex text-white xl:gap-y-5 flex-col'>
          <h2>Projects</h2>
          <div className='w-full py-10 flex'>
            <div className='w-full h-full rounded-lg grid md:grid-cols-2 lg:grid-cols-3 bg-transparent justify-center gap-10'>
              <ProjectsCard
                title='Episcopal Church'
                image={Project1}
                link='https://diosef.org/'
                category='MERN App'
                color='border-red_card'
              />
              <ProjectsCard
                title='Sann Kalla'
                image={Project6}
                link='https://sann-kalla.com/'
                category='WordPress/WooCommerce'
                color='border-blue_card'
              />
              <ProjectsCard
                title='Real Estate 4 All'
                image={Project3}
                link='https://realestate4all.com/'
                category='WordPress/Real State'
                color='border-pink_card'
              />
              <ProjectsCard
                title='Schmutzes'
                image={Project4}
                link='https://schmutzes.com/'
                category='Shopify'
                color='border-red_card'
              />
                <ProjectsCard
                title='CE Restaurants Concepts'
                image={Project7}
                link='https://www.cerestaurants.com/'
                category='Shopify / NextJs'
                color='border-blue_card'
              />
              <ProjectsCard
                title='NocostShoes'
                image={Project2}
                link='https://www.nocostshoes.com/'
                category='WebFlow'
                color='border-green_card'
              />
              <ProjectsCard
                title='Store Location'
                image={Project5}
                link='https://pink-zebra-store-locator.vercel.app/'
                category='Mapbox'
                color='border-blue_card'
              />
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Work
