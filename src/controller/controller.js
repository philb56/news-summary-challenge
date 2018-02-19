load('http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline,body',
// load('test/testArticle.json',
  function(xhr) {

    var obj = JSON.parse(xhr.responseText);
    // for (i=0; i<obj.response.results.length; i++){
    //   console.log(obj.response.results[i]);
    // }
    link = document.getElementById('link');
    link.setAttribute('href',obj.response.results[0].webUrl);
    link.innerHTML = obj.response.results[0].webTitle;

    img = document.getElementById('thumbnail');
    img.setAttribute('src',obj.response.results[0].fields.thumbnail);

    document.getElementById('container').innerHTML = obj.response.results[0].fields.body;

});
