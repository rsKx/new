import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
    constructor() {
      super();

      this.state = {
        currentUser: null
      };
    }

    unsubscribeFromAuth = null

    componentDidMount () {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(onSnapshot => {
            this.setState({
              currentUser: {
                id: onSnapshot.id,
                ...onSnapshot.data()
              }
            });
          });
        }

        this.setState({currentUser: userAuth});
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </div>
    );
  }
}
export default App;
