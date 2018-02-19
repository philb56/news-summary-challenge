guardianApi = new GuardianApi('test/testArticle.json')
it('GuardianApi returns data', function() {
  setTimeout(function(){
    assert.equals(guardianApi.guardianResponse().response.results[0].sectionId, "football");
    assert.equals(guardianApi.guardianResponse().response.results.length, 1);
    assert.equals(guardianApi.url, 'test/testArticle.json');
  }, 3000);
});
