import {render, screen} from '@testing-library/react'
import TodosCounter from './TodoCounter'
import {BrowserRouter} from 'react-router-dom'

const MockTodoFooter = ({incompleteTodos}) => {
    return (
        <BrowserRouter>
            <TodosCounter incompleteTodos={incompleteTodos} />
        </BrowserRouter>
    )
}   

it('should render the correct number of incomplete todos', async () => {
    render(
        <MockTodoFooter incompleteTodos={5} />
    )
    const paragraphElement = screen.getByText(/5 todos left/i)
    expect(paragraphElement).toBeInTheDocument()
})