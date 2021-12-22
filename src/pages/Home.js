import React, { Fragment } from "react";

//core components
import Header from '../components/Header';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


import Friends from '../components/Friends';
import Contacts from '../components/Contacts';
import Group from '../components/Group';
import Events from '../components/Events';
import Createpost from '../components/Createpost';
import Memberslider from '../components/Memberslider';
import Friendsilder from '../components/Friendsilder';
import Postview from '../components/Postview';
import Load from '../components/Load';
import Profilephoto from '../components/Profilephoto';



const Home = () => {
    return (
        <Fragment> 
            <Header />

            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="row feed-body">
                            <div className="col-xl-8 col-xxl-9 col-lg-8">
                                <Createpost />
                                <Postview id="32" postimage="post.png" avater="user.png" user="Hubert Nare" time="12 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                <Postview id="31" postimage="post.png" avater="user.png" user="Tino Makomo" time="30 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                <Postview id="33" postimage="post.png" avater="user.png" user="Laz Muchenje" time="4 hours ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                <Memberslider />
                                <Postview id="35" postimage="post.png" avater="user.png" user="Tendai Chimbetete" time="6 hours ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                <Friendsilder />
                                <Postview id="36" postimage="post.png" avater="user.png" user="Tendai Chimbetete" time="1 day ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                <Load />
                            </div>
                            <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                                <Friends />
                                <Contacts />
                                <Group />
                                <Events />
                                <Profilephoto />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popupchat />
            <Appfooter /> 
        </Fragment>
    );
}

export default Home;