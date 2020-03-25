import React from 'react';
import NotFoundImage from '../../../static/images/NotFound.gif';

const NotFound = () => {
    return (
        <section className={`hero`}>
            <div className={`hero-body`}>
                <div className={`container`}>
                    <div className={`columns is-centered`}>
                        <div className={`column is-mobile is-12`}>
                            <figure>
                            <img src={NotFoundImage} className={`not-found image-is-square`} alt="Not Found" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default NotFound;