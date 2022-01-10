import React, {useContext} from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import {IcArrowDropDown} from "../Icons";
import classNames from "classnames";
import {ThemeContext} from "../../Context/ThemeContext";
import './CustomSelect.scss'


const dark = {
    text: "#c6ccd0",
    secondText: "#2b3743",
    background: "#202d36",
    secondBackground: "#2b3743",
}

const light = {
    text: "#0e1113",
    secondText: "#3d4444",
    background: "#fafafa",
    secondBackground: "#ffffff",
}

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
    const [theme] = useContext(ThemeContext);
    const isDark = () => {
        return theme.mode === "dark"
    }
    const customStyles = {
        menu: (provided) => ({
            ...provided,
            width: "100%",
            boxShadow: "none",
            marginTop: 0,
            padding: 0,
            border: "1px solid",
            borderColor: isDark() ? dark.background : light.background,
            borderRadius: "0 0 4px 4px",
            borderTop: "none",
        }),
        menuList: (provided) => ({
            ...provided,
            padding: 0,
        }),
        option: (provided) => ({
            ...provided,
            color: isDark() ? dark.text : light.text,
            backgroundColor: isDark() ? dark.secondBackground : light.secondBackground,
            width: "100%",
            "&:hover": {
                backgroundColor: isDark() ? dark.background : light.background,
                cursor: "pointer"
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
        singleValue: (provided) => ({
            ...provided, marginTop: height < 45 && -8, color: isDark() ? dark.text : light.text,
            backgroundColor: isDark() ? dark.secondBackground : light.secondBackground,
        }),
        input: (provided) => ({
            ...provided,
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height,
        }),
        control: (provided, state) => ({
            ...provided,
            boxShadow: "none",
            borderRadius: state.menuIsOpen ? "4px 4px 0 0" : 4,
            borderColor: isDark() ? dark.secondBackground : light.secondBackground,
            color: isDark() ? dark.text : light.text,
            backgroundColor: isDark() ? dark.secondBackground : light.secondBackground,
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
                            <IcArrowDropDown/>
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
CustomSelect.defaultProps = {searchable: false, height: 48, label: null};

CustomSelect.propTypes = {
    searchable: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    selectedOption: PropTypes.object,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    height: PropTypes.number,
    label: PropTypes.string,
};

export default CustomSelect;
