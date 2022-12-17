import React from 'react';
import classes from './CreateButton.module.css';

const CreateButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.createBtn}>
            {children}
        </button>
    );
};

export default CreateButton;

// <button className="custom-btn btn-8"><span>Read More</span></button>