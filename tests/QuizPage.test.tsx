import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers for better assertions
import { describe, it, expect } from "vitest"; // Import Vitest functions
import QuizPage from "../src/Pages/QuizPage/QuizPage";
import { MemoryRouter } from "react-router-dom";

describe("QuizPage", () => {
  it("displays loading message while fetching questions", () => {
    render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Loading questions.../i)).toBeInTheDocument();
  });
});