import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/quiz/national-animals">National Animals Quiz</Link>
            </li>
            <li>
                <Link to="/quiz">Quiz</Link>
            </li>
        </ul>
    );
};

export default NavBar;