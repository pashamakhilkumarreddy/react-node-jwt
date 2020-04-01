import React, { useState, useEffect } from 'react';
import UsersService from '../../services/UsersService';

const UserProfile = () => {
    let [userDetails, updateUserDetails] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const userId = parseInt(window.location.pathname.split('/').slice(-1));
                const result = await UsersService.show(userId);
                updateUserDetails(result.data.user[0]);
            } catch (err) {
                console.log(err.response)
            }
        })();
    }, []);

    const displayDetail = (detail) => detail ? detail : '';

    useEffect(() => {
        document.title = ``;
    }, []);

    return (
        <section className={`hero`}>
            <div className={`hero-body`}>
                <div className={`container`}>
                    <div className={`columns is-centered`}>
                        <div className={`column is-mobile is-12`}>
                            <div className={`card`}>
                                <div className={`card-content`}>
                                    <p className={`title`}>
                                        Name: {displayDetail(userDetails.name)}
                                    </p>
                                    <p className={`subtitle`}>
                                        Username: {displayDetail(userDetails.username)}
                                    </p>
                                    <p className={`subtitle`}>
                                        Email: {displayDetail(userDetails.email)}
                                    </p>
                                    <p className={`subtitle`}>
                                        Phone: {displayDetail(userDetails.phone)}
                                    </p>
                                </div>
                                <footer className={`card-footer`}>
                                    <p className={`card-footer-item`}>
                                        <span>
                                            <a href={displayDetail(userDetails.website)} target="_blank">Website</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile;