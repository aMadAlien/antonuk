import Image from "next/image";
import DreamImg1 from '@/public/images/fence-1.jpg'
import DreamImg2 from '@/public/images/fence-2.jpg'
import DreamImg3 from '@/public/images/paving-1.jpg'
import Paving1 from '@/public/images/paving-2.jpg'
import Sewerage1 from '@/public/images/sewerage-1.jpg'
import Dismantling1 from '@/public/images/dismantling-1.jpg'
import Concrete1 from '@/public/images/concrete-1.jpg'
import Improvement1 from '@/public/images/improvement-1.jpg'
import Handymen1 from '@/public/images/handymen-1.jpg'
import Accordion from "@/elements/Accordion";
import { faq } from "@/content/faq";
import Link from "next/dist/client/link";

const sourcesList = [
  {
    img: Paving1,
    href: '/montazh-brukivky',
    title: 'Монтаж бруківки'
  },
  {
    img: Improvement1,
    href: '/blagoustriy-teritoriyi',
    title: 'Благоустрій території'
  },
  {
    img: DreamImg1,
    href: '/montazh-parkaniv',
    title: 'Монтаж парканів'
  },
  {
    img: Dismantling1,
    href: '/demontajni-roboti',
    title: 'Демонтажні роботи'
  },
  {
    img: Sewerage1,
    href: '/montazh-kanalizacijnih-sistem',
    title: 'Монтаж каналізаційних систем'
  },
  {
    img: Concrete1,
    href: '/betonni-roboti',
    title: 'Бетонні роботи'
  },
  {
    img: Handymen1,
    href: '/poslugy-riznorobochih',
    title: 'Послуги різноробочих'
  },
];
import Form from "./Form";


export default function Homepage() {
  return (
    <main>
      <section className="px-container py-[60px] md:pt-[120px] md:pb-[80px]">
        <div className="container flex max-md:gap-8 md:justify-between max-md:flex-col">
          <h2 className="h2 container__col--smaller">Професійні роботи для вашої ділянки</h2>
          <div className="container__col--larger">
            <p className="text-p mb-[60px] lg:mb-[80px]">Благоустрій території, укладання бруківки, бетонні роботи, каналізація та паркани — все, що потрібно для функціональної та охайної ділянки. Працюємо швидко, акуратно та з увагою до деталей, щоб результат виглядав професійно і служив довго.</p>

            <div className="stats__container">
              <div className="stats__block">
                <div className="stats__title">150+</div>
                <div className="stats__text">Успішних проектів</div>
              </div>
              <div className="stats__block">
                <div className="stats__title">80+</div>
                <div className="stats__text">Задоволених клієнтів</div>
              </div>
              <div className="stats__block">
                <div className="stats__title">~22 000м²</div>
                <div className="stats__text">Опрацьовані площі</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-container py-[60px] md:py[120px]">
        <div className="container">

          <div className="md:ml-auto md:w-[70%]">
            <h3 className="h3 mb-[18px] md:mb-6">Strategic Location</h3>
            <div className="text-p mb-[60px] md:mb-10">Cluster housing perumnas is located in an area that is easily accessible from various directions. You can reach the city center, airport, train station, bus terminal, and other important places easily and quickly.</div>

            <h3 className="h3 mb-[18px] mb-6">Modern Design</h3>
            <div className="text-p mb-[60px] mb-10">Cluster housing perumnas has a modern and elegant house design. You can choose the type of house that suits your taste and needs, ranging from type 36 to type 120. </div>

            <h3 className="h3 mb-[18px] mb-6">Guaranteed Security</h3>
            <div className="text-p">Cluster housing perumnas has an integrated security system. Each cluster is equipped with a fence, gate, and guard post that are monitored by professional security officers. In addition, each house is also equipped with a fire alarm and CCTV.</div>
          </div>
        </div>
      </section> */}

      <section className="px-container max-w-[1500px] mx-auto">
        <div className="flex flex-wrap max-md:justify-center gap-5">
          {
            sourcesList.map((item, index) => (
              <Link key={index} href={item.href} className="flex flex-col gap-3 flex-[0_1_420px]">
                <Image
                  src={item.img}
                  width={420}
                  height={420}
                  alt={item.title}
                  className="aspect-square object-cover rounded-[8px] md:brightness-75 hover:brightness-100 transition-all duration-500"
                />
                <span>{item.title}</span>
              </Link>
            ))
          }
        </div>
      </section>

      <section className="px-container py-[60px] md:pt-[120px] md:pb-[80px]">
        <h2 className="md:hidden h2 mb-8">Ваша територія <br />— наша робота</h2>
        <p className="md:hidden text-p mb-[60px]">Беремо на себе всі етапи робіт: від демонтажу та підготовки ділянки до монтажу бруківки, парканів, каналізаційних систем і бетонних конструкцій. Допомагаємо з плануванням, підбором матеріалів та контролем якості, щоб ви отримали результат, який служитиме роками.</p>

        <div className="container flex max-md:items-center gap-3 md:gap-[33px] md:justify-between">
          <div className="container__col--smaller">
            <h2 className="max-md:hidden h2 mb-6">Ваша територія <br />— наша робота</h2>
            <p className="max-md:hidden text-p mb-[66px]">Беремо на себе всі етапи робіт: від демонтажу та підготовки ділянки до монтажу бруківки, парканів, каналізаційних систем і бетонних конструкцій. Допомагаємо з плануванням, підбором матеріалів та контролем якості, щоб ви отримали результат, який служитиме роками.</p>
            <Image
              src={DreamImg3}
              width={560}
              height={100}
              alt=""
              className="lg:h-[65vh] md:w-[90%] ml-auto object-cover rounded-[8px] hover:brightness-80 transition-all duration-500"
            />
          </div>
          <div className="container__col--larger">
            <Image
              src={DreamImg1}
              width={560}
              height={100}
              alt=""
              className="w-full h-auto md:h-[60vh] object-cover rounded-[8px] mb-4 md:mb-[3vw] hover:brightness-80 transition-all duration-500"
            />
            <Image
              src={DreamImg2}
              width={560}
              height={100}
              alt=""
              className="w-[80%] h-auto aspect-[460/310] object-cover rounded-[8px] hover:brightness-80 transition-all duration-500"
            />
          </div>
        </div>
      </section>

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

      <Form />
    </main>
  )
}
