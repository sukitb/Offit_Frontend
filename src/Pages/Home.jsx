import { Profile } from "../components/Profile/Profile";
import { useState } from "react";
import './Home.css'
import ProfileImgMock from "../assets/1528342403-8548fc2c1a5c1fd30ac85385d2c21767.jpg"
import Calendar from "react-calendar";
import Datebar from "../components/Datebar/Datebar";

export function Home() {

    // * Waiting for Back-end
    
    const [day, setSay] = useState(1)
    const [lastDay, setLastDay] = useState(1)
    const [profileName, setProfileName] = useState("Nam")
  
    return (
    <div className="Home">
      {/* <Navbar /> */}
      <Datebar />
      <Profile 
      imgSrc={ProfileImgMock} 
      name={profileName} 
      day={day}
      lastDay={lastDay} />
      {/* <StatusList /> */}
    </div>
  );
}
