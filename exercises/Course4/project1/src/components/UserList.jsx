import UserItem from "./UserItem";
import { Component } from "react";

class UserList extends Component {
    
    constructor(props){
        super(props);

        // this.state = {
        //   users: [{
        //     id: 1,
        //     name: 'Jack Sparrow',
        //     email: 'jack.sparrow@react.com',
        //     isVip: false
        //   },{
        //     id: 2,
        //     name: 'Hector Barbossa',
        //     email: 'hector.barbossa@react.com',
        //     isVip: true
        //   },{
        //     id: 3,
        //     name: 'Davy Jones',
        //     email: 'davy.jones@react.com',
        //     isVip: false
        //   }]
        // }
    }

  render() {

    const {users} = this.props;

    return (
      <>
        <h3>Utilizatori</h3>
        {/* {this.state.users.map((user, index) => <UserItem key={index} name={user.name} email={user.email} isVip={user.isVip} />)} */}

        
        {users.map((user, index) => <div key={user.id} className="col-12 col-md-6 mb-4"><UserItem user={user} /></div>)}
      

      </>
    );

  }
}

export default UserList;
