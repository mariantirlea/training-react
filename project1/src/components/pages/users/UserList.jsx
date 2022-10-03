import { Component } from "react";
import UserItem from "./UserItem";
import UserItemPlaceholder from "./UserItemPlaceholder";
import AddNewUserDialog from "./AddNewUserDialog";

class UserList extends Component {
    
    constructor(props){
        super(props);

        this.state = {
          users: [],
          isLoading: false,
          placeholderSizes: [],
          isAddNewUser: false
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
        .finally(() => this.setState({ isLoading: false }));
  
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
        user.image = "https://api.lorem.space/image/face?w=400&h=400&random" + user.id;
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
      this.setState({users: this.state.users.filter((user) => user.id !== userId)})
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

        {this.state.isAddNewUser && <AddNewUserDialog onCancel={() => this.setState({isAddNewUser: false})} onNewUser={(user) => this.onNewUser(user)}/>}
        
      </div>
    );

  }
}

export default UserList;