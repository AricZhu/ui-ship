import React from 'react';
import Button, {ButtonTypes, ButtonSize} from './components/Button'

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('in onclick.')}>default</Button>
      <Button btnType={ButtonTypes.Primary}>primary</Button>
      <Button size={ButtonSize.Large} btnType={ButtonTypes.Danger}>large danger</Button>
      <Button disabled>disabled</Button>
      <Button btnType={ButtonTypes.Link} href="https://www.baidu.com">link</Button>
    </div>
  );
}

export default App;
