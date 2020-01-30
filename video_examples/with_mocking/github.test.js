const getData = require("./github");
const fetch = require("node-fetch");
jest.mock("node-fetch", () => jest.fn());

it("calls github.com correctly", () => {
  beforeAll(() => {});
  process.env.TOKEN = "123";

  let mockResponse = [
    {
      id: 2
    }
  ];
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  );

  return getData().then(result => {
    expect(fetch).toHaveBeenCalledWith(
      "https://api.github.com/users/joshayoung/repos",
      {
        headers: { Authorization: "token 123" }
      }
    );
    expect(result).toBe(2);
  });
});
