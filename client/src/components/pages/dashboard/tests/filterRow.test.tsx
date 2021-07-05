import React from "react";
import { prettyDOM, render, screen, waitFor } from "@testing-library/react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  emptyState,
  mockedAPIResponse,
  filledState,
} from "../../../../utils/consts";
import TableFilter from "../filterRow";

const middlewares = [thunk];

describe("Test Wrapper", () => {
  const intialStateEmpty = {
    absenceState: emptyState,
  };
  const intialState = {
    absenceState: filledState,
  };
  let mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    mockStore = configureStore(middlewares);
  });

  describe("Dashboard Render", () => {
    it("should render table with No results message", () => {
      store = mockStore(intialState);
      const c = render(
        <Provider store={store}>
          <TableFilter></TableFilter>
        </Provider>
      );
      const linkElement = screen.getByText(/Filter by Type/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
