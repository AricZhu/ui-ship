import React from 'react'
import classNames from 'classnames'

export enum ButtonTypes {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Link = 'link'
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

interface IButtonProps {
  children: React.ReactNode
  className?: string,
  btnType?: ButtonTypes
  size?: ButtonSize
  disabled?: boolean
  href?: string
}

type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  btnType,
  size,
  disabled,
  href,
  ...rest
}) => {
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled
  })
  if (btnType === 'link') {
    return <a className={classes} href={href} {...rest}>{children}</a>
  }

  return <button className={classes} disabled={disabled} {...rest}>{children}</button>
}

Button.defaultProps = {
  btnType: ButtonTypes.Default,
  disabled: false
}

export default Button
