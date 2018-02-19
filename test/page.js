guardianResponse = new GuardianApi('test/testArticle.json')
thumbnail_url = "https://media.guim.co.uk/b423df896342a41075bf7229328d4c3781738455/0_158_2928_1757/500.jpg"

setTimeout(function(){
  page = new Page(guardianResponse.guardianResponse(),Article);
  it('Page contains GuardianApi on instantiation', function() {
    assert.equals(page.guardianResponse.response.results[0].sectionId, "football");
  });

  it('Page contains Article class on instantiation', function() {
    page = new Page(guardianResponse.guardianResponse(),Article);
    assert.equals(page.articles[0].thumbnail, thumbnail_url);
  });

  it('Page contains two articles on instantiation', function() {
    guardianResponse.guardianResponse().response.results[1] =
         guardianResponse.guardianResponse().response.results[0];
    page = new Page(guardianResponse.guardianResponse(),Article);
    assert.equals(page.articles.length, 2);
    assert.equals(page.articles[0].thumbnail, thumbnail_url);
    assert.equals(page.articles[1].thumbnail, thumbnail_url);
  });

}, 3000);
