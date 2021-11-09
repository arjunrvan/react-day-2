import React from "react";
import Profile from '../../../components/profile';
import infinity from '../../../assets/images/infinity.jpg';
import spiderman from '../../../assets/images/spiderman.jpg';
import thor from '../../../assets/images/thor.jpg';
import batman from '../../../assets/images/batman.jpg';

const DATA = [
    {
        poster: infinity,
        name: 'Avengers: Infinity War',
        category: 'Action',
    },
    {
        poster: spiderman,
        name: 'Spiderman: No Way Home',
        category: 'Action',
    },
    {
        poster: thor,
        name: 'Thor 3: Ragnarok',
        category: 'Action',
    },
    {
        poster: batman,
        name: 'Batman: The Dark Knight Rises',
        category: 'Action',
    }
];

class Content extends React.Component {
    render() {
        return (
            <div style = {{margin:'50px 0', display:'flex', flexWrap:'wrap'}}>
                { DATA.map( list => <Profile name = {list.name} poster = {list.poster} category = {list.category}/>)}
            </div>
        );
    }
}

export default Content;