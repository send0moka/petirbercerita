import { Link } from "@remix-run/react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
import {
  MoonIcon,
  SunIcon,
  SettingsIcon,
  MenuIcon,
  ChevronDownIcon,
} from "lucide-react"
import { useTheme } from "~/hooks/useTheme"
import { Button } from "~/components/ui/button"
import { useState } from "react"

export function MainHeader() {
  const { theme, toggleTheme } = useTheme()
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-4 relative">
        {/* Left: Logo */}
        <div className="absolute left-4 flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-light.png" alt="Logo" className="h-8 dark:hidden" />
            <img
              src="/logo-dark.png"
              alt="Logo"
              className="hidden h-8 dark:block"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                {/* You can add NavigationMenuContent here */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                {/* You can add NavigationMenuContent here */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Control Menu */}
        <div className="absolute right-4 hidden md:flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>

          {/* Settings */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Settings"
            // Add onClick handler for settings
          >
            <SettingsIcon className="h-5 w-5" />
          </Button>

          {/* Login/Signup Buttons */}
          <div className="flex space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden absolute right-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex justify-end">
                  <SheetClose asChild></SheetClose>
                </div>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="mt-4 space-y-4">
                {/* Products Menu */}
                <Collapsible
                  open={isProductsOpen}
                  onOpenChange={setIsProductsOpen}
                >
                  <div className="flex items-center justify-between">
                    <span>Products</span>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${
                            isProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="pl-4 mt-2 space-y-2">
                    {/* Add your product submenu items here */}
                    <Link to="/products/category1" className="block">
                      Category 1
                    </Link>
                    <Link to="/products/category2" className="block">
                      Category 2
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                {/* Services Menu */}
                <Collapsible
                  open={isServicesOpen}
                  onOpenChange={setIsServicesOpen}
                >
                  <div className="flex items-center justify-between">
                    <span>Services</span>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="pl-4 mt-2 space-y-2">
                    {/* Add your services submenu items here */}
                    <Link to="/services/service1" className="block">
                      Service 1
                    </Link>
                    <Link to="/services/service2" className="block">
                      Service 2
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                {/* Static Links */}
                <Link to="/about" className="block">
                  About
                </Link>
                <Link to="/contact" className="block">
                  Contact
                </Link>

                {/* Mobile Control Menu */}
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Theme</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? (
                        <SunIcon className="h-5 w-5" />
                      ) : (
                        <MoonIcon className="h-5 w-5" />
                      )}
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Settings</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Settings"
                      // Add onClick handler for settings
                    >
                      <SettingsIcon className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Login/Signup Buttons */}
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                    <Button className="w-full">Sign Up</Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
