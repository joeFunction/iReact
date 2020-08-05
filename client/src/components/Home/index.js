import React from "react";


const Home = () => {
    return (
        <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input type="text"  class="form-control" id="staticEmail2" placeholder="Email"/>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        </form>
    )
}

export default Home;