import React from 'react'
import Link from 'gatsby-link'
import "./header.scss"
import logo from "./bp.svg"

const Header = () => (
    <div className="header">
        <div className="logo">
            <a to="/">
                <img src={logo} /> <h3> Community Scholarship Program</h3>
            </a>
        </div>
        <div className="menu">
            <a className="menuItem" href="#Eligibility">eligibility</a>
            <a className="menuItem" href="#Instructions">instructions</a>
            {/* <Link className="menuItem" to="/awardees">awardees</Link> */}
            <a className="menuItem" href="#selection-criteria">selection criteria</a>
            <a className="menuItem" href="#Contact">contact</a>
        </div>
    </div>
)

export default Header