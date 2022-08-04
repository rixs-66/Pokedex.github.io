import React from 'react'

export default function Pagination(props) {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <div className='pagination'>
            <button onClick={onLeftClick}>👈</button>
            <div className='page-container'>
                <p className='page'>{page} &nbsp; </p> 
                de {totalPages}
                </div>
            <button onClick={onRightClick}>👉</button>
        </div>
    )
}
