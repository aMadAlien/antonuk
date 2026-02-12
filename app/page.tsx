import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import HeroImage from '@/public/images/Hero_Section.jpg'

export default function Home() {
  return (
    <div className="">
      <div className="absolute z-[100] w-full">
        <Header />
      </div>

      <div className="hero-section">
        <Image
          src={HeroImage}
          alt="hero image"
          fill
          priority
          className="object-cover"
        />
        <h1 className="hero-section__title">
          Комплексні роботи
          <br />
          для вашої ділянки
        </h1>

        <p className="hero-section__subtitle">Якісно. Вчасно. Під ключ.</p>
      </div>

      <Homepage />

      <Footer />
    </div>
  );
}
