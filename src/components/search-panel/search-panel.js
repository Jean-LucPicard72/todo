import React from 'react';



import './search-panel.css';

const SearchPanel = () => {

    const SearchText = 'Type here to search';
    const seachStyle = {
        fontSize: '18px'
    };

    return (
        <div className="d-flex">
            <input className=""
            style={seachStyle}        
            placeholder={SearchText} />            
        </div>
    );
};

export default SearchPanel;