import React from "react";
// import Loading from "../Loading/Loading";
import { Jumbotron } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Saved = () => {
    const { user } = useAuth0();
    const { nickname, email } = user;

    return (
        <>
            <Jumbotron>
                <h1>Hi, {nickname}!</h1>
                <p>
                    Welcome the Saved Page.
                </p>
                <p>
                    you by <b>{nickname}</b> if
                    this page wasn't authenticated, would have I
                    known your email address, <b>{email}</b>.
                </p>
            </Jumbotron>
        </>
    );
};

export default withAuthenticationRequired(Saved, {
    // onRedirecting: () => <Loading />,
    returnTo: "/saved"
});