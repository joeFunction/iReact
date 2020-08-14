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
         getArtists()
    },[]) 

    function getArtists () {
        API.getArtists().then(results => {
            console.log(results.data)
            setArtists(results.data)
        })
    }

    function deleteArtist(artistId) {
        console.log(artistId)
        API.deleteArtist(artistId)
          .then(res => console.log(res))
          .catch(err => console.log(err));
          getArtists();
        }
        
    return (
        <>
           {console.log(artists[0])}
            <Jumbotron>
                <h1>Hi, {nickname}!</h1>
                {artists.length > 0 ? artists.map(artist => {
                    return (
                        <>
                        <h2>Artist: {artist.artist}</h2>
                        <img src={artist.picture}/>
                        <DeleteBtn onClick={() => deleteArtist(artist._id)} />
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