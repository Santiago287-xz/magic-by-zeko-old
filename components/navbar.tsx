import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, InstagramIcon } from "@/components/icons";

const lightLogoURL =
  "https://media.discordapp.net/attachments/1116888339967119460/1157748996434051173/image1.png?ex=6519bd46&is=65186bc6&hm=86275a0c1f15eea403bb28ba672d1d4e9c10fcaa1c53b1ee170aea990ff451c1&=&width=340&height=472";
const darkLogoURL =
  "https://media.discordapp.net/attachments/1116888339967119460/1157748996069142618/image.png?ex=6519bd46&is=65186bc6&hm=d26b0960292e3c8675c97108275e1580d50cb79fb9ad036a88c4e28c5d260940&=&width=354&height=473";

export const Navbar = () => {
  const [imageUrl, setImageUrl] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const imageUrl = theme === "light" ? lightLogoURL : darkLogoURL;
    setImageUrl(imageUrl)
  }, [theme]);

  return (
    <>
      <NextUINavbar
        className="backdrop-blur-sm border-b border-foreground/10 animate-fade-down animate-duration-[350ms] 
      animate-delay-100 bg-[#ebeff3db] dark:bg-background/95"
        maxWidth="xl"
        position="sticky"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink href="/">
              <img src={imageUrl} alt="Logo" width={40} height={40} />
            </NextLink>
          </NavbarBrand>
          <div className="hidden lg:flex gap-2 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Button href={item.href} as={Link} variant="light">
                  {item.label}
                </Button>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-3">
            <Link isExternal href={siteConfig.links.twitter}>
              <TwitterIcon className="w-8 h-8 text-foreground" />
            </Link>
            <Link isExternal href={siteConfig.links.instagram}>
              <InstagramIcon className="w-6 h-8  text-foreground" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
