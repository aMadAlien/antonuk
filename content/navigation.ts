import { FooterNavigationProp } from "@/types/common";

import Paving1 from '@/public/images/paving-2.jpg'
import Sewerage1 from '@/public/images/sewerage-1.jpg'
import Dismantling1 from '@/public/images/dismantling-1.jpg'
import Concrete1 from '@/public/images/concrete-1.jpg'
import Improvement1 from '@/public/images/improvement-1.jpg'
import Handymen1 from '@/public/images/handymen-1.jpg'
import DreamImg1 from '@/public/images/fence-1.jpg'

export const sourcesList = [
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

export const footerNavigation: FooterNavigationProp[] = [
  {
    title: "Послуги",
    list: sourcesList
  },
]