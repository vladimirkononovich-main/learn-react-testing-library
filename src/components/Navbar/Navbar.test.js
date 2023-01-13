import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";

describe("NAVBAR TEST", () => {
    const event = userEvent.setup();

  test("test about link", async () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId("about-link");

    await event.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("test main link", async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId("main-link");

    await event.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("test users link", async () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId("users-link");
    
    await event.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
