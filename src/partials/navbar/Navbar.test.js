const { cleanup } = require("@testing-library/react");
const navbar = require("./Navbar");

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Navbar Component", (navbar) => {
  test("Render LOL", () => {
    expect(navbar).toHaveTextContent("LOL");
  });
});
