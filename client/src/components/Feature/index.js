import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Feature = () => {
    const { user } = useAuth0();
    const { nickname, email } = user;

    return (
        <>
            <Jumbotron>
                <h1>Hello, {nickname}!</h1>
                <p>
                    Welcome the Feature Page.
                </p>
                <p>
                    I won't be refering to you by <b>{nickname}</b> if
                    this page wasn't authenticated, would have I
                    known your email address, <b>{email}</b>.
                </p>
            </Jumbotron>
        </>
    );
};

export default withAuthenticationRequired(Feature, {
    // onRedirecting: () => <Loading />,
    returnTo: "/features"
});