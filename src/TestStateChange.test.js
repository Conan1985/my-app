import {render, screen} from "@testing-library/react";
import TestStateChange from "./components/TestStateChange";

test("Testing page load", () => {
    render(<TestStateChange />)
    const element = screen.getByText(/page loaded/i)
    expect(element).toBeInTheDocument()
})