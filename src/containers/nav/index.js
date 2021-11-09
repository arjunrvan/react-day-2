import React from 'react';
import './nav.css';
import MenuList from '../../components/menuList';
import MenuSection from '../../components/menuSection';
import icon_1 from '../../assets/images/icon_1.png';
import icon_2 from '../../assets/images/icon_2.png';
import icon_3 from '../../assets/images/icon_3.png';
import icon_4 from '../../assets/images/icon_4.png';
import movieIcon from '../../assets/images/logo.jpg';
// import icon_5 from '../../assets/images/icon_5.png';
// import icon_6 from '../../assets/images/icon_6.png';
// import icon_7 from '../../assets/images/icon_7.png';
// import icon_8 from '../../assets/images/icon_8.png';
// import icon_9 from '../../assets/images/icon_9.png';
// import icon_10 from '../../assets/images/icon_10.png';

class Nav extends React.Component {
    render () {
        return (
            <nav>
                <img className = 'movieIcon' src = {movieIcon} alt=''/>

                <MenuSection>
                    <MenuList icon = {icon_1} title = 'New Releases'/>
                    <MenuList icon = {icon_2} title = 'Most Popular'/>
                    <MenuList icon = {icon_3} title = 'Recommended'/>
                    <MenuList icon = {icon_4} title = 'Top Chart'/>
                </MenuSection>

                <MenuSection>
                    <MenuList title = 'My Collection'/>
                    <MenuList title = 'Bookmark'/>
                    <MenuList title = 'History'/>
                    <MenuList title = 'Subscriptions'/>
                </MenuSection>

                {/* <MenuSection sectionTitle = 'Company'>
                    <MenuList icon = {icon_7} title = 'Menu One' noti = {16}/>
                    <MenuList icon = {icon_8} title = 'Menu Two' noti={2}/>
                    <MenuList icon = {icon_9} title = 'Menu Three'/>
                </MenuSection> */}
            </nav>
        );
    }
}

export default Nav;