module.exports = {
    'Searching will return at least a single result': (browser) => {
      browser
        .url('http://search.qa.otzaf.org/')
        .pause(50)
        .setValue('.search-bar-field', 'Hello, World!')
        .pause(50)
        .keys(browser.Keys.ENTER)
        .pause(50)
        .assert.visible('.result')
    },
    'Going directly to a search query will perform the search': (browser) => {
      browser
        .url('http://search.qa.otzaf.org/#/search?query=how+to+make+a+cup+of+tea')
        .pause(50)
        .assert.valueContains('.search-bar-field', 'how to make a cup of tea')
        .assert.visible('.result')
    },
    'Searching for something in Mandarin will yield results': (browser) => {
      browser
      .url('http://search.qa.otzaf.org/')
        .pause(50)
        .setValue('.search-bar-field', '你好。 我叫菲利克斯。 你好吗？')
        .pause(50)
        .keys(browser.Keys.ENTER)
        .pause(50)
        .assert.visible('.result')
    },
    after: function (browser) {
      browser.end()
    }
  }