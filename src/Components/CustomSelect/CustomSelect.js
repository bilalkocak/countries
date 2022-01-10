import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import {IcArrowDropDown} from "../Icons";
import classNames from "classnames";

const primary = "#232323";
const gray = "#c9c9c9";

const CustomSelect = ({
                           options,
                           selectedOption,
                           handleChange,
                           placeholder,
                           searchable,
                           customClass,
                           height,
                           label,
                           defaultValue,
                           ...props
                       }) => {
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: "100%",
            boxShadow: "none",
            color: state.selectProps.menuColor,
            marginTop: 0,
            padding: 0,
            border: "1px solid",
            borderColor: primary,
            borderRadius: "0 0 4px 4px",
            borderTop: "none",
        }),
        menuList: (provided) => ({
            ...provided,
            padding: 0,
        }),
        option: (provided, state) => ({
            ...provided,
            color: primary,
            backgroundColor: state.isSelected ? "#f4f4f4" : "white",
            width: "100%",
            "&:hover": {
                backgroundColor: "#f4f4f4",
            },
            "&:last-child": {
                borderRadius: "0 0 4px 4px",
            },
        }),
        valueContainer: (provided) => ({
            ...provided,
            height,
            padding: "0 8px",
            maxHeight: height,
            minHeight: height,
            display: "flex",
            alignItems: "center",
        }),
        placeholder: (provided) => ({
            ...provided,
            marginTop: height < 45 && -8,
        }),
        singleValue: (provided) => ({ ...provided, marginTop: height < 45 && -8 }),
        input: (provided) => ({
            ...provided,
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height,
        }),
        control: (provided, state) => ({
            ...provided,
            borderColor: state.menuIsOpen ? primary : gray,
            boxShadow: "none",
            "&:hover": {
                borderColor: state.menuIsOpen ? primary : gray,
                borderBottomColor: gray,
            },
            borderRadius: state.menuIsOpen ? "4px 4px 0 0" : 4,
            borderBottomColor: gray,
            minHeight: height,
            height,
        }),
    };

    return (
        <div
            className={classNames("select-container", {
                [customClass]: Boolean(customClass),
            })}
        >
            {label && <div className={"select-label"}>{label}</div>}
            <Select
                components={{
                    DropdownIndicator: () => (
                        <div className={"select-indicator"}>
                            <IcArrowDropDown />
                        </div>
                    ),
                    IndicatorSeparator: () => null,
                }}
                defaultValue={defaultValue}
                styles={customStyles}
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder={placeholder}
                isSearchable={searchable}
                {...props}
            />
        </div>
    );
};
CustomSelect.defaultProps = { searchable: false, height: 48, label: null };

CustomSelect.propTypes = {
    searchable: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    selectedOption: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    height: PropTypes.number,
    label: PropTypes.string,
};

export default CustomSelect;
