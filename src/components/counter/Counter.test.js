import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { renderTestApp } from "../../tests/helpers/renderTestApp";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import Counter from "./Counter";

describe("Counter test", () => {
  const event = userEvent.setup();

  test("", async () => {
    const { getByTestId } = renderTestApp(null, {
      route: "/",
      initialState: { counter: { value: 100 } },
    });

    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title").textContent).toBe("100");
    await event.click(incrementBtn);
    expect(getByTestId("value-title").textContent).toBe("101");
    screen.debug();
  });
});
