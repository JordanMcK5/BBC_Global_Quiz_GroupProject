import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/map">View map</Link><br></br>
            </li>
            <li>
                <Link to="/quiz/national-animals">National Animals Quiz</Link>
            </li>
            <li>
                <Link to="/quiz/capitals">Capitals Quiz</Link>
            </li>
            <li>
                <Link to="/quiz/flags">Flags Quiz</Link>
            </li>
            <li>
                <Link to="/quiz/flags/scores">Flags Scores</Link>
            </li>
            <li>
                <Link to="/quiz/capitals/scores">Capitals Scores</Link>
            </li>
        </ul>
    );
};

export default NavBar;