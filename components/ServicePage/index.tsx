import { FAQ } from '@/types/common'
import FaqBlock from '../FaqBlock'
import Gallery from './Gallery'
import DreamImg3 from '@/public/images/paving-1.jpg'

interface ServicePage {
  mainTitle: string
  mainDescription: string
  faq: FAQ[]
}

export default function ServicePage({ data: { mainTitle, mainDescription, faq } }: { data: ServicePage }) {
  return (
    <main>
      <section className="px-container py-[60px] md:pt-[120px] md:pb-[80px]">
        <div className="container flex gap-8 md:justify-between max-md:flex-col">
          <h2 className="h2 container__col--smaller">{mainTitle}</h2>
          <div className="container__col--larger">
            <p className="text-p mb-[60px] lg:mb-[80px]">{mainDescription}</p>
          </div>
        </div>
      </section>

      <Gallery media={[
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
        {
          mediaType: "photo",
          mediaUrl: DreamImg3
        },
      ]}
      />

      <FaqBlock faq={faq} />

    </main>
  )
}
