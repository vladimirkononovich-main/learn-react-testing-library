import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

export const renderWithRouter = (component, initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
