import React, { useState, useEffect } from 'react';
import User from '../User';
import UsersService from '../../services/UsersService';

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        document.title = 'Users';
    })

    useEffect(() => {
        (async () => {
            try {
                const result = await UsersService.index();
                setUsers([...result.data.users]);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])
    return (
        <section className={`hero`}>
            <div className={`hero-body`}>
                <div className={`container`}>
                    <div className={`columns is-centered`}>
                        <div className={`column is-mobile is-12`}>
                            <table className={`table is-fullwidth is-striped is-hoverable`}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Address</th>
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
                </div>
            </div>
        </section>

    );
}

export default Users;
