export interface NavItem {
  title: string;
  path: string;
  badge?: string;
}

export const navigation: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Research Domains",
    path: "/research-domains",
  },
  {
    title: "Resources",
    path: "/resources",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];