import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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

  handleClose(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.onCancel();
  }

  handleSubmit(e){
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

      this.props.onNewUser(newUser);
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
      <Modal show={true} onHide={() => this.handleClose()} backdrop="static" keyboard={false}>
          <Form noValidate validated={this.state.validated} onSubmit={(e) => this.handleSubmit(e)}>

          <Modal.Header>
            <Modal.Title>Adăugare utilizator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {/* <form>
          <div className="form-group">
            <label htmlFor="txtNume">Nume</label>
            <input
              id="txtNume"
              className="form-control"
              type="text"
              placeholder="Nume si prenume"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="txtEmail">Email</label>
            <input
              id="txtEmail"
              className="form-control"
              type="email"
              placeholder="Adresa de email"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="ckGold">Client GOLD &nbsp;</label>
            <input id="ckGold" className="form-check-input" type="checkbox" />
          </div>
          <br />
          <button type="submit" className="btn btn-dark">
            Adauga
          </button>
        </form> */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nume și prenume</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dumitrescu Ionel" autoFocus required 
                  onChange={(e) => this.handleNameChange(e)}
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
                  onChange={(e) => this.handleEmailChange(e)}
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
                  onChange={(e) => this.handleVIPChange(e)}
                />

                <br/>
                <Form.Text id="passwordHelpBlock" muted>
                  O poză o să fie aleasă automat pentru dumeavoastră<br/>
                  De asemenea, salariul este fix: 10000 RON
                </Form.Text>
               
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="light" onClick={(e) => this.handleClose(e)}>
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

export default AddNewUserDialog;
