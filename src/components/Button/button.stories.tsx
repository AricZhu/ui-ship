import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button, {ButtonSize, ButtonTypes} from './index'

const defaultButton = () => (
  <Button onClick={action('click')}>default button</Button>
)

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}>large button</Button>
    <Button size={ButtonSize.Small}>small button</Button>
  </>
)

const buttonWithTypes = () => (
  <>
    <Button btnType={ButtonTypes.Primary}>primary button</Button>
    <Button btnType={ButtonTypes.Success}>success button</Button>
    <Button btnType={ButtonTypes.Danger}>danger button</Button>
    <Button btnType={ButtonTypes.Link}>link button</Button>
  </>
)

storiesOf('Button Component', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add('默认 Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithTypes)
