import FaqBlock from '../FaqBlock'
import { faqPavement } from '@/content/faq'

interface ServicePage {
  mainTitle: string
  mainDescription: string
}

export default function ServicePage({ mainTitle, mainDescription }: ServicePage) {
  return (
    <main>
      <section className="px-container py-[60px] md:pt-[120px] md:pb-[80px]">
        <div className="container flex max-md:gap-8 md:justify-between max-md:flex-col">
          <h2 className="h2 container__col--smaller">{mainTitle}</h2>
          <div className="container__col--larger">
            <p className="text-p mb-[60px] lg:mb-[80px]">{mainDescription}</p>
          </div>
        </div>
      </section>


      <FaqBlock faq={faqPavement} />

    </main>
  )
}
