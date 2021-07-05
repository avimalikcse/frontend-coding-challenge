import React from "react";
import { prettyDOM, render, screen, waitFor } from "@testing-library/react";
import thunk from "redux-thunk";
import Dashboard from "../Dashboard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  emptyState,
  mockedAPIResponse,
  filledState,
} from "../../../../utils/consts";

const middlewares = [thunk];

describe("Test Wrapper", () => {
  const intialStateEmpty = {
    absenceState: emptyState,
  };
  const intialState = {
    absenceState: filledState,
  };
  const initialStateEmpty = { membersList: [], absenceList: [] };
  let mockStore = configureStore(middlewares);
  let store: any;

  beforeEach(() => {
    mockStore = configureStore(middlewares);
  });

  describe("Dashboard Render", () => {
    it("should render table with No results message", () => {
      store = mockStore(intialStateEmpty);
      const c = render(
        <Provider store={store}>
          <Dashboard />
        </Provider>
      );
      const linkElement = screen.getByText(/Total Number of records : 0/i);
      expect(linkElement).toBeInTheDocument();
    });

    it("Should Mock APi Response", async () => {
      store = mockStore(intialState);
      render(
        <Provider store={store}>
          <Dashboard />
        </Provider>
      );
      await waitFor(() => {
        expect(screen.getByText(/Total Number of records : 1/i)).toBeTruthy();
      });
    });
  });
});
