import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';

function App() {
    const user = useSelector(selectUser);
    console.log('my user', user);
    const dispatch = useDispatch();
    React.useEffect(() => {
        console.log('inside app!');
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                console.log(userAuth);
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    }),
                );
            } else {
                dispatch(logout());
            }
        });
        return unsubscribe;
    }, [dispatch]);
    return (
        <div className="App">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Switch>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;
