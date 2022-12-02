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
import LayoutWithColors from "./components/LayoutWithColors";

class App extends Component {

  constructor(props) {
    super(props);
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
      <SettingsRightPanel />

      <LayoutWithColors>
        <Routes>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Navigate to="/users" replace />} />
          
          <Route path="/users" element={<UserList />}/>
          <Route path="/posts" element={<PostList />} />
          <Route path="/about" element={<AboutPage />} />

        </Routes>
      </LayoutWithColors>

      <Footer />
      
      </>
    );
  }
}

export default App;