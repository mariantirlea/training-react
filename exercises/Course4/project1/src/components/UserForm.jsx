import styles from './UserForm.module.css';
import { Component } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class UserForm extends Component {
  
  constructor(){
    super();

    this.state = {
      name: 'John',
      email: 'email@test.com',
      isVip: false
    }
  }
  
  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handleVIPChange = (e) => {
    this.setState({isVip: e.target.checked});
  }

  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      isVip: this.state.isVip
    }

    // console.log(newUser);
    this.props.onUserCreated(newUser);
    this.setState({name: '', email: '', isVip: false});

  }

  render(){
    
    return (

      <div className="component-container">
        <h3>Adauga utilizator</h3>
  
        <br />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="txtNume">Nume</label>
            <input required={true}
              id="txtNume"
              className={"form-control " + styles['form-item']}
              type="text"
              placeholder="Nume si prenume"
              onChange={(e) => this.handleNameChange(e)}
              value={this.state.name}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="txtEmail">Email</label>
            <input required={true}
              id="txtEmail"
              className={"form-control " + styles['form-item']}
              type="email"
              placeholder="Adresa de email"
              onChange={(e) => this.handleEmailChange(e)}
              value={this.state.email}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="ckGold">Client GOLD &nbsp;</label>
            <input id="ckGold" className={"form-check-input " + styles['form-item']} type="checkbox" onChange={(e) => this.handleVIPChange(e)} checked={this.state.isVip}/>
          </div>
          <br />
          <button type="submit" className="btn btn-dark">
            Adauga
          </button>
        </form>
      </div>
    );
  }

}

export default UserForm;
