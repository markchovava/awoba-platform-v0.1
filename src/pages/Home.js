import React, { Fragment, useEffect, useState } from 'react';

//core components
import Header from '../components/Header';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import Friends from '../components/Friends';
import Contacts from '../components/Contacts';
import Group from '../components/Group';
import Events from '../components/Events';
import Createpost from '../components/Createpost';
import Friendsilder from '../components/Friendsilder';
import Postview from '../components/Postview';
import Load from '../components/Load';
import Profilephoto from '../components/Profilephoto';

import { useAuth } from '../Contexts/AuthContext';
import { useGlobalContext } from '../Contexts/GlobalContext';
import { db } from '../firebase/firebase';

const Home = () => {
    const [name, setName] = useState('');
    const [posts, setPosts] = useState('');
    const { uploadMsg_gl, uploadErr_gl } =  useGlobalContext();
    const { user } = useAuth();

    useEffect(() => {
        //get user name
        db.collection("awobaMembers").where("memberId", "==", user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    setName(doc.data().name);
                });
            })
            .catch((err) => (err));

        //get posts
        const unsbscribePosts = db.collection("posts")
            .onSnapshot((snapshot) => {
                const postList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    caption: doc.data().description,
                    image: doc.data().postImage
                }));
                setPosts(postList);
            });
        return () => unsbscribePosts();
    }, [user]);

    return (
        <Fragment> 
            <Header />

            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="row feed-body">
                            <div className="col-xl-8 col-xxl-9 col-lg-8">
                                { 
                                    uploadMsg_gl
                                    &&
                                    <div class="alert alert-success" role="alert">
                                        {uploadMsg_gl}
                                    </div>
                                }
                                {
                                    uploadErr_gl
                                    &&
                                    <div class="alert alert-danger" role="alert">
                                        {uploadErr_gl}
                                    </div>
                                }
                                <Createpost name={name}/>
                                {
                                    posts && posts.map((post, id) => {
                                        return (
                                            <div key={id}>
                                                <Postview postimage={post.image} avater="user.png" user="Hubert Nare" time="12 min ago" des={post.caption} />
                                                {id === 1 && <Friendsilder/>}
                                            </div>
                                        )
                                    })
                                }
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