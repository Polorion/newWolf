import React from "react"
import {Route, Routes} from "react-router-dom";
import styles from './content.module.css'
import News from "./News/News";
import Nav from "./navbar/navbat";
import Frends from "./Frends/Frends";
import Photo from "./Photo/Photo";
import Music from "./Music/Music";
import Groups from "./Groups/Groups";
import MassageContainer from "./Massage/MassageContainer";
import UsersContainer from "./Users/UsersContainer";
// import MainContainer from "./MainContent/MainContainer";
import LoginPage from "./Login/LoginPage";
import LazyLoader from "../HOC/LazzyLoading";

const MainContainer = React.lazy(() => import('./MainContent/MainContainer'));


const Content = (props) => {
    return (
        <div className="container">
            <div className={styles.center}>
                <Nav/>
                <div className={styles.all_content}>
                    <Routes>
                        <Route path="/Profile/*" element={
                           LazyLoader(MainContainer)}/>
                        <Route path="/Login" element={<LoginPage/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Frends" element={<Frends/>}/>
                        <Route path="/Users" element={<UsersContainer/>}/>
                        <Route path="/Massage/*" element={<MassageContainer/>}/>
                        <Route path="/Photo" element={<Photo/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Groups" element={<Groups/>}/>
                        <Route path="/idfrend/" element={<Groups/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Content
