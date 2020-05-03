import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonTypes, ButtonSize } from './index'

const defaultProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: ButtonTypes.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render default button correctly', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const elem = wrapper.getByText('Nice') as HTMLButtonElement
    expect(elem).toBeInTheDocument()
    expect(elem.tagName).toBe('BUTTON')
    expect(elem).toHaveClass('btn btn-default')
    expect(elem.disabled).toBeFalsy()
    fireEvent.click(elem)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render button correctly on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const elem = wrapper.getByText('Nice')
    expect(elem).toBeInTheDocument()
    expect(elem).toHaveClass('btn-primary btn-lg klass')
  })

  it('should render a link when btnType equals link', () => {
    const wrapper = render(<Button btnType={ButtonTypes.Link}>Link</Button>)
    const elem = wrapper.getByText('Link')
    expect(elem).toBeInTheDocument()
    expect(elem.tagName).toBe('A')
    expect(elem).toHaveClass('btn btn-link')
  })

  it ('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const elem = wrapper.getByText('Nice') as HTMLButtonElement
    expect(elem).toBeInTheDocument()
    expect(elem.disabled).toBeTruthy()
    fireEvent.click(elem)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
