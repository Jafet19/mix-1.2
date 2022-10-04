import React from "react";
import VideoBg from "../gifs/FinalHome.mp4"
import Header from "./Header";

function Home(){
    return(
        <div className="Movie">
            <Header />
            <video src={VideoBg} autoPlay loop muted/>
        </div>
    )
}

export default Home;
