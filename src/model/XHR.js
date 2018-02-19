// As a busy politician
// I can see all of today's headlines in one place
// So I know what the big stories of the day are

// I can click a link to see the original news article
// So that I can get an in depth understanding of a very important story

// I can see a summary of a news article
// So I can get a few more details about an important story

// load('http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline',//,body',
// url = "https://www.theguardian.com/lifeandstyle/2018/feb/18/botched-cosmetic-surgery-law-change-urged-as-complaints-treble";
// load("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url,
//   function(xhr) {
//
//     var obj = JSON.parse(xhr.responseText);
//     console.log(obj.sentences[0]);
//     console.log(obj.sentences[1]);
//     console.log(obj.sentences[2]);
//     console.log(obj.sentences[3]);
//     console.log(obj.sentences[4]);
//     document.getElementById('container').innerHTML = obj.sentences[0];
//
// });

function load(url, callback) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // if(xhr.readyState < 4) {return;}
            // if(xhr.status !== 200) {return;}
            if(xhr.readyState === 4 && xhr.status === 200) {callback(xhr);}
        }
        xhr.open('GET', url, true);
        xhr.send('');
    }
