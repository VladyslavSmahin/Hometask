import React, { useState } from 'react';

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-500 bg-gray-200"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="ml-2">Will consider relocation</span>
            </label>
        </div>
    );
};

export default CheckBox;
