import React from 'react';
export declare enum ButtonTypes {
    Default = "default",
    Primary = "primary",
    Success = "success",
    Danger = "danger",
    Link = "link"
}
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
interface IButtonProps {
    children: React.ReactNode;
    className?: string;
    btnType?: ButtonTypes;
    size?: ButtonSize;
    disabled?: boolean;
    href?: string;
}
declare type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
