import React from 'react';
import NotAuthorized from '../../../assets/images/NotAuthorized.png';

const NotAuthorized = () => {
    return (
        <section className={`hero`}>
            <div className={`hero-body`}>
                <div className={`container`}>
                    <div className={`columns is-centered`}>
                        <div className={`column is-mobile is-12`}>
                            <figure>
                                <img src={NotAuthorized} className={`not-authorized image-is-square`} alt="Not Authorized" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default NotAuthorized;