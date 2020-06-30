import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import {
  Helmet
} from 'react-helmet';
import User from '../User';
import UsersService from '../../services/UsersService';

const Users = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await UsersService.getUsers();
        setUsers([...result.data.users]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [])
  return (
    <Fragment>
      <Helmet>
          <title>Users | React Express App</title>
      </Helmet>
      <div className={`columns is-centered is-vcentered is-mobile`}>
        <div className={`column is-12`}>
          <table className={`table is-fullwidth is-striped is-hoverable`}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.length ? (users.map(user => <User key={user.id} userDetails={user} />)) : 
                <tr>
                  <td className={`has-text-centered is-size-4`} colSpan="5">No users found</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default Users;
