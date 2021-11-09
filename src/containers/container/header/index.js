import React from "react";
import searchIcon from '../../../assets/images/search.svg';
// import classes from './header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div style = {{display:'flex'}}>
                    <img style = {{width:'20px', height:'20px', margin:'0 20px'}} src = {searchIcon}/>
                    <h4>Search by title, genre and years</h4>
                </div>
            </header>
        );
    }
}

export default Header;