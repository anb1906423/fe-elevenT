import React, { useEffect, useRef } from 'react';

const InputStype = {
    borderRadius: "16px",
    padding: "5px 20px",
    margin: "9px 0",
    border: '1px solid #d9d9',
    height: "40px",
    transition: "all .2s linear",
}

const Input = ({ placeholder, type, value, onChange, error, disabled, inputRef }) => {
  
    return (
        <div className='input-component'>
            <input
                className='w-100 border-info'
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={InputStype}
                ref={inputRef}
            />
            <div className='d-flex'>
                {error && <span className='text-left text-danger' style={{ fontSize: '12px' }}>{error}</span>}
            </div>
        </div>
    );
};

export default Input;