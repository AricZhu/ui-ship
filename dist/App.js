import React from 'react';
import Button, { ButtonTypes, ButtonSize } from './components/Button';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { onClick: function () { return console.log('in onclick.'); } }, "default"),
        React.createElement(Button, { btnType: ButtonTypes.Primary }, "primary"),
        React.createElement(Button, { size: ButtonSize.Large, btnType: ButtonTypes.Danger }, "large danger"),
        React.createElement(Button, { disabled: true }, "disabled"),
        React.createElement(Button, { btnType: ButtonTypes.Link, href: "https://www.baidu.com" }, "link"),
        React.createElement("br", null),
        React.createElement(Menu, { defaultIndex: 0, mode: "vertical" },
            React.createElement(MenuItem, { index: 0 }, "cool link"),
            React.createElement(MenuItem, { index: 1, disabled: true }, "cool link 2"),
            React.createElement(MenuItem, { index: 2 }, "cool link 3"))));
}
export default App;
