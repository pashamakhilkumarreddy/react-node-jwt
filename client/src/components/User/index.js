import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({userDetails: user}) => {
    return (
        <Fragment>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street ? user.address.street: 'Not Available'}</td>
                <td>
                    <Link to={`/users/${user.id}`} className={`button is-info`} data-class="view-user">View</Link>
                </td>
            </tr>
        </Fragment>
    );
}

User.propTypes = {
    userDetails: PropTypes.object
}

export default User;