import React, { useState, Fragment } from 'react';

//images
import wobaLogo from '../images/awoba-logo-transparent.png';

//classnames
import classNames from 'classnames';

//firebase
import { auth } from '../firebase/firebase';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleSubmitResetLink = () => {
        setIsClicked(true);
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setMessage('Password reset email sent!');
            })
            .catch((err) => {
                setMessage(err.message);
                setIsClicked(false);
            });
        setIsClicked(true);
    };

    return (
        <Fragment> 
            <div className="main-wrap">
                <div className="nav-header bg-transparent shadow-none border-0">
                    <div className="nav-top w-100">
                        <img alt="" src={wobaLogo} className="woba-logo"/>
                        <a href="/"><span className="d-inline-block fredoka-font ls-3 fw-600 text-woba-primary font-xxl logo-text mb-0">AWOBA</span></a>
                        <button className="nav-menu me-0 ms-auto"></button>
        
                        <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                        <a href="/register" className="header-btn d-none d-lg-block bg-woba-primary fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                    style={{backgroundImage: `url("https://images.pexels.com/photos/5058915/pexels-photo-5058915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}></div>

                    <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                        <div className="card shadow-none border-0 ms-auto me-auto login-card">
                            <div className="card-body rounded-0 text-left">
                                <h2 className="fw-700 display1-size display2-md-size mb-4">Enter <br />your email</h2>
                                {
                                    message
                                    &&
                                    (
                                        <div className="alert alert-warning" role="alert">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                            <p className='style2-input font-xsss'>{message}</p>
                                        </div>
                                    )
                                }                     
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <input
                                            type="Email"
                                            className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Your Email Adress"
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                    </div>
                                </form>
                                
                                <div className="col-sm-12 p-0 text-left">
                                    <div
                                        className={classNames("form-group mb-1 pointer", {'pointer-progress': isClicked}, {'click-zero:': isClicked})}
                                        onClick={handleSubmitResetLink}
                                    >
                                        <p className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">
                                            Click to reset password
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </div>

            </div>
        </Fragment>
    );
};

export default Forgot;