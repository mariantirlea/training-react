import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TestComponentIf from "./components/learning/TestComponentIf";
import TestComponentMap from "./components/learning/TestComponentMap";
import TestComponentLifecycle from "./components/learning/TestComponentLifecycle";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { Component } from "react";
import Badge from 'react-bootstrap/Badge';

class App extends Component {

  state = {
    color: "#f6f6f6",
    counter: 10,
    showCounter: true,
    users: []
  };

  applyColor(e) {

    this.setState({color: e.target.value});

  }

  increment = e => {

    this.setState({counter: this.state.counter + 1});

  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({users: data.map((current, index) => {
        return {
          id: current.id,
          name: current.name,
          email: current.email,
          isVip: index === 2,
        }
      })}))
      .catch((err) => console.error(err))
      .finally(() => console.log('Finally...'));

  }

  render() {
    console.log(this.state.users);

    return (
      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col-sm-5">
            <div style={{ backgroundColor: this.state.color }}>
              <UserForm />
            </div>
          </div>
          <div className="col-sm-7">
            <UserList users={this.state.users} />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col" style={{ textAlign: "left" }}>
            <h4>Selecteaza o culoare</h4>
            <input type="color" value={this.state.color} onChange={e => this.applyColor(e)} />
            <p>{this.state.color}</p>
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

      <br/>

      </div>
    );
  }
}

export default App;
