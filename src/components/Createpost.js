import React, { useState, useEffect } from 'react';

//firebase
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase/firebase';

const Createpost = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [caption, setCaption] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        db.collection("awobaMembers").where("memberId", "==", user.uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setName(doc.data().name);
            });
        })
        .catch((err) => err);
    });

    name && console.log(name)
    const handleUploadPost = () => {

    };

    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
            <div
                className="card-body p-0 pointer"
            >
                <div
                    className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
                    onClick={handleUploadPost}
                >
                    <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
                    Click to upload post
                </div>
            </div>
            <div className="card-body p-0 mt-3 position-relative">
                <figure className="avatar position-absolute ms-2 mt-1 top-5"><img src="assets/images/user.png" alt="icon" className="shadow-sm rounded-circle w30" /></figure>
                <textarea
                    name="message"
                    className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                    cols="30"
                    rows="10"
                    placeholder={`What's on your mind ${name ? name : ""}?`}
                    onChange={(e)=>setCaption(e.target.value)}
                >
                </textarea>
            </div>
            <div className="card-body d-flex p-0 mt-0">
            <div>
                {selectedImage && (
                    <div>
                        <img className="mb-1 rounded-xxl" alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <br />
                        <div
                            className="pointer mb-3 p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                            onClick={()=>setSelectedImage(null)}
                        >
                            Remove
                        </div>
                    </div>
                )}
                <label for="image-upload" className="text-grey-500 pointer">
                    <strong>
                        <i className="feather-image font-sm text-success me-2"></i>Attach image
                    </strong>
                    <br/>
                    <input
                        type="file"
                        id="image-upload"
                        name="myImage"
                        accept="image/*"
                        className="rounded-xxl font-xssss border-light-md pointer"
                        onChange={(event) => {
                            setSelectedImage(event.target.files[0]);
                        }}
                    />
                </label>
            </div>
            </div>
        </div>
        );
    };

export default Createpost;