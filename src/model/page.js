(function(exports){

  function Page(guardianResponse, articleClass) {
    this.articleClass = articleClass;
    this.guardianResponse = guardianResponse;
    this.articles = [];
    this.extractData();
  };

  Page.prototype.extractData = function() {
    for (i=0; i<this.guardianResponse.response.results.length; i++){
      this.articles[i] = new this.articleClass(
                              this.guardianResponse.response.results[0].webUrl,
                              this.guardianResponse.response.results[0].webTitle,
                              this.guardianResponse.response.results[0].fields.thumbnail,
                              this.guardianResponse.response.results[0].fields.body);
    }
  };

  exports.Page = Page;
})(this);
