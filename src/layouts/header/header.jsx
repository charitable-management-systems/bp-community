import React from 'react'
import Link from 'gatsby-link'
import "./header.scss"
import logo from "./bp.svg"

const Header = () => (
    <div className="header">
        <div className="logo"><img src={logo} /> <h3> Community Scholarship Program</h3></div>
        <div className="menu">
            <Link className="menuItem" to="/eligibility">eligibility</Link>
            <Link className="menuItem" to="/instructions">instructions</Link>
            <Link className="menuItem" to="/awardees">awardees</Link>
            <Link className="menuItem" to="/selection-criteria">selection criteria</Link>
            <Link className="menuItem" to="/contact">contact</Link>
        </div>
    </div>
)

export default Header