import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicePage from "@/components/ServicePage";
import { services } from "@/content/services";
import { Service } from "@/types/common";


export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { posluha: 'montazh-brukivky' },
    { posluha: 'blagoustriy-teritoriyi' },
    { posluha: 'montazh-parkaniv' },
    { posluha: 'demontajni-roboti' },
    { posluha: 'montazh-kanalizacijnih-sistem' },
    { posluha: 'betonni-roboti' },
    { posluha: 'poslugy-riznorobochih' },
  ];
}

export default async function Page({ params }: { params: Promise<{ posluha: string }> }) {
  const { posluha } = await params;

  const data = services[posluha as Service];

  return (
    <div className="">
      <div className="absolute z-[100] w-full">
        <Header />
      </div>

      <div className="hero-section">
        <Image
          src={data.image}
          alt={data.mainTitle}
          fill
          priority
          className="object-cover"
        />
        <h1 className="hero-section__title">{data.heroTitle}</h1>
        <p className="hero-section__subtitle">{data.heroSubtitle}</p>
      </div>

      <ServicePage data={data} />

      <Footer />
    </div>
  );
}
