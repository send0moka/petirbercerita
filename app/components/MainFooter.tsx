import { Link } from "@remix-run/react"
import { FOOTER_NAV_ITEMS, CONTACT_INFO } from "~/config/navigation"

export function MainFooter() {
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-0 flex gap-10 lg:gap-40 flex-col lg:flex-row py-12">
        {/* Logo Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/icon.png" alt="Logo" className="inline-flex h-10" />
            <span className="text-lg font-semibold">|</span>
            <img src="/unsoed.png" alt="Logo" className="inline-flex h-10" />
          </div>
          <p className="text-sm text-muted-foreground">
            KKN Periode Januari-Februari 2025<br/>
            Desa Petir, Kecamatan Purwanegara<br/>
            Kabupaten Banjarnegara, Jawa Tengah<br/>
            Indonesia, 53472
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Navigation Sections */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {FOOTER_NAV_ITEMS.map((section) => (
              <div className="w-32" key={section.title}>
                <a href={section.href} className="font-semibold text-white">{section.title}</a>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontak Desa</h4>
            <ul className="space-y-3 mb-4">
              {CONTACT_INFO.map((contact) => (
                <li key={contact.label} className="flex items-center space-x-2">
                  <contact.icon className="h-5 w-5 text-muted-foreground" />
                  <a 
                    href={contact.link} 
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Notice */}
      <div className="py-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Petir Bercerita. All rights reserved.
        </p>
      </div>
    </footer>
  )
}