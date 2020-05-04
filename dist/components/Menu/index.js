import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: 0 });
var Menu = function (_a) {
    var defaultIndex = _a.defaultIndex, className = _a.className, mode = _a.mode, style = _a.style, children = _a.children, onSelect = _a.onSelect;
    var _b = useState(0), currentActive = _b[0], setActive = _b[1];
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = ({
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    });
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    });
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, children)));
};
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
};
export default Menu;
