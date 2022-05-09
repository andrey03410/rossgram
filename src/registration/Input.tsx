import React from 'react';
import "./styles.css"
import classNames from 'classnames';

export enum ErrorType{
    NONE,
    TYPO,
    NICKNAME
}

interface InputProps{
    info : string
    isBig : boolean
    errorType : ErrorType
    val : string
    title : string
    placeholder : string
    onChange : (event: any) => void
}

const Input = ({isBig, errorType, title, val, placeholder, info, onChange} : InputProps) => {
    function textError(type : ErrorType){
        switch (type){
            case ErrorType.NONE:
                return info
            case ErrorType.TYPO:
                return "Неверно введены данные"
            case ErrorType.NICKNAME:
                return "Никнейм занят"
        }
    }
    return (
        <div>
            <p>{title}</p>
            <label>
                <input className={classNames("input", isBig ? "big" : "small",
                    errorType > ErrorType.NONE ? "error" : null)}
                placeholder={placeholder} onChange={onChange}/>
                {<p style={errorType > ErrorType.NONE ? {color: "#E64646", fontSize: "14px"} : undefined}>{textError(errorType)}</p>}
            </label>
        </div>
    );
};

export default Input;