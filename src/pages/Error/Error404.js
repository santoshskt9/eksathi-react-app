import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const ErrorGif = require('../../resources/img/404.gif');

const styles = {
    root: {
        minHeight: '80vh',
    },
    caption: {
        fontSize: '8rem',
        fontWeight: '900'
    },
    img: {
        width: '50rem',
    },
    title: {
        position: 'absolute',
        top: '9em',
    },
    button: {
        position: 'absolute',
        top: '26em',
    }
}

const Error404 = () => {

    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div
                class="container d-flex flex-column align-items-center justify-content-center"
                style={styles.root}
            >
                <img
                    src={ErrorGif}
                    alt="page not found image"
                    style={styles.img}
                />
                {/* <p className='caption' style={styles.caption}>404</p> */}
                <h1 class="text-center" style={styles.title}>Oops! something went wrong</h1>
                <button
                    class="btn mt-4 btn-warning text-white fw-bold px-4 py-2 fs-5 rounded-4"
                    style={styles.button}
                    onClick={()=>{
                        navigate(-1);
                    }}
                >
                    Go back
                </button>
            </div>
        </React.Fragment>
    )
}

export default Error404;