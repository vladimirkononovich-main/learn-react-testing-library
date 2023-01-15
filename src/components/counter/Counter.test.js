import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import Counter from "./Counter";

describe("Counter test", () => {
  const event = userEvent.setup();

  test("", async () => {
    const { getByTestId } = render(
      <Provider store={createReduxStore({
        counter: {value: 100}
      })}>
        <Counter />
      </Provider>
    );
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title").textContent).toBe("100");
    await event.click(incrementBtn);
    expect(getByTestId("value-title").textContent).toBe("101");
    screen.debug()
  });
});
