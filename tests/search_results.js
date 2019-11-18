module.exports = {
  'Searching shows a loading bar': (browser) => {
    browser
      .url('http://otz.netlify.com/')
      .pause(250)
      .setValue('.search-bar input', 'Hello, World!')
      .pause(250)
      .keys(browser.Keys.ENTER)
      .pause(50)
      .assert.visible('.loading-spinner')
  },
  after: function (browser) {
    browser.end()
  }
}