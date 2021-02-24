import React from 'react';
import './Login.css';
import { auth } from './firebase';

function SignIn() {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
            .then((authuser) => {
                console.log(authuser);
            })
            .catch((err) => alert(err));
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
            .then((user) => console.log(user))
            .catch((err) => alert(err));
    };
    return (
        <div className="signIn">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input
                    ref={passwordRef}
                    placeholder="password"
                    type="password"
                />
                <button type="submit" onClick={(e) => signIn(e)}>
                    Sign In
                </button>
                <h4 onClick={(e) => register(e)}>
                    <span>New to netflix? </span>Sign Up Now
                </h4>
            </form>
        </div>
    );
}

export default SignIn;
