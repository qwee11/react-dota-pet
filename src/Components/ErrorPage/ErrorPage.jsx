import React from 'react';
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={styles.errorPage} >
            Error! <br />
            <button onClick={() => navigateToHeroList()} >Try Again!</button> 
        </div>
    );
}


const navigateToHeroList = () => {
    window.location.href = 'http://localhost:3000/hero-list'
}

export default ErrorPage;
