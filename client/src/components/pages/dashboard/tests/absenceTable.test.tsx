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
import AbsenceTable from "../absenceTable";

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
      render(
        <Provider store={store}>
          <AbsenceTable allAbsences={[]} />
        </Provider>
      );
      const linkElement = screen.getByText(
        /No Record Found!! Please change filter Criteria/i
      );
      expect(linkElement).toBeInTheDocument();
    });

    it("Should Mock APi Response", async () => {
      store = mockStore(intialState);
      render(
        <Provider store={store}>
          <AbsenceTable allAbsences={filledState.allAbsences} />
        </Provider>
      );
      await waitFor(() => {
        expect(screen.getByText(/test member Note/i)).toBeTruthy();
      });
    });
  });
});
