import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

//Describe Blocks. A describe block is used for organizing test cases in logical groups of tests. 
//For example, we want to group all the tests for a specific class.
// grouped multiple test case with specific component
describe('Greeting Component',() => {
    test('renders Welcome to React Testing course as text',() => {
        // Arrange
         render(<Greeting />)
        // Act
     
        // Assert
         const element =screen.getByText('Welcome to React Testing course',{exact:true});
         expect(element).toBeInTheDocument()
    })
     
     test('renders component as text',() => {
         // Arrange
          render(<Greeting />)
         // Act
      
          // Assert
          const element1 =screen.getByText('component',{exact:false}); // find only for component text ,and  b'coz ignore ! (such as component!)
          expect(element1).toBeInTheDocument()
     })

     test('renders "testing" if the button was not clicked',() => {
        render(<Greeting/>)
       const element= screen.getByText('testing123',{exact:false});
       expect(element).toBeInTheDocument()
     })

     test('renders "text changed now" when button was clicked',() => {
        
        // arrange
        render(<Greeting/>)
        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        // Assert
        const element= screen.getByText('text changed now');
       expect(element).toBeInTheDocument()
     })

     test('Does not render "it is good to see you" when button was clicked',() => {
        
        // arrange
        render(<Greeting/>)
        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        // Assert
        // return null jab y txt show nhi kerna chyat ho
        const element= screen.queryByText('it is good to see you',{exact:false});
       expect(element).toBeNull()
     })
})





// y theno "A" follow hogy when you test component

//The writing Test - The Three "A"s

//1.) Arrange: Set up the test Data,test conditions,test environment

//2.) Act : Run logic that should be tested (e.g. execute function)

//3.) Assert: Compare execution result with expected result

//Note point:

//screen.get method : find element if exits in dom, otherwise throw error
//screen.query method : find element if exits in dom, otherwise throw error

//screen.find method: return promise