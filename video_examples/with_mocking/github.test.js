const getData = require('./github')

it('calls github.com correctly', () => {
  process.env.TOKEN = "123";

  let mockResponse = [
    {
      id: 1,
    }
  ];

  global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });
  });

  return getData().then(result => {
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/joshayoung/repos',
      {headers: {Authorization: "token 123"}}
    )
    // expect(result).toBe(1)
  });
});