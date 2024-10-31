import Body from "../Body";
import { act } from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MOCK_DATA from "../mocks/resFullListData";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
}); 

it("Should render the Body component with the search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));

    const cardsBeforeSearch= screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(20);
    const serachBtn = screen.getByRole('button',{name:'Search'});

    const searchInput = screen.getByTestId('searchInput');

      
    fireEvent.change(searchInput, {target: {value: "pizza"}});
    fireEvent.click(serachBtn);

    const resCards = screen.getAllByTestId('resCard');
    //screen should load 
    expect(resCards.length).toBe(4);
});
