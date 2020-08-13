// import React from "react";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         Dashboard
//       </a>
//       <a className="navbar-brand" href="/">
//         Saved
//       </a>
//       <a className="navbar-brand" href="/">
//         Search
//       </a>
//     </nav>
//   );
// }

// export default Nav;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBars = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar bg="primary" variant="dark">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="mr-auto">
                {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
                {/* <Nav.Link href="/features">Features</Nav.Link> */}
                <Nav.Link href="/saved">Saved</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBars;


