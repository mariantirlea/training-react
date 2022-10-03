import { Component } from "react";
import UserItem from "./UserItem";
import UserItemPlaceholder from "./UserItemPlaceholder";
import AddNewUserDialog from "./AddNewUserDialog";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

class UserList extends Component {
    
    constructor(props){
        super(props);

        this.state = {
          users: [],
          isLoading: false,
          placeholderSizes: [],
          isAddNewUser: false,
          showDeletedUserToast: false,
          deletedUser: ''
        }
    }

    componentDidMount(){
      this.generatePlaceholderUsers();

      this.setState({ isLoading: true });

      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => this.setState({users: data.map((current, index) => {
          return {
            id: current.id,
            name: current.name,
            email: current.email,
            isVip: Math.random() < 0.2, //20% percent probability to be VIP
            image: ("https://api.lorem.space/image/face?w=400&h=400&random" + current.id),
            salary: (parseFloat((Math.random() * 10000)) + 5000).toFixed(2)
          }
        })}))
        .catch((err) => console.error(err))
        .finally(() => setTimeout(() => this.setState({ isLoading: false }), this.props.settings.isDemo ? 3000 : 0));
  
    }

    generatePlaceholderUsers() {
      const count = Math.floor(Math.random() * 10) + 1;
      const placeholderSizes = [...Array(count).keys()].map(() =>
        [...Array(3).keys()].map(() => Math.floor(Math.random() * 10) + 3)
      );
  
      this.setState({ placeholderSizes });
    }
    handleClickAddNewUser = () => this.setState({isAddNewUser: true});

    onNewUser(user) {
      this.setState({isAddNewUser: false});

      this.setState((oldState) => {
      
        const oldUsers = oldState.users;
  
        user.id = Math.max([],...oldUsers.map(user => user.id)) + 1;
        user.image = "https://api.lorem.space/image/face?w=400&h=400&random=" + Date.now();
        user.salary = 10000;
  
        return {users: [...oldUsers, user].sort((left, right) => {
          if (left.id < right.id) {
            return 1;
          }
          if (left.id > right.id) {
            return -1;
          }
          return 0;
        })};
      });
    }

    onDeleteUser(userId){
      this.setState({showDeletedUserToast: true, users: this.state.users.filter((user) => user.id !== userId), deletedUser: this.state.users.filter((user) => user.id === userId)[0].name})
    }

    setShowDeletedUserToast(value){
      this.setState({showDeletedUserToast: value});
    }

  render() {
    
    return (
      <div className="container mb-1">

        <div className="row mb-2">
          <div className="col-md-6 offset-md-6 d-flex flex-row-reverse">
           <button className='btn btn-outline-primary' data-bs-toggle="tooltip" data-bs-title="Adaugă un utilizator nou" onClick={() => this.handleClickAddNewUser()}><i className="bi bi-person-plus"></i></button>
          </div>
        </div>
        <div className="row">

          {this.state.isLoading &&
            this.state.placeholderSizes.map((current, index) => {
              return <UserItemPlaceholder key={index} sizes={current} />;
            })}

          {!this.state.isLoading &&
            this.state.users.map((user, index) => <UserItem onDeleteUser={(userId) => this.onDeleteUser(userId)} key={user.id} user={user} />)}

          {!this.state.isLoading && this.state.users.length === 0 && (
            <h4>Nu există nimic de afișat!</h4>
          )}

        </div>

        {this.state.isAddNewUser && <AddNewUserDialog isDemo={this.props.settings.isDemo} onCancel={() => this.setState({isAddNewUser: false})} onNewUser={(user) => this.onNewUser(user)}/>}
        
        {this.state.showDeletedUserToast && <ToastContainer position="bottom-end" className="p-3" containerPosition="fixed">
          <Toast onClose={() => this.setShowDeletedUserToast(false)} show={this.state.showDeletedUserToast} delay={1500} autohide>
            <Toast.Body>Utilizatorul <span className="fw-bold">{this.state.deletedUser}</span> a fost șters!</Toast.Body>
          </Toast>
        </ToastContainer>}
        

      </div>
    );

  }
}

export default UserList;
