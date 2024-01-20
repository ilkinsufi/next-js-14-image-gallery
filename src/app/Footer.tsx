"use client";

import Link from "next/link";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container className="align-items-center justify-content-center d-flex">
        <Nav>
          <NavLink
            as={Link}
            target="_blank"
            href="https://www.ilkinsufi.com"
            active={pathname === "/hello"}
          >
            <span className="text">
              <u>Ilkin Mammadov</u>
            </span>{" "}
            tərəfindən yaradıldı
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
