import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './index';
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, children = props.children, style = props.style;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled) {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
export default MenuItem;
