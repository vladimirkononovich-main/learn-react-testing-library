import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  test("renders learn react link", async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2/i);
    // expect(helloWorldElem).toBeNull()
    screen.debug();
    const helloWorldElem = await screen.findByText(/data/i);

    expect(helloWorldElem).toBeInTheDocument();
  });
  test("CLICK EVENT", () => {
    render(<App />);

    const btn = screen.getByTestId("toggle-btn");
    // const toggleDiv = screen.queryByTestId("toggle-elem");
    expect(screen.queryByTestId("toggle-elem")).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeNull()

  });
});
