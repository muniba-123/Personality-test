import React from 'react';

const Button = (props) => {
    const { onClick, title, disabled, className } = props;
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {title}
        </button>
    );
};

export default Button;