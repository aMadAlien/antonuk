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
    mainTitle: string
    mainDescription: string
    faq: FAQ[]
  }
}