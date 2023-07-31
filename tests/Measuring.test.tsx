/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import IconBox from "../src/components/InfoBoxItem/IconBox";
import "@testing-library/jest-dom/extend-expect";
import { getMeasuring } from "../src/utils/getMeasuring";

describe("<IconBox />", () => {
    test("should display correct measuring units", () => {
        // Test data
        const data = 25;
        const status = "pressure"; // possible values: temp, wind, pressure, humidity
        const sampleClasses = "sample-classes";
        const { getByText } = render(
            <IconBox
                data={data}
                icon="test-icon"
                status={status}
                iconClasses={sampleClasses}
                textClasses={sampleClasses}
            />
        );

        const measuringUnit = getMeasuring(status);
        expect(getByText(measuringUnit)).toBeInTheDocument();
    });
});
