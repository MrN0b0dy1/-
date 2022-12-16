let navelements=['home', "characters", "movies", "games", "about"];

let navpages=['index.html', "characters.html", "movies.html", "games.html", "about.html"];

let navtexts = "<ul>";


for(i=0; i<navelements.length; i++){
    navtexts += '<li> <a href="' + navpages[i] + '">'  + navelements[i] + "<a/></li>";
}
navtexts += "</ul>";

document.getElementById("nav").innerHTML = navtexts;


