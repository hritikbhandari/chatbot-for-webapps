import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'


import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Blog from './pages/blog/Blog';
import Chatbot from './chatbot/Chatbot';

const App = () => {
    return ( 
        <div> 
            <BrowserRouter>
            <div className="container">
                <Header></Header>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Chatbot></Chatbot>
                
            </div>
            </BrowserRouter> 
        </div>
    )
}

export default App;