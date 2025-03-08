import Index from "@/pages/Index";
import Catalogue from "@/pages/Catalogue";
import { ReactNode } from "react";

type RouteProps = {
  path: string;
  element: ReactNode;
  label: string;
};

export const LINKS: RouteProps[] = [
  {
    path: "/",
    element: <Index />,
    label: "Главная",
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
    label: "Каталог",
  },
];
