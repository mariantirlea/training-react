import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class DeleteUser extends Component {

  constructor(props){
    super(props);
  }

  handleClose(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.onCancel();
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.onDeleteUser();
  }

  render(){

    return (
      <Modal show={true} onHide={() => this.handleClose()} backdrop="static" keyboard={false}>
          <Form noValidate onSubmit={(e) => this.handleSubmit(e)}>

          <Modal.Header>
            <Modal.Title>Ștergere utilizator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Text muted>
                  Sunteți pe cale să ștergeți o înregistrare. Această procedură este ireversibilă.
          </Form.Text>
          <br/><br/>
          <Form.Text>
                  Doriți să continuați?
                </Form.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="light" onClick={(e) => this.handleClose(e)}>
              Renunță
            </Button>
            <Button type="submit" variant="danger">
              Șterge
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    );
  }
}

export default DeleteUser;
