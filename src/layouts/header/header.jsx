import React from 'react'
import Link from 'gatsby-link'
import { Menu } from 'react-feather'
import "./header.scss"
import logo from "./bp.svg"

const notOpen = () => alert('The application deadline has passed, please check back in January 2024')

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuFlag: false
        }
    }

    toggleMenu = () =>
        this.setState(prevState => ({menuFlag: prevState.menuFlag ? false : true}))

    menuClasses = () =>
        this.state.menuFlag ? ['menuItemList', 'menuItemList--active'].join(' ') : ['menuItemList']

    render() {
        return (
            <div>
            <div className="header">
                <div className="logo">
                    <a to="/">
                        <img src={logo} /> <h3> Community Scholarship Program</h3>
                    </a>
                </div>
                <div className="menu">
                    <div className="menuIcon"><Menu onClick={this.toggleMenu} /></div>
                    <div className={this.menuClasses()}>
                        {/* <a className="menuItem" onClick={notOpen} style={{'cursor': 'pointer'}}>Apply</a> */}
                        <a className="menuItem" href="https://apply.bpscholarships.com/application/login">apply</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="#Instructions">instructions</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="#Eligibility">eligibility</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="#selection-criteria">selection criteria</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="#Contact">contact</a>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default Header
