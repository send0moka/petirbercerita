import { 
  Instagram, 
  Phone, 
  Mail 
} from "lucide-react"

export interface MenuLink {
  href: string
  title: string
  description?: string
}

export interface ContactInfo {
  icon: typeof Instagram | typeof Phone | typeof Mail
  label: string
  link: string
}

export const UMKM_MENU_ITEMS: MenuLink[] = [
  { href: "/umkm/kuliner", title: "Kuliner", description: "Temukan berbagai masakan tradisional yang memukau lidah, mulai dari camilan ringan hingga hidangan khas yang menggugah selera." },
  { href: "/umkm/busana", title: "Busana", description: "Tampil percaya diri dengan busana khas Desa Petir yang memadukan tradisi dan modern." },
  { href: "/umkm/kerajinan", title: "Kerajinan", description: "Sentuhan kreatif dan keahlian tangan terampil tercemin dalam setiap karya kerajinan kami." },
  { href: "/umkm/pertanian", title: "Pertanian", description: "Kekayaan alam Desa Petir terwujud dalam produk pertanian unggulan." },
  { href: "/umkm/peternakan", title: "Peternakan", description: "Temukan kualitas premium dari produk peternakan lokal." },
]

export const DESA_MENU_ITEMS: MenuLink[] = [
  { href: "/desa/asal-usul", title: "Asal Usul", description: "Desa Petir memiliki sejarah panjang yang menarik untuk dijelajahi." },
  { href: "/desa/pemetaan", title: "Pemetaan", description: "Lihat lokasi dan geografis Desa Petir yang memukau." },
  { href: "/desa/struktur", title: "Struktur Perangkat", description: "Kenali struktur perangkat desa yang menjalankan roda pemerintahan." },
  { href: "/desa/program", title: "Program Kegiatan", description: "Program kegiatan yang dilaksanakan oleh perangkat desa." },
  { href: "/desa/database", title: "Database", description: "Database desa yang berisi informasi penting." },
]

export const KKN_MENU_ITEMS: MenuLink[] = [
  { href: "/kkn/struktur", title: "Struktur Organisasi", description: "Kenali struktur organisasi KKN yang menjalankan roda kegiatan." },
  { href: "/kkn/program", title: "Program Kegiatan", description: "Program kegiatan yang dilaksanakan oleh mahasiswa KKN." },
  { href: "/kkn/database", title: "Database", description: "Database KKN yang berisi informasi penting." },
]

export const HEADER_ADDITIONAL_MENU_ITEMS: MenuLink[] = [
  { href: "/", title: "Artikel" },
  { href: "/", title: "Dokumentasi" },
]

export const FOOTER_NAV_ITEMS = [
  {
    title: "UMKM",
    href: "/umkm",
    links: UMKM_MENU_ITEMS.map(item => ({ label: item.title, href: item.href })),
  },
  {
    title: "Desa",
    href: "/desa",
    links: DESA_MENU_ITEMS.map(item => ({ label: item.title, href: item.href })),
  },
  {
    title: "KKN",
    href: "/kkn",
    links: KKN_MENU_ITEMS.map(item => ({ label: item.title, href: item.href })),
  },
  {
    title: "Lainnya",
    href: "",
    links: HEADER_ADDITIONAL_MENU_ITEMS.map(item => ({ label: item.title, href: item.href })),
  },
]

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Instagram,
    label: "@petirbercerita",
    link: "https://instagram.com/petirbercerita",
  },
  {
    icon: Phone,
    label: "+62 815-4201-6707",
    link: "https://wa.me/6281542016707",
  },
  {
    icon: Mail,
    label: "kkndesapetirunsoed@gmail.com",
    link: "mailto:kkndesapetirunsoed@gmail.com",
  }
]