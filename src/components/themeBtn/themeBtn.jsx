import React from 'react';
import './themeBtn.scss';

function ThemeBtn(props) {
    return (
        <button className={props.ButtonClass} onClick={props.onClick}>
            <span>{props.ButtonText}</span>
        </button>
    )
}

export default ThemeBtn
