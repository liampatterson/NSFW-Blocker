var requirejs = require('requirejs');
var Clarifai = require('clarifai');

requirejs.config({
    nodeRequire : require
});

requirejs(['clarifai'],
    function(Clarifai){

    });

var app = new Clarifai.App(
    "t8KMr5CfjkYWbX_7Kpa0w9G8wvhxu0JyV0wgzRXE",
    "Ob-m3Rt-ttrIfXMqwXBdu09QOjBsbm5ufbLEOFuP"
);
// var list = document.getElementsByTagName("img");

var catPicture = "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg";

// for(i = 0; i < list.length; i++){
    app.models.predict(Clarifai.NSFW_MODEL, catPicture).then(
        function(response) {
            var res = response.data.outputs[0].data.concepts[0];

            if(res.name == 'sfw' && res.value > .8){
                console.log(res.name);
                console.log(res.value);
                console.log("Safe for work.");
            } else {
                list[i].src = catPicture;
                console.log("NSFW content not displayed.");
            }
        },
        function(err) {
            console.error(err);
        }
    );
// }