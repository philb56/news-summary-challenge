var article = new Article('webUrl', 'webTitle', 'thumbnail', 'summary');

it('Article instantiates a new article', function() {
  assert.equals(article.webUrl, 'webUrl');
  assert.equals(article.webTitle, 'webTitle');
  assert.equals(article.thumbnail,'thumbnail');
  assert.equals(article.summary, 'summary');
});
