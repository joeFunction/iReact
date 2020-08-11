import React from "react";
import Guest from "../Guest";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react"; //copy line 4

const Home = () => { /// copy line 7 
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <Profile user={user} /> : <Guest />}
        </>
    );
};

export default Home;