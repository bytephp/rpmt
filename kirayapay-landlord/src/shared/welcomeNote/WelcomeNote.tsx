import React from "react";
import "./style.css";

interface Props {
    className: any;
    divClassName: any;
    divClassNameOverride: any;
}

export const WelcomeNote = ({ className, divClassName, divClassNameOverride }: Props): JSX.Element => {
    return (
        <div className={`welcome-note ${className}`}>
            <div className="span">
                <div className={`text-wrapper ${divClassName}`}>Hello Abhimanyu,</div>
            </div>
            <div className="div-wrapper">
                <div className={`div ${divClassNameOverride}`}>Welcome to your dashboard.</div>
            </div>
        </div>
    );
};
