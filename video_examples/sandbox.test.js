const getData = require('./sandbox')

it('calls github.com correctly', () => {
  let isMockedFetchCalled = false
  const fakeProcess = {
    env: {
      TOKEN: 123
    }
  }
  const mockedFetch = (url, options) => {
    expect(url).toBe('https://api.github.com/users/joshayoung/repos')
    expect(options.headers.Authorization).toBe('token ' + fakeProcess.env.TOKEN)
    isMockedFetchCalled = true
    return Promise.resolve({
      json: () => Promise.resolve({
        rates: {
          standard: {
            value: 19
          }
        }

      })
    })
  }
  getData(mockedFetch, fakeProcess).then(result => {
    expect(isMockedFetchCalled).toBe(true)
  })
})