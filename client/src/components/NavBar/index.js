import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBars = () => {
    const { isAuthenticated } = useAuth0();
    
    return (
        <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBars;
