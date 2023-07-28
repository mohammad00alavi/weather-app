/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import CityInput from "../src/components/CityInput/CityInput";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router");

describe("<CityInput />", () => {
    test("checking if search works fine", async () => {
        const onSubmitMock = jest.fn();
        render(<CityInput onTestSubmit={onSubmitMock} />);
        const city = "oslo";
        await userEvent.type(screen.getByLabelText(/search/i), city);
        await userEvent.click(screen.getByRole("button", { name: /search/i }));
        expect(onSubmitMock).toHaveBeenCalledWith({
            city,
        });
    });
});
