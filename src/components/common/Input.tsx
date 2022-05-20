import React from 'react';
import "../registration/styles.css"
import classNames from 'classnames';

interface InputProps {
    info: string
    isBig: boolean
    title: string
    placeholder: string
    onChange: (event: any) => void
    textErrors?: string[]
}

const Input = ({isBig, title, placeholder, info, onChange, textErrors}: InputProps) => {
    return (
        <div>
            <p>{title}</p>
            <label>
                <input className={classNames("input", isBig ? "big" : "small",
                    textErrors?.length && textErrors.length > 0 ? "error" : null)}
                       placeholder={placeholder} onChange={onChange}/>
                {textErrors?.length && textErrors.length > 0 ? textErrors.map(textError => {
                    return <p style={{color: "#E64646", fontSize: "14px"}}>{textError}</p>
                }) : <p>{info}</p>}
            </label>
        </div>
    );
};

export default Input;