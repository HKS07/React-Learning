import {render,screen} from '@testing-library/react';
import ContactUs from '../ContactUs';
import '@testing-library/jest-dom';

describe("Contact us page test case", () => {

    // beforeAll(()=>{
    //     console.log('befpre all');
    // });

    // beforeEach(() =>{
    //     console.log('before each');
    // });

    test("should load contact us component", () => {
        render(<ContactUs/>);
    
        const heading = screen.getByRole('heading');
    
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside contact us component", () => {
        render(<ContactUs/>);
    
        const button = screen.getByText('Submit');
        // const button = screen.getByRole('button');
    
        expect(button).toBeInTheDocument();
    })
    
    test("should load input inside contact us component", () => {
        render(<ContactUs/>);
    
        const inputName = screen.getByPlaceholderText('name');
        // const button = screen.getByRole('button');
    
        expect(inputName).toBeInTheDocument();
    })
    
    test("should load 2 input boxes on the contact us component", ()=> {
        render(<ContactUs/>);
        const inputBoxes = screen.getAllByRole('textbox');
        
        expect(inputBoxes[0]).toBeInTheDocument();
        expect(inputBoxes[1]).toBeInTheDocument();
    
    })
})
