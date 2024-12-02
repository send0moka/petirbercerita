/* eslint-disable react/prop-types */
import React, { useState } from "react"
import {
  UMKM_MENU_ITEMS,
  DESA_MENU_ITEMS,
  KKN_MENU_ITEMS,
} from "~/config/navigation"

import { Link } from "@remix-run/react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "~/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "~/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import { MenuIcon, ChevronDownIcon } from "lucide-react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

// Reusable ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Desktop Navigation Menu Component
const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex flex-1 justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/umkm">
              <NavigationMenuTrigger>UMKM</NavigationMenuTrigger>
            </a>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {UMKM_MENU_ITEMS.map((item) => (
                  <ListItem key={item.href} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="/desa">
              <NavigationMenuTrigger>Desa</NavigationMenuTrigger>
            </a>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {DESA_MENU_ITEMS.map((item) => (
                  <ListItem key={item.href} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="/kkn">
              <NavigationMenuTrigger>KKN</NavigationMenuTrigger>
            </a>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {KKN_MENU_ITEMS.map((item) => (
                  <ListItem key={item.href} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/artikel">Artikel</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/dokumentasi">Dokumentasi</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

// Mobile Navigation Component
const MobileNavigation = () => {
  const [isUmkmOpen, setIsUmkmOpen] = useState(false)
  const [isDesaOpen, setIsDesaOpen] = useState(false)
  const [isKknOpen, setIsKknOpen] = useState(false)

  const renderCollapsibleMenu = (
    title: string,
    href: string,
    items: Array<{ href: string; title: string }>,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
  ) => (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-between">
        <a href={href} className="text-white">{title}</a>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronDownIcon
              className={`h-4 w-4 text-white transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pl-4 mt-2 space-y-2">
        {items.map((item) => (
          <Link 
            key={item.href} 
            to={item.href} 
            className="block text-muted-foreground hover:text-white"
          >
            {item.title}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )

  return (
    <div className="md:hidden absolute right-1">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <MenuIcon className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-md bg-gray-950 border-none">
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <div className="flex justify-end">
              <SheetClose asChild></SheetClose>
            </div>
          </SheetHeader>

          <nav className="mt-4 space-y-4">
            {renderCollapsibleMenu(
              "UMKM",
              "/umkm",
              UMKM_MENU_ITEMS.map((item) => ({
                href: item.href,
                title: item.title,
              })),
              isUmkmOpen,
              setIsUmkmOpen
            )}

            {renderCollapsibleMenu(
              "Desa",
              "/desa",
              DESA_MENU_ITEMS.map((item) => ({
                href: item.href,
                title: item.title,
              })),
              isDesaOpen,
              setIsDesaOpen
            )}

            {renderCollapsibleMenu(
              "KKN",
              "/kkn",
              KKN_MENU_ITEMS.map((item) => ({
                href: item.href,
                title: item.title,
              })),
              isKknOpen,
              setIsKknOpen
            )}

            <Link 
              to="/artikel" 
              className="block text-white hover:text-muted-foreground"
            >
              Artikel
            </Link>
            <Link 
              to="/dokumentasi" 
              className="block text-white hover:text-muted-foreground"
            >
              Dokumentasi
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

// Main Header Component
export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-4 relative">
        {/* Left: Logo */}
        <div className="absolute left-4 flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span className="text-xl font-bold text-white">Petir Bercerita</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Hamburger Menu */}
        <MobileNavigation />
      </div>
    </header>
  )
}