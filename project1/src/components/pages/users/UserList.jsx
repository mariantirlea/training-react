import { Component } from "react";
import UserItem from "./UserItem";
import UserItemPlaceholder from "./UserItemPlaceholder";
import AddNewUserDialog from "./AddNewUserDialog";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {connect} from "react-redux";
import { fetchUsers, hideDeletedUserToast, hideNewUserDialog, showNewUserDialog } from "../../../redux/actions/users.actions";

class UserList extends Component {
    
    constructor(props){
        super(props);

        this.state = {
          placeholderSizes: [],
        }
    }

    componentDidMount(){
      this.generatePlaceholderUsers();
      this.props.loadAllUsers();
    }

    generatePlaceholderUsers() {
      const count = Math.floor(Math.random() * 10) + 1;
      const placeholderSizes = [...Array(count).keys()].map(() =>
        [...Array(3).keys()].map(() => Math.floor(Math.random() * 10) + 3)
      );
  
      this.setState({ placeholderSizes });
    }

  render() {

    return (
      <div className="container mb-1">

        <div className="row mb-2">
          <div className="col-md-6 offset-md-6 d-flex flex-row-reverse">
           <button className='btn btn-dark' data-bs-toggle="tooltip" data-bs-title="Adaugă un utilizator nou" onClick={() => this.props.showNewUserDialog()}><i className="bi bi-person-plus"></i></button>
          </div>
        </div>
        <div className="row">

          {this.props.isLoading &&
            this.state.placeholderSizes.map((current, index) => {
              return <UserItemPlaceholder key={index} sizes={current} />;
            })}

          {!this.props.isLoading &&
            this.props.users.map((user, index) => <UserItem onDeleteUser={(userId) => this.onDeleteUser(userId)} key={user.id} user={user} />)}

          {!this.props.isLoading && this.props.users.length === 0 && (
            <h4>Nu există nimic de afișat!</h4>
          )}

        </div>

        {this.props.isAddNewUser && <AddNewUserDialog isDemo={this.props.isDemo} onCancel={() => this.props.hideNewUserDialog()} />}
        
        {this.props.showDeletedUserToast && <ToastContainer position="bottom-end" className="p-3" containerPosition="fixed">
          <Toast className="bg-white text-dark" onClose={this.props.hideDeletedUserToast} show={this.props.showDeletedUserToast} delay={1500} autohide>
            <Toast.Body>Utilizatorul <span className="fw-bold">{this.props.deletedUser}</span> a fost șters!</Toast.Body>
          </Toast>
        </ToastContainer>}
        

      </div>
    );

  }
}

function mapStateToProps(store){

  return {
    isDemo: store.settings.isDemo,
    users: store.usersInfo.users,
    isLoading: store.spinner.isLoading,
    isAddNewUser: store.usersInfo.isAddNewUser,
    showDeletedUserToast: store.usersInfo.showDeletedUserToast,
    deletedUser: store.usersInfo.deletedUser
  }
  
}

function mapDispatchToProps(dispatch){
  return {
    loadAllUsers: () => dispatch(fetchUsers()),
    showNewUserDialog: () => dispatch(showNewUserDialog()),
    hideNewUserDialog: () => dispatch(hideNewUserDialog()),
    hideDeletedUserToast: () => dispatch(hideDeletedUserToast())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);