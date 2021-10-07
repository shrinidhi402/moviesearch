import React from 'react'

function SearchBar(props) {
    return (
        <div className="col col-sm-3">
            <input className="form-control" placeholder="Search Now"
                value={props.value}
                onChange={(event) => {
                    props.setSearch(event.target.value);
                }}
            ></input>
        </div>
    )
}

export default SearchBar
