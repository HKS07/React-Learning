import { render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import  RestaurantCard  from "../RestrauntCard"
import MOCK_DATA from '../mocks/resCardMocks';

it('Should render RestaurantCard component with props data', () => {
    render(<RestaurantCard {...MOCK_DATA}/>);

    const text = screen.getByText('Pizza Hut');;

    expect(text).toBeInTheDocument();
})