import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'

const ProjectsCard = ({ title, category, image, link, color }) => {
  return (
    <Link href={link} target='_blank'>
      <Card
        className={`p-4 gap-y-5 flex hover:cursor-pointer bg-transparent text-white border-white border-2 hover:bg-white hover:transition-transform-colors hover:text-black`}
      >
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <p className='text-tiny uppercase font-bold'>{category}</p>
          <h4 className='font-bold text-large'>{title}</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2 rounded-xl'>
          <Image
            alt='Card background'
            className='object-cover rounded-xl items-center'
            src={image.src}
            width={350}
          />
        </CardBody>
      </Card>
    </Link>
  )
}

export default ProjectsCard
