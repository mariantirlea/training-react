import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { Component } from "react";
import Navbar from "./components/navigation/Navbar";
import SettingsRightPanel from "./components/navigation/SettingsRightPanel";
import PostList from "./components/pages/posts/PostList";
import UserList from "./components/pages/users/UserList";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from "./components/pages/404/NotFoundPage";
import AboutPage from "./components/pages/about/AboutPage";
import Footer from './components/footer/Footer';

class App extends Component {

  constructor(){
    super();

    this.state = {
      settings: {}
    }
  }

  onSettingsChange = (settings) => {
    this.setState({settings});
    
  }

  initTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  componentDidMount() {
    this.initTooltips();
  }

  render() {

    return (
      <>
      <Navbar/>
      <SettingsRightPanel onSettingsChange={(settings) => this.onSettingsChange(settings)}/>

      <Routes>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/users" replace />}/>
        
        <Route path="/users" element={<div className="pt-3" style={{ backgroundColor: this.state.settings.bgColor }}><UserList settings={this.state.settings} /></div>}/>
        <Route path="/posts" element={<div className="pt-3" style={{ backgroundColor: this.state.settings.bgColor, color: this.state.settings.txtColor }}><PostList settings={this.state.settings} /></div>}/>
        <Route path="/about" element={<AboutPage />}></Route>

      </Routes>
      <Footer />
      
      </>
    );
  }
}

export default App;
