import React from 'react';
import './Login.css';
import SignIn from './Signin';

function Login() {
    const [signIn, setSignIn] = React.useState(false);

    return (
        <div className="login">
            <div className="login__background">
                <img
                    className="login__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button
                    className="login__button"
                    onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>
                <div className="login__gradient" />
                <div className="login__body">
                    {signIn ? (
                        <SignIn />
                    ) : (
                        <>
                            <h1 className="login__title">
                                Unlimited films, Tv programmes and more.
                            </h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>
                                Ready to watch? Enter your email to create or
                                restart your membership
                            </h3>
                            <div className="login__input">
                                <form>
                                    <input
                                        type="email"
                                        placeholder="email address"
                                    />
                                    <button
                                        className="login__getstarted"
                                        onClick={() => setSignIn(true)}
                                    >
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
