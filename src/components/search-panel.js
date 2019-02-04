import React from 'react';

import ItemStatusFilter from './item-status-filter';

import './search-panel.css';

const SearchPanel = () => {

    const SearchText = 'Type here to search';
    const seachStyle = {
        fontSize: '18px'
    };

    return (
        <div className="input-group search-input">
            <input className=""
            style={seachStyle}        
            placeholder={SearchText} />
            <span className="input-group-btn">
                <ItemStatusFilter />
            </span>
        </div>
    );
};

export default SearchPanel;