import { HEADER_NAV_LINKS } from "@/app/routes/routes";
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
      {HEADER_NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          to={link.link}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {link.label}
        </Link>
      ))}
    </NavWrapper>
  );
};
