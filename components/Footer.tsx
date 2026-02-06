import Link from "next/link";
import LogoIcon from "./icons/LogoIcon";
import { footerNavigation } from "@/content/navigation";

export default function Footer() {
  return (
    <footer className="px-container footer">
      <div className="flex max-md:flex-col items-start justify-between mb-[80px]">
        <div>
          <LogoIcon color="#12161D" />
          <p className="mt-6 text-lg">
            More Comfortable.
            <br />
            More Classy.
          </p>
        </div>
        <nav className="footer__nav">
          {
            footerNavigation.map((navItem, index) => (
              <div key={index} className="footer__nav-col">
                <div className="footer__nav-title">{navItem.title}</div>

                <ul className="footer__nav-list">
                  {
                    navItem.list.map((navList, index) => (
                      <li key={index}><Link href={navList.href}>{navList.title}</Link></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </nav>
      </div>

      <div className="footer__rights">
        <div>© 2026 Perumnas. All rights reserved</div>

        <ul className="footer__rights-list">
          <li><Link href=''>Terms of Service</Link></li>
          <li><Link href=''>Policy service</Link></li>
          <li><Link href=''>Cookie Policy</Link></li>
          <li><Link href=''>Partners</Link></li>
        </ul>
      </div>
    </footer>
  )
}
