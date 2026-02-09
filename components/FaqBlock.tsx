import Accordion from '@/elements/Accordion'
import { FAQ } from '@/types/common'

export default function FaqBlock({ faq }: { faq: FAQ[] }) {
  return (
    <section className="px-container py-[60px] md:py-[120px]">
      <div className="container flex gap-8 md:justify-between max-md:flex-col">
        <div className="container__col--smaller">
          <h2 className="h2 mb-8 md:mb-6">Часто задавані питання</h2>
          <p className="text-p">Тут ви знайдете відповіді на найбільш поширені питання щодо наших послуг. Якщо у вас є інші запитання, не соромтеся звертатися до нас!</p>
        </div>

        <div className="container__col--larger">
          <Accordion data={faq} />
        </div>
      </div>
    </section>
  )
}
