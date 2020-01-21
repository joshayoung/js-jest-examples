const getData = require('./sandbox')

it('calls github.com correctly', () => {
  let isMockedFetchCalled = false
  const mockedFetch = (url) => {
    expect(url).toBe('https://api.github.com/users/joshayoung/repos')
    isMockedFetchCalled = true
  }
  getData(mockedFetch).then(result => {
    expect(isMockedFetchCalled).toBe(true)
  })
})