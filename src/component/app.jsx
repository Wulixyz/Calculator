import React, { Component } from 'react';
import NavBar from './narBar';
import { Route,Routes,Navigate } from 'react-router-dom';
import Home from './content/home';
import Calculate from './content/calculate';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFiund';

class App extends Component {
    state = {
        is_login: false,
        username: "",
    } 

    render() { 
        return (
            <React.Fragment>
                <NavBar is_login={this.state.is_login} username={this.state.username}></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home></Home>}></Route>
                        <Route path='/calculator/home' element={<Home></Home>}></Route>
                        <Route path='/calculator/calculate' element={this.state.is_login ? <Calculate></Calculate> : <Navigate replace to="/calculator/login"></Navigate>}></Route>
                        <Route path='/calculator/login' element={this.state.is_login ? <Navigate replace to="/calculator/home" /> : <Login />}></Route>
                        <Route path='/calculator/register' element={this.state.is_login ? <Navigate replace to="/calculator/home" /> : <Register />}></Route>
                        <Route path='/calculator/404' element={<NotFound></NotFound>}></Route>
                        <Route path='/calculator/*' element={<Navigate replace to='/404'></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;