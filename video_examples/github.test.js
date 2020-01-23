const getData = require('./github')

it('calls github.com correctly', () => {
  const fakeProcess = { env: { TOKEN: 123 } }
  const mockedFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve([
        {id: 123}
      ])
    })
  )
  return getData(mockedFetch, fakeProcess).then(result => {
    expect(mockedFetch).toBeCalledWith(
      'https://api.github.com/users/joshayoung/repos',
      {headers: {Authorization: "token 123"}}
    )
    expect(result).toBe(123)
  })
})