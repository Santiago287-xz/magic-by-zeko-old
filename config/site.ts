export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Magic by Zeko",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Products",
      href: "/#products",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Ayuda",
      href: "/ayuda",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		twitter: "https://twitter.com/getnextui",
		instagram: "https://twitter.com/getnextui",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	  },
};

//   links: {
// 	github: "https://github.com/nextui-org/nextui",
// 	twitter: "https://twitter.com/getnextui",
// 	docs: "https://nextui-docs-v2.vercel.app",
// 	discord: "https://discord.gg/9b6yyZKmH4",
// sponsor: "https://patreon.com/jrgarciadev"
// }