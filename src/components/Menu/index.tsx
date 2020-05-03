import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'

type SelectCallback = (selectedIndex: number) => void

export interface IMenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
  activeIndex?: number
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<IMenuProps> = ({
  defaultIndex,
  className,
  mode,
  style,
  children,
  onSelect
}) => {
  const [ currentActive, setActive ] = useState(0)
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = ({
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  })
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
