import React from 'react';
import Dropdown from 'react-dropdown';
import './DropDown.scss';

const DropDown = () => {
     const options = ['English', 'Hindi', 'Punjabi'];
     const defaultOption = options[0];
     return (
          <>
               <div>
                    <Dropdown
                         options={options}
                         value={defaultOption}
                         placeholder="Select an option"
                    />
               </div>
          </>
     );
};

export default DropDown;
