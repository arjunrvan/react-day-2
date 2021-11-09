import React from 'react';
// import classes from './menu.module.css';

class menuSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionText: this.props.sectionTitle,
        };
    }

    render () {
        return (
            <div style ={{borderBottom: '2px solid white', marginTop: '30px'}}>
                <h2>{this.state.sectionText}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default menuSection;