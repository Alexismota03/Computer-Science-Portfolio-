var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");



item1.addEventListener("click", function(){
    info1.innerHTML = "<li>Soccer balls are slightly oval-shaped. But the checkered board pattern creates an illusion of a perfect sphere</li><li>The original World Cup was made of papier-mache, but it had to be replaced after the heavy rains of the 1950 World Cup</li><li>Many 3rd World villages cannot afford a soccer ball, so they play soccer with balls made from rags or disposable diapers </li>";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "<li>It takes about 600 cows to make one full season's worth of NFL footballs </li><li>Though football games usually last around 3 hours, the ball is typically in play for only 11 minutes </li><li>The Baltimore Ravens are named after Edgar Allan Poe’s “The Raven.”  The team mascots are named Edgar, Allan, and Poe  </li>";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "<li>In 1839, a man named Abner Doubleday created the game of baseball in his own back yard. He lived in New York</li><li>Babe Ruth, one of baseball's most famous players, used to keep a wet cabbage leaf beneath his cap in order to keep cool. He would change it every 2 innings</li><li>The shortest major league player was Eddie Gaedel—he was 3 feet, 7 inches tall</li>";
});

item4.addEventListener("click", function(){
    info1.innerHTML = "<li>Most volleyball players jump about 300 times a match</li><li>Volleyball was called mintonette at first but it was later changed to volleyball</li><li>The longest recorded volleyball game was in Kingston, North Carolina. It took 75 hours and 30 minutes.</li>";
});