import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {connect} from "react-redux";
import { hideNewUserDialog, newUser } from "../../../redux/actions/users.actions";

class AddNewUserDialog extends Component {

  constructor(props){
    super(props);

    this.state = {
      validated: false,
      name: this.props.isDemo ? 'Dumitrescu Ionel' : '',
      email: this.props.isDemo ? 'ionel.dumitrescu@companie.ro' : '',
      isVip: false
    }
  }

  handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onCancel();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      this.setState({validated: false})

    }
    else{
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        isVip: this.state.isVip
      }

      this.props.hideNewUserDialog();
      this.props.newUser(newUser);
    }
    
    this.setState({validated: true})
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

  render(){

    return (
      <Modal show={true} onHide={this.handleClose} backdrop="static" keyboard={false}>
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

          <Modal.Header>
            <Modal.Title>Adăugare utilizator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nume și prenume</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dumitrescu Ionel" autoFocus required 
                  onChange={this.handleNameChange}
                  value={this.state.name}
                />
                <Form.Control.Feedback type="invalid">
                  Te rugăm să introduci numele și prenumele tău
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Adresa de email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ionel.dumitrescu@companie.ro"
                  required 
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
                <Form.Control.Feedback type="invalid">
                  Te rugăm să introduci o adresă validă de email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Sunt client VIP"
                  onChange={this.handleVIPChange}
                />

                <br/>
                <Form.Text id="passwordHelpBlock" muted>
                  O poză o să fie aleasă automat pentru dumeavoastră<br/>
                  De asemenea, salariul este fix: 10000 RON
                </Form.Text>
               
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="light" onClick={this.handleClose}>
              Renunță
            </Button>
            <Button type="submit" variant="dark">
              Adaugă
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    hideNewUserDialog: () => dispatch(hideNewUserDialog()),
    newUser: (data) => dispatch(newUser(data)),
  }
}

export default connect(null, mapDispatchToProps)(AddNewUserDialog);
