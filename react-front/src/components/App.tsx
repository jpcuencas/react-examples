import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import  Header  from './layout/Header';
import Footer from './layout/Footer';
import VideosList from './videos/VideosList';
import VideosForm from './videos/VideosForm';
import Navbar from './navbar/Navbar';


function App() {
  return (
    <>
    <header>
        <Header />
    </header>
        <div className="container">
            <BrowserRouter>
                <Navbar/>
                <div className="container p-4">
                    <Switch>
                        <Route exact path="/" component={VideosList} />
                        
                        <Route path="/video-details" component={VideosForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
     <footer> 
        <Footer />
     </footer>
    </>
  );
}

export default App;
