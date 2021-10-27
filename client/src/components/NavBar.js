import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/map">View Map</Link>
            </li>
            <li>
                <Link to="/quiz/flags">Flags Quiz</Link>
            </li>
            <li>
                <Link to="/quiz/capitals">Capitals Quiz</Link>
            </li>
            <li>
                <Link to="/quiz/national-animals">National Animals Quiz</Link>
            </li>
            <li>
                <Link to="/quiz/flags/scores" >Flags Scores</Link>
            </li>
            <li>
                <Link to="/quiz/capitals/scores" >Capitals Scores</Link>
            </li>
            {/* <img className="bbc_logo" height="30" src={`${process.env.PUBLIC_URL}/bbc.jpeg`}  /> */}
            <li>
                <Link to="/quiz/national-animals/scores" >National Animals Scores</Link>
            </li>
        </ul>
        </div>
    );
};

export default NavBar;