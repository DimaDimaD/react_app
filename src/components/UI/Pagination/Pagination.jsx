import React from 'react';
import classes from "./Pagination.module.css";

const Pagination = ({pagesArray, page, setPage}) => {

    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map((p) => <span
                onClick={() => setPage(p)}
                key={p}
                className={(page === p)
                    ? classes.page + ' ' + classes.page__current
                    : classes.page}>
                        {p}
                    </span>)}
        </div>
    );
};

export default Pagination;