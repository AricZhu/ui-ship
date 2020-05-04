import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type SelectCallback = (selectedIndex: number) => void;
export interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    activeIndex?: number;
}
interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<IMenuProps>;
export default Menu;
