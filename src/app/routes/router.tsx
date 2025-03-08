import { Route, Routes } from "react-router-dom";
import { LINKS } from "./routes";
import { NotFound } from "@/pages/NotFound";

function Router() {
  return (
    <Routes>
      {LINKS.map((link) => (
        <Route key={link.path} path={link.path} element={link.element} />
      ))}
      <Route path="*" element={<NotFound>Страница не найдена :(</NotFound>} />
    </Routes>
  );
}

export default Router;
