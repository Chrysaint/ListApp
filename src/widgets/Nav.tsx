import { LINKS } from "@/app/routes/routes";
import { Link } from "@/shared/ui/Link";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

export const Nav = () => {
  return (
    <NavWrapper>
      {LINKS.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {link.label}
        </Link>
      ))}
    </NavWrapper>
  );
};
