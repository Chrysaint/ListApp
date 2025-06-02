import Catalogue from "@/pages/catalogue/ui/Catalogue";
import { MoviePage } from "@/pages/movie";
import { ReactNode } from "react";

type TRouteProps = {
  path: string;
  element: ReactNode;
};

type THeaderNavRoute = {
  link: string;
  label: string;
};

export const HEADER_NAV_LINKS: THeaderNavRoute[] = [
  {
    link: "/",
    label: "Каталог",
  },
  {
    link: "/profile",
    label: "Профиль",
  },
];

export const LINKS: TRouteProps[] = [
  {
    path: "/:page",
    element: <Catalogue />,
  },
  {
    path: "/:page",
    element: <Catalogue />,
  },
  {
    path: "movie/:id",
    element: <MoviePage />,
  },
];
