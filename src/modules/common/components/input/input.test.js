import { render, screen } from "@testing-library/react"
import Input from '.'

describe('Input Component', () => {
    test('should disable input', () => {
        render(<Input type='text' isDisabled/>)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeDisabled()
    });

    test('should have a placeholder', () => { 
        render(<Input placeholder="amount" type='text' isDisabled/>)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toHaveAttribute('placeholder')
     })
    
});
