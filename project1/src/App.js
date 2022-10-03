import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { Component } from "react";
import Navbar from "./components/navigation/Navbar";
import SettingsRightPanel from "./components/navigation/SettingsRightPanel";
import UserList from "./components/pages/users/UserList";
import PostList from "./components/pages/posts/PostList";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

class App extends Component {

  constructor(){
    super();

    this.state = {
      navBarStatus: {isUsersPageActive: true, isPostsPageActive: false}
    }
  }

  onNavBarChange = (status) => {
    this.setState({navBarStatus: status});
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

      <Navbar onNavBarChange={(status) => this.onNavBarChange(status)}/>
      <SettingsRightPanel/>

      {this.state.navBarStatus.isUsersPageActive && <UserList />}
      {this.state.navBarStatus.isPostsPageActive && <PostList />}

      {/* {!this.state.usersMaintActive && <div className="container" style={{ marginTop: 50}}><PostList /></div>}

      {this.state.usersMaintActive && <div className="container" style={{ marginTop: 50, color: this.state.textColor }}>
        <div className="row">
          <div className="col-sm-5">
            <div style={{ backgroundColor: this.state.color }}>
              <UserForm />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="container"><div className="row">{this.state.users.length !== 0 ? <UserList users={this.state.users} /> : <h4>Incarcare utilizatori...</h4> }</div></div>
          </div>
        </div> */}

        {/* <hr />

        <div className="row">
          <div className="col" style={{ textAlign: "left" }}>
            <h4>Selecteaza culorile (fundal si text)</h4>
            <input type="color" value={this.state.color} onChange={e => this.applyColor(e)} />
            <p>{this.state.color}</p>
            <input type="color" value={this.state.textColor} onChange={e => this.applyTextColor(e)} />
            <p>{this.state.textColor}</p>
          </div>
          <div className="col" style={{ textAlign: "left" }}>
            <h4>Task incrementare numar <Badge bg="secondary">{this.state.counter}</Badge></h4>
            <button className="btn btn-light" onClick={this.increment}> + </button>
          </div>
        
        </div>

        <hr />

        <div className="row">
          <div className="col" style={{ textAlign: "left" }}>
            <TestComponentIf/>
          </div>
          <div className="col" style={{ textAlign: "left" }}>
            <TestComponentMap/>
          </div>
        
        </div>

        <hr />

        <div className="row">
          <div className="col" style={{ textAlign: "left" }}>
            <h4>Test cu evenimente de 'Lifecycle'</h4>

            <button className={"btn" + (this.state.showCounter ? " btn-success" : " btn-dark")} onClick={() => this.setState({showCounter: !this.state.showCounter})}>{this.state.showCounter ? 'Ruleaza...' : 'Nu ruleaza'}</button>

            {this.state.showCounter && <TestComponentLifecycle/>}

          </div>
          <div className="col" style={{ textAlign: "left" }}>
            
        </div>

      </div>

      <br/> */}
{/* 
      </div>} */}

    </>
    );
  }
}

export default App;
