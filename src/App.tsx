import React from 'react';
import Button, {ButtonTypes, ButtonSize} from './components/Button'
import Menu from './components/Menu'
import MenuItem from './components/Menu/MenuItem'

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('in onclick.')}>default</Button>
      <Button btnType={ButtonTypes.Primary}>primary</Button>
      <Button size={ButtonSize.Large} btnType={ButtonTypes.Danger}>large danger</Button>
      <Button disabled>disabled</Button>
      <Button btnType={ButtonTypes.Link} href="https://www.baidu.com">link</Button>
      <br />
      <Menu defaultIndex={0} mode="horizontal">
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link 2
        </MenuItem>
        <MenuItem index={2}>
          cool link 3
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
