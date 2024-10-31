import { act, fireEvent, render, screen } from "@testing-library/react";
import Restaurant from "../Restaurant";
import Header from "../Header";
import Cart from '../Cart';
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

import MOCK_DATA from "../mocks/resMenuData.json";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Cart/>
          <Header />
          <Restaurant />
        </Provider>
      </BrowserRouter>
    )
  );
  console.log((await screen.getAllByRole('button')).length);
  expect(screen.getByText('Cart - (0 items)')).toBeInTheDocument();

  const addButtons = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addButtons[0]);
  

  expect(screen.getByText('Cart - (1 items)')).toBeInTheDocument();
  console.log(screen.getAllByRole('button').length);
  
  
  fireEvent.click(screen.getByRole('button',{name: 'Clear Cart'}));
  console.log((await screen.getAllByRole('button')).length);
});
