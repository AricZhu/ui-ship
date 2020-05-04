var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
export var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes["Default"] = "default";
    ButtonTypes["Primary"] = "primary";
    ButtonTypes["Success"] = "success";
    ButtonTypes["Danger"] = "danger";
    ButtonTypes["Link"] = "link";
})(ButtonTypes || (ButtonTypes = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
var Button = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, btnType = _a.btnType, size = _a.size, disabled = _a.disabled, href = _a.href, rest = __rest(_a, ["children", "className", "btnType", "size", "disabled", "href"]);
    var classes = classNames('btn', className, (_b = {},
        _b["btn-" + btnType] = btnType,
        _b["btn-" + size] = size,
        _b['disabled'] = disabled,
        _b));
    if (btnType === 'link') {
        return React.createElement("a", __assign({ className: classes, href: href }, rest), children);
    }
    return React.createElement("button", __assign({ className: classes, disabled: disabled }, rest), children);
};
Button.defaultProps = {
    btnType: ButtonTypes.Default,
    disabled: false
};
export default Button;
