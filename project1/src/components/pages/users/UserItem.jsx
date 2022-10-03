import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { Component } from "react";
import DeleteUser from './DeleteUser';

class UserItem extends Component {
    // function UserItem({name, email, a, b}) {
    // const {id, name, image, salary, email, isVip, ...rest} = user;

    constructor(props){
        super(props);

        this.state = {
            loaded: false,
            isDeleteUser: false
        }
    }

    onDeleteUser() {
        this.setState({isDeleteUser: false});
  
        this.props.onDeleteUser(this.props.user.id);
    }

    render() {
        const {id, name, image, salary, email, isVip, ...rest} = this.props.user;

        return (

            <div className="col-12 col-md-4 mb-4">      
                <div className="card bg-dark text-white special-box">
                    
                    {this.state.loaded ? null :
                        <div
                            style={{
                            position: 'relative',
                            background: '#3a3a3a',
                            height: '200px'
                            }}
                        />
                    }

                    <img
                        style={this.state.loaded ? {} : {display: 'none'}}
                        src={image}
                        onLoad={() => this.setState({loaded: true})}
                    />

                    <div className="card-img-overlay">
                    <h4 className="card-title text-truncate">{isVip && <Badge style={{marginRight: '10px'}} bg="warning">VIP</Badge>}<span className='overlay'>{name}</span></h4>
                    <hr style={{color: '#c6c6c6'}}/>
                    <p className="card-text"><span className='overlay'>{email}</span></p>
                    <p className="card-text" style={{textAlign: 'right', fontWeight: 'bold'}}><span className='overlay'>{salary} RON</span></p>
                    
                    <button className='btn btn-danger btn-delete position-absolute' onClick={() => this.setState({isDeleteUser: true})}>Șterge</button>
                    </div>
                </div>

                {this.state.isDeleteUser && <DeleteUser onCancel={() => this.setState({isDeleteUser: false})} onDeleteUser={() => this.onDeleteUser()}/>}

            </div>
        );
    }      
}

UserItem.propTypes = {
    isVip: PropTypes.bool
}

UserItem.defaultProps = {
    isVip: false
}

export default UserItem