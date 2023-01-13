import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import UsersDetailsPage from "../pages/UsersDetailsPage";

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
  afterEach(() => {
    jest.clearAllMocks();
  });
  // test("renders users", async () => {
  //   axios.get.mockReturnValue(response);
  //   render(<Users />);
  //   const users = await screen.findAllByTestId("user-item");
  //   expect(users.length).toBe(3);
  //   expect(axios.get).toBeCalledTimes(1);
  //   screen.debug();
  // });

  test("test redirect to details", async () => {
    axios.get.mockReturnValue(response);
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    await user.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
