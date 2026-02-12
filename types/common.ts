import { StaticImageData } from "next/image"

export interface FooterNavigationProp {
  title: string
  list: {
    title: string
    href: string
  }[]
}

export interface FAQ {
  title: string
  text: string
}

export type Service =
  "montazh-brukivky"
  | "blagoustriy-teritoriyi"
  | "montazh-parkaniv"
  | "demontajni-roboti"
  | "montazh-kanalizacijnih-sistem"
  | "betonni-roboti"
  | "poslugy-riznorobochih";

export type ServiceData = {
  [key in Service]: {
    image: StaticImageData
    heroTitle: string
    heroSubtitle: string
    mainTitle: string
    mainDescription: string
    faq: FAQ[]
  }
}


export interface Media {
  mediaType: "photo" | "video"
  mediaUrl: StaticImageData | string
}

export interface SlideTrackProps {
  media: Media[]
  activeMedia: number
  onSelect: (arg: number) => void
}