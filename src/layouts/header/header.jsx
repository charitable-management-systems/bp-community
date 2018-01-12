import React from 'react'
import Link from 'gatsby-link'
import "./header.scss"
import logo from "./bp.svg"

const notOpen = () => alert('We are not yet accepting scholarships for the 2018 program year')

const Header = () => (
    <div className="header">
        <div className="logo">
            <a to="/">
                <img src={logo} /> <h3> Community Scholarship Program</h3>
            </a>
        </div>
        <div className="menu">
            <a className="menuItem" onClick={notOpen} style={{'cursor': 'pointer'}}>Apply</a>
            <a className="menuItem" href="#Instructions">instructions</a>
            <a className="menuItem" href="#Eligibility">eligibility</a>
            {/* <Link className="menuItem" to="/awardees">awardees</Link> */}
            <a className="menuItem" href="#selection-criteria">selection criteria</a>
            <a className="menuItem" href="#Contact">contact</a>
        </div>
    </div>
)

export default Header