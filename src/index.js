import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import App from './App';


ReactDOM.render(<BrowserRouter>
<BaseLayout>
    
        <Route exact path= '/' component={Home}> </Route>
        <Route    path ='/movielist' component={App}> </Route>
    
</BaseLayout>
</BrowserRouter>, document.getElementById('root'));



