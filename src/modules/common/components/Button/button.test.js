import { render, screen } from "@testing-library/react"
import Button from "./Button"


describe('Button Component', () => {
    test('Button should render as a link and contain title', () => {
        render(<Button href="/" title="get started" />)
        const buttonElement = screen.getByRole("link")
        expect(buttonElement).toHaveAttribute('href', '/')        
        expect(buttonElement).toHaveTextContent('get started')
    })

    test('Button should render as a button and contain title', () => {
        render(<Button title='get started'/>)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveTextContent('get started')
    })

    test('Button should render as a button and have a type submit', () => { 
        render(<Button title='get started'/>)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toHaveAttribute('type', 'submit')
     })
});
