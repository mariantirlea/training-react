import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

function UserItem({user}) {
    // function UserItem({name, email, a, b}) {

    const {id, name, email, isVip, ...rest} = user;

    return (
        <div className="card" style={{marginBottom: 20}}>
            <div className="card-body">
                <img src={`https://api.lorem.space/image/face?w=150&h=150&random=${id}`}/>
                <h4 className="card-title">{name}{isVip && <Badge style={{marginLeft: '10px'}} bg="warning">VIP</Badge>}</h4>
                <hr style={{color: '#c6c6c6'}}/>
                <p className="card-text">{email}</p>
            </div>
        </div>
    );

}

UserItem.propTypes = {
    isVip: PropTypes.bool
}

UserItem.defaultProps = {
    isVip: false
}

export default UserItem