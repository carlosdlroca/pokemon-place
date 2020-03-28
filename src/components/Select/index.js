import React from "react";
import StyledSelect from "./Styles";

const Select = ({
    onChange,
    numOfShifts,
    valuesArray,
    includeZero,
    valuePrefix,
    selectedOption
}) => {
    const getValue = index => {
        if (
            valuesArray == null ||
            valuesArray.length == 0 ||
            valuesArray.length - 1 < index
        ) {
            return includeZero ? index : index + 1;
        }
        return valuesArray[index];
    };

    const options = Array(numOfShifts + includeZero)
        .fill(0)
        .map((_, idx) => {
            const value = getValue(idx);
            return (
                <option
                    value={value}
                    key={idx}
                    className={`Option Option-${idx}`}
                >
                    {`${valuePrefix}${value}`}
                </option>
            );
        });

    return (
        <StyledSelect onChange={onChange} defaultValue={selectedOption}>
            {options}
        </StyledSelect>
    );
};

Select.defaultProps = {
    valuesArray: null,
    includeZero: false,
    valuePrefix: ""
};

export default Select;
