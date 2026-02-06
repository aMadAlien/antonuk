import Link from "next/link";
import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  return (
    <header className="header">
      <Link href='/'
      className="absolute left-[32px] top-[32px] -translate-y-1/2"
      ><LogoIcon /></Link>

      <nav className="ml-auto">
        <ul className="nav__items">
          <li className="nav__item">
            <Link href='tel:+380989797551'>+38 (098) 979 - 75 - 51</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
