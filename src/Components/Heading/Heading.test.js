import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Heading from './Heading'

it('should render same text passed into title prop', async () => {
    render(<Heading title='hello there' /> )
    const headingElement = screen.getByText(/hello there/i)
    expect(headingElement).toBeInTheDocument()
})

// it("should be a heading", () => {
//     render(<Heading title='hello there' />)
//     const headingElement = screen.getByRole('heading', {name: "hello there"})
//     expect(headingElement).toBeInTheDocument()
// })

// it("should get by title", () => {
//     render(<Heading title='hello there' />)
//     const headingElement = screen.getByTitle('Title')
//     expect(headingElement).toBeInTheDocument()
// })

// it("should get by data test id", () => {
//     render(<Heading title='hello there' />)
//     const headingElement = screen.getByTestId('heading2')
//     expect(headingElement).toBeInTheDocument()
// })

// // find by

// it('should find by text', async () => {
//     render(<Heading title='hello there' /> )
//     const headingElement = await screen.findByText(/hello there/i)
//     expect(headingElement).toBeInTheDocument()
// })

// // Query by

// it('should query by', async () => {
//     render(<Heading title='hello there' /> )
//     const headingElement = screen.queryByText(/dogs/i)
//     expect(headingElement).not.toBeInTheDocument()
// })

// // GetAll by

// it('should get all by role', async () => {
//     render(<Heading title='hello there' /> )
//     const headingElements = screen.getAllByRole('heading')
//     expect(headingElements.length).toBe(2)
//   })




