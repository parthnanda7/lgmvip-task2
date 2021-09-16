import React from 'react';


const SearchBox = ({ searchfeild, searchChange }) => {
    return (
        <div className='pa2 ' style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'end',
        
        }}>
            <input
                className='pa3 ba b--green bg-lightest-blue'style={{
            height: '70px',
        
        }}
                type="search"
                placeholder='search by name'
                onChange={searchChange} />
        </div>
    );
}

export default SearchBox;

