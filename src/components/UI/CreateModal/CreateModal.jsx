import React from 'react';
import classes from './CreateModal.module.css'

const CreateModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.modalWindow];
    if (visible) {
        rootClasses.push(classes.active)
    };

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.modalWindowContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default CreateModal;