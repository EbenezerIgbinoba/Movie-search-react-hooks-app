import React from 'react';

const Paginator = (props) => {
    return (
        <div className="paginatorWrapper">
            <div className="paginatorButtonsWrapper">
                <button className={`button success mr-2 ${props.currentPage === 1 ? 'disabled_button' : null}`} onClick={props.goTopreviousPage}>Prev</button> <button className="button success" onClick={props.goToNextPage}>Next</button>
            </div>
            
        </div>
    )
}


export default Paginator;