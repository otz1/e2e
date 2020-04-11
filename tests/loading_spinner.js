module.exports = {
  'Searching shows a loading bar': (browser) => {
    browser
      .url('http://search.qa.otzaf.org/')
      .pause(50)
      .setValue('.search-bar input', 'Hello, World!')
      .pause(50)
      .keys(browser.Keys.ENTER)
      .pause(50)
      .assert.visible('.loading-spinner')
  },
  after: function (browser) {
    browser.end()
  }
}