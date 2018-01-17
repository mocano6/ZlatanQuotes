function zlatanQuotes(about, quote){
    this.about = about;
    this.quote = quote;
}
var zlatan_1 = new zlatanQuotes(
    "On the – apparently humiliating – prospect of a trial with Arsenal in 2000.",
    
    "I was like, No way, Zlatan doesn't do auditions. I thought You either know me or you don't and if you don't know me you can't really want me."
);

var zlatan_2 = new zlatanQuotes(
    "Before that tie, a reporter had asked Ibrahimovic what the outcome would be. Based on this, you’d have expected him to craft a more palatable ending.",
    
    "Only God knows... You’re talking to him now"
);
var zlatan_3 = new zlatanQuotes(
    "Further evidence of the above.",
    
    "Guardiola was staring at me and I lost it. I thought 'there is my enemy, scratching his bald head!'. I yelled to him: 'You have no balls!' and probably worse things than that."
);
var zlatan_4 = new zlatanQuotes(
    "After being struck down with a calf problem during his time at Barcelona.",
    
    "An injured Zlatan is a properly serious thing for any team."
);
var zlatan_5 = new zlatanQuotes(
    "His modest take on departing the French capital",
    
    "I came like a hero, left like a legend."
);


    function print(q) {
        var placeHolder = document.getElementById("about");
        placeHolder.innerHTML = '<span>About: </span><p>'+q.about +'</p><br>';
        var placeHolder2 = document.getElementById("quote");
        placeHolder2.innerHTML = '<span>Quotes: </span><p>' + q.quote + '</p>';
}


var button1 = document.getElementById("1");
button1.onclick = function() {
  print(zlatan_1);
};
var button2 = document.getElementById("2");
button2.onclick = function() {
  print(zlatan_2);
};
var button3 = document.getElementById("3");
button3.onclick = function() {
  print(zlatan_3);
};
var button4 = document.getElementById("4");
button4.onclick = function() {
  print(zlatan_4);
};
var button5 = document.getElementById("5");
button5.onclick = function() {
  print(zlatan_5);
};