import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../utils/API"
import DeleteBtn from "../components/DeleteBtn";

const Saved = () => {
    const { user } = useAuth0();
    const { nickname, email } = user;
    const [ artists, setArtists ] = useState([])

    useEffect(() => {
         API.getArtists().then(results => {
             setArtists(results.data)
         })
    },[]) 

    function deleteBook(artistData) {
        API.deleteBook({ artist: artistData.name, picture: artistData.picture })
          // .then(res => loadBooks())
          .then(results => {
            console.log(results)})
          .catch(err => console.log(err));
      }

    return (
        <>
           {console.log(artists)}
            <Jumbotron>
                <h1>Hi, {nickname}!</h1>
                {artists.length > 0 ? artists.map(artist => {
                    return (
                        <>
                        <h2>Artist: {artist.artist}</h2>
                        <img src={artist.picture}/>
                        <DeleteBtn onClick={() => deleteBook(artist)} />
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