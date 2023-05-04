import {Outlet} from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
const About = ()=>{
    return(
        <div>
            <h1>About Us page</h1>
            <p>This is the Namaste  React Live Course Chapter 07 - Finding The Path 🚀</p>
            <ProfileClass name={"Dharmendra Class"}/>
            <Profile name={"Dharmendra"}/>
            {/* <Outlet/> */}
        </div>
    )
}

export default About;