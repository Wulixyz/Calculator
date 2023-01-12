import React, { Component } from 'react';
import NavBar from './narBar';
import { Route,Routes,Navigate } from 'react-router-dom';
import Home from './content/home';
import Calculate from './content/calculate';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFiund';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/home' element={<Home></Home>}></Route>
                        <Route path='/calculate' element={<Calculate></Calculate>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='/register' element={<Register></Register>}></Route>
                        <Route path='/404' element={<NotFound></NotFound>}></Route>
                        <Route path='*' element={<Navigate replace to='/404'></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;