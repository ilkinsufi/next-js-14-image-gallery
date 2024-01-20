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

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <NavbarBrand as={Link} href="/">
          NextJS 14.1 Şəkil Qalereyası
        </NavbarBrand>
        <NavbarToggle aria-controls="main-navbar" />
        <NavbarCollapse id="main-navbar">
          <Nav>
            <NavLink as={Link} href="/static" active={pathname === "/static"}>
              Statik Fetch
            </NavLink>
            <NavLink as={Link} href="/dynamic" active={pathname === "/dynamic"}>
              Dinamik Fetch
            </NavLink>
            <NavLink as={Link} href="/isr" active={pathname === "/isr"}>
            ISR
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
