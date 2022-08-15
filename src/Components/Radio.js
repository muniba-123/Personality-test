import React, { useEffect } from "react";
export default function Radio(props) {
    const {
        value,
        onChange,
        label,
    } = props;
    return (
        <label>{label}
            <input type="radio" name="radio" value={value} checked={!!value} onChange={onChange} />
            <span className="custom-radio-button"></span>
        </label>
    );
}
