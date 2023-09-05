import { render,screen } from "@testing-library/react"
import Async from "./Async"

describe('Asynnc Component',() => {
    // test('renders posts if Api request successed',async () => {
    //     render(<Async />)
    //     // multiple li in post treat as list role , you can find role using web accessibility role such as role=button etc.
        
    //     //const listitemElement=screen.getAllByRole('listitem'); not work because it executed immediately and our post array initial is empty that's why show error
        
    //     // now return promise we should used findAllByRole
    //     const listitemElement= await screen.findAllByRole('list') // it return promise
        
    //     // our posts should not be empty
    //     expect(listitemElement).not.toHaveLength(0)

    // // but this is not good approach to handle promise api we used Mock test best approach

    // })

    test('renders posts if Api request successed',async () => {
        render(<Async />)
       // using best approach mock (dummy) function using Jest
            window.fetch = jest.fn();
            window.fetch.mockResolvedValueOnce({
                json: async () => [{id:'p1',title:'First Post'}] //we make here dummy post
            })

        const listitemElement= await screen.findAllByRole('list') // it return promise
        expect(listitemElement).not.toHaveLength(0)

            // benefits here
            // we are not sending actual api request
            //we don't want that server failed due to some reason 

            // esliye hum log dummy function banaya hai and not depends on 3rd party like axios,fetch brower api method etc
    })
})