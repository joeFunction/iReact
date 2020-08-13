import React, { useEffect, useState } from "react";
// import Loading from "../Loading/Loading";
import { Jumbotron } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../utils/API"
const Saved = () => {
    const { user } = useAuth0();
    const { nickname, email } = user;
    const [ artists, setArtists ] = useState([])

    useEffect(() => {
         API.getArtists().then(results => {
             setArtists(results.data)
         })
    },[]) 

    return (
        <>
           {console.log(artists)}
            <Jumbotron>
                {artists.length > 0 ? artists.map(artist => {
                    return (
                        <>
                        <h1>Hi, {nickname}!</h1>
                        <p>Welcome the Saved Page.</p>
                        <h2>artist: {artist.artist}</h2>
                        <img src={artist.picture}/>
                        </>
                    )
                })  : ""}
               
            </Jumbotron>
        </>
    )
};

export default withAuthenticationRequired(Saved, {
    // onRedirecting: () => <Loading />,
    returnTo: "/saved"
});