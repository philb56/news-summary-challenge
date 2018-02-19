(function(exports){

  const ABBREVIATION_LENGTH = 20;

  function Article(webUrl, webTitle, thumbnail, summary) {
    this.webUrl = webUrl;
    this.webTitle = webTitle;
    this.thumbnail = thumbnail;
    this.summary = summary;
  };

  // Note.createNote = function(text){
  //   var note = new Note(text)
  //   return note
  // }

  exports.Article = Article;
})(this);
