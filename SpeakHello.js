(function (window){ 

	var helloSpeaker = {};   
    helloSpeaker.name="hello";
    var speakWord="hello";

helloSpeaker.speak=function (name){
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);
