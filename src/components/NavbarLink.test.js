import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavbarLink from "./NavbarLink";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders navbar link correctly with props", () => {
  act(() => {
    render(<NavbarLink />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<NavbarLink linkName="LinkText" />, container);
  });
  expect(container.textContent).toBe("LinkText");
});
