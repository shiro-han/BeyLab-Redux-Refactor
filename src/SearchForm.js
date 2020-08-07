import React from 'react';

function SearchForm(props) {
    return (
        <div className="form">
            <form onSubmit={e => e.preventDefault()}>
                <input onChange={props.searchHandler} value={props.searchValue} type="text" placeholder="Search"/>
            </form>
        </div>
    )
}

export default SearchForm;