import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Darkbutton from '../components/Darkbutton';
import awobaLogo from '../images/awoba-logo-transparent.png';

class Header extends Component {
    state = {
        isOpen: false,
        isActive: false,
        isNoti: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    toggleActive = () => this.setState({ isActive: !this.state.isActive });
    toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

    render() {
        const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
        const buttonClass = `${this.state.isOpen ? " active" : ""}`;
        const searchClass = `${this.state.isActive ? " show" : ""}`;
        const notiClass = `${this.state.isNoti ? " show" : ""}`;

        return (
            <div className="nav-header bg-white shadow-xs border-0">
                <div className="nav-top">
                    <span>
                        <img alt="" src={awobaLogo} className="woba-logo"/>
                    </span>
                    <Link to="/home"><span className="d-inline-block text-woba-primary logo-text-space fredoka-font ls-3 fw-600 font-xxl logo-text mb-0">AWOBA</span> </Link>
                    <span onClick={this.toggleActive} className="me-2 menu-search-icon ms-auto mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></span>
                    <button onClick={this.toggleOpen} className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
                </div>
                
                <form action="#" className="float-left header-search ms-3">
                    <div className="form-group mb-0 icon-input">
                        <i className="feather-search font-sm text-grey-400"></i>
                        <input type="text" placeholder="Start typing to search.." className="bg-grey border-0 text-grey-500 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />
                    </div>
                </form>

                <Link to="/home" className="p-2 ms-3 ms-auto menu-icon"><i className="feather-home font-xl text-woba-secondary"></i></Link>
                <Link to="/defaultMember" className="p-2 ms-3 menu-icon"><i className="feather-user font-xl text-woba-secondary"></i></Link>
                <span className={`p-2 pointer text-center ms-3 menu-icon ${notiClass}`} id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleisNoti}><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-woba-secondary"></i></span>
                <div className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`} aria-labelledby="dropdownMenu3">
                    <h4 className="fw-700 font-xss mb-4">Notification</h4>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Hubert Nare <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Lorem ipsum dolor sit amet, consectetur...</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Laz Muchenje <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Lorem ipsum dolor sit amet, consectetur...</h6>
                    </div>

                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Tino Makomo <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Lorem ipsum dolor sit amet, consectetur...</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Tendai Chimbetete <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Lorem ipsum dolor sit amet, consectetur...</h6>
                    </div>
                </div>
                <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-woba-secondary"></i></Link>
                <Darkbutton />
                <Link to="/defaultsettings" className="p-0 ms-3 menu-icon"><img src="assets/images/user.png" alt="user" className="w40 mt--1" /></Link>

                <nav className={`navigation scroll-bar ${navClass}`}>
                    <div className="container ps-0 pe-0">
                        <div className="nav-content">
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                                <ul className="mb-1 top-content">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/" className="nav-content-bttn open-font"><i className="feather-rss btn-round-md bg-woba-light-gray me-3 text-black"></i><span>Newsfeed </span></Link></li>
                                    <li><Link to="/defaultMember" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-woba-light-gray me-3 text-black"></i><span>Friends </span></Link></li>
                                </ul>
                            </div>

                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                                <ul className="mb-1">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/defaultsettings" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-settings me-3 text-grey-500"></i><span>Settings</span></Link></li>
                                    <li><Link to="/defaultmessage" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-message-square me-3 text-grey-500"></i><span>Chat</span><span className="circle-count bg-warning mt-0">3</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <div className={`app-header-search ${searchClass}`}>
                    <form className="search-form">
                        <div className="form-group searchbox mb-0 border-0 p-1">
                            <input type="text" className="form-control border-0" placeholder="Search..." />
                            <i className="input-icon">
                                <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                            </i>
                            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                                <i className="ti-close font-xs" onClick={this.toggleActive}></i>
                            </span>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Header;