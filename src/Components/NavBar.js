import React from 'react';

const NavBar = () => {
    return (
        <section className="nav">
            <section className="userInfo">
                <div className="userPhoto"></div>
                <div className="info">
                    <p className="userName">Alexander Pierce</p>
                    <span className="dot"></span>
                    <p className="userStatus">Online</p>
                </div>
            </section>
            <section className="mainNavigation">
                <p className="navigation-font">
                    MAIN NAVIGATION
                </p>
             </section>
             <section className="navBar">
                 <div><p>Form</p></div>
                 <div><p>Dashboard</p></div>
             </section>
        </section>
    )
}

export default NavBar;