import React from "react";
import classes from './profile.module.css';


class Profile extends React.Component {
      render() {
        return (
            <div className = {classes.profile_holder}>
                <img className = {classes.profile_poster} src = {this.props.poster} alt=''/>
                <p className = {classes.profile_name}>{this.props.name}</p>
                <p className = {classes.profile_category}>{this.props.category}</p>
            </div>
            // <div className = {classes.profile_holder}>
            //     <div className = {classes.profile_upper}>
            //         <div style = {{display:'flex'}}>
            //             <div className = {classes.profile_pic}></div>
            //             <div>
            //                 <h5>{this.props.name}</h5>
            //                 <p>{this.props.status}</p>
            //             </div>
            //         </div>
            //         <div className = {classes.profile_setting}></div>
            //     </div>

            //     <div className = {classes.profile_lower}>
            //         <div>
            //             <p 
            //                 className = {`${classes.profile_rating} 
            //                 ${this.props.rating > 3 
            //                 ? classes.high_rating 
            //                 : classes.low_rating
            //                 }`}
            //             >
            //                 {this.props.rating} star rating
            //                 </p>
            //         </div>
            //         <div>
            //             <img src = {icon_1} alt = ''/>
            //             <img src = {icon_2} alt = ''/>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Profile;