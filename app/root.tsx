import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react"
import type { LinksFunction } from "@remix-run/node"
import { MainHeader } from "~/components/MainHeader"
import { MainFooter } from "~/components/MainFooter"

import "./tailwind.css"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({
  children,
  showHeader = true,
}: {
  children: React.ReactNode
  showHeader?: boolean
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {showHeader && <MainHeader />}
        {children}
        <MainFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          {error.status === 404 ? (
            <div className="text-center">
              <h1 className="text-8xl font-bold text-primary/70 mb-4">404</h1>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Halaman Tidak Ditemukan
              </h2>
              <p className="text-muted-foreground mb-8">
                Maaf, halaman yang Anda cari tidak tersedia atau telah
                dipindahkan.
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href="/"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Kembali ke Beranda
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-6xl font-bold text-primary/70 mb-4">
                {error.status}
              </h1>
              <p className="text-muted-foreground">{error.statusText}</p>
            </div>
          )}
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-60 md:py-36 text-center">
        <h1 className="text-6xl font-bold text-primary/70 mb-4">Kesalahan</h1>
        <p className="text-muted-foreground">
          Terjadi kesalahan yang tidak terduga.
        </p>
      </div>
    </Layout>
  )
}

export default function App() {
  return <Outlet />
}
