import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  screen,
  cleanup,
  getByDisplayValue,
  getByAltText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FetchJewellery from "../components/FetchJewellery";

import { MemoryRouter } from "react-router";

let expectedProps;

beforeEach(() => {
  expectedProps = {
    description: "",
    id: 1,
    image: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
    name: "Banana",
    price: 10,
    stock: 100,
    type: "Food",
  };
});

afterEach(() => {
  cleanup();
});

it("renders jewellery page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FetchJewellery />, div);
});

test("should render name and price of product card", () => {
  const { getByText } = render(
    <FetchJewellery mock={true} product={expectedProps} />
  );
  const name = getByText(expectedProps.name);
  // the component adds a euro sign to the price value and makes it a string, so it's not exactly the value.
  const price = getByText(String(expectedProps.price), {
    exact: false,
  });

  expect(name).toBeVisible();
  expect(price).toBeVisible();
});

it("renders error component", async () => {
  render(<FetchJewellery throwError={true} />);
  // Should find "Test Error" because in the Error component that should get rendered. The message will be "Test Error", if throwError is set to true
  const ErrorComponentText = await screen.findByText("Test Error", {
    exact: false,
  });
  expect(ErrorComponentText).toBeInTheDocument();
});
