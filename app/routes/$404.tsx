import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-60 md:py-36 text-center">
      <h1 className="text-8xl font-bold text-primary/70 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-4">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-muted-foreground mb-8">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      
      <div className="flex justify-center gap-4">
        <Link 
          to="/" 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export const handle = {
  hydrateFallback: false
};