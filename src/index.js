import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Experience from './pages/experience';
import Profile from './pages/profile';
import Projects from './pages/projects';
import Contact from './pages/contact';
import SplashPage from './pages/splash-page';
import Error404 from './pages/404';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Helmet} from 'react-helmet'


ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Cameron Mckiddie | Welcome</title>
      <meta name='description' content='A portfolio project to showcase my work.'/>
      <meta name='theme-color' content='#A7CBD9' />
    </Helmet>
    <Router>
    <Routes>
        <Route
          exact path="/experience"
          element={<Experience/>}
        />
        <Route
          exact path="/profile"
          element={<Profile/>}
        />
        <Route
          exact path="/projects"
          element={<Projects/>}
        />
        <Route 
          exact path='/contact'
          element={<Contact/>}
        />
        <Route
          exact path="/"
          element={<SplashPage/>}
        />
        <Route
          path="*"
          element={<Error404/>}
        />
      </Routes>
    </Router>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
