import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ScrollToTop from "@/components/@common/ScrollToTop";

jest.spyOn(window, "scrollTo").mockImplementation(() => {});

describe("ScrollToTop Test", () => {
  it("should scroll to top when the route changes", () => {
    render(
      <MemoryRouter initialEntries={["/current"]} initialIndex={0}>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Simulating Route Change
    window.history.pushState({}, "Test Page", "/new");

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
