import React from 'react';
import { FaFilter } from 'react-icons/lib/fa';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export const Filter = (props) => {
    return(
        <DropdownButton
            title={<span> <FaFilter/> Filter</span>}
            bsStyle='info'
            className="filter-dropdown"
            id={'filter-dropdown'}
        >
        <MenuItem onClick={() => props.changeCurrentFilter('ACTIVE')}>Active</MenuItem>
        <MenuItem onClick={() => props.changeCurrentFilter('DONE')}>Done</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={() => props.changeCurrentFilter('ALL')}>All</MenuItem>
      </DropdownButton>
    )
};


