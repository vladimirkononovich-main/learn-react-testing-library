import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Users from "./Users";

jest.mock("axios");

const data = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
  {
    id: 3,
    name: "Clementine Bauch",
  },
];

describe("USERS TEST", () => {
  let response;
  beforeEach(() => {
    response = {
      data,
    };
  });

  test("renders users", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
