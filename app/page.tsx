import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      <div className="absolute z-[100] w-full">
        <Header />
      </div>

      <div className="hero-section">
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
