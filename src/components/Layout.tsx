import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Ana Sayfa",
    "href": "#hero"
  },
  {
    "name": "Hakkımızda",
    "href": "#about"
  },
  {
    "name": "Hizmetler",
    "href": "#services"
  },
  {
    "name": "İletişim",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  }
];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Vikings Bay Bakım Salonu"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Randevu Al",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Vikings Bay Bakım Salonu"
      columns={[
        {
          items: [
            {
              label: "Ana Sayfa",
              href: "#hero",
            },
            {
              label: "Hizmetler",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Hakkımızda",
              href: "#about",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/sinanincibarbers/",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
