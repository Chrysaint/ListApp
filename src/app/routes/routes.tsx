import Index from "@/pages/Index";
import Catalogue from "@/pages/catalogue/ui/Catalogue";
import { ReactNode } from "react";

type RouteProps = {
  link: string;
  path: string;
  element: ReactNode;
  label: string;
};

export const LINKS: RouteProps[] = [
  {
    link: "/",
    path: "/",
    element: <Index />,
    label: "Главная",
  },
  {
    link: "/catalogue/page=1",
    path: "/catalogue/:page",
    element: <Catalogue />,
    label: "Каталог",
  },
];
