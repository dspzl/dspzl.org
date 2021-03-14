var seniors = [{ name: "Nicholas Paul Barr", hometown: "Fishers, IN", major: "Mechanical Engineering", username: "barrnp" },
{ name: "Philip James Bissmeyer", hometown: "Cincinatti, OH", major: "Mechanical Engineering", username: "bissmepj" },
{ name: "Praneet Chakraborty", hometown: "Aurora, IL", major: "Computer Science", username: "chakrap" },
{ name: "Jackson Lee Cook", hometown: "Noblesville, IN", major: "Electrical Engineering", username: "cookjl" },
{ name: "Jason Franklin Danford", hometown: "San Pierre, IN", major: "Mechanical Engineering", username: "danforjf" },
{ name: "Zachariah Benjamin Eme", hometown: "Livermore, CA", major: "Mechanical Engineering", username: "emezb" },
{ name: "Samuel Colter Flickinger", hometown: "Decatur, IL", major: "Computer Science/Computer Engineering", username: "flickisc" },
{ name: "Cole Alexander Hanson", hometown: "Kokomo, IN", major: "Mechanical Engineering", username: "hansonca" },
{ name: "Michael Richard Holtz", hometown: "Elkhart, IN", major: "Optical Engineering", username: "holtzmr" },
//{ name: "Nathaniel Chapman Huey", hometown: "Cocktown, PA", major: "Mechanical Engineering", username: "hueync" },
{ name: "Hans William Knoepfel", hometown: "Paris, IL", major: "Civil Engineering", username: "knoepfhw" },
{ name: "Alain Olivier Kouassi", hometown: "West Orange, NJ", major: "Computer Science", username: "kouassao" },
{ name: "Mitchell Owen Lugsch", hometown: "Golden, CO", major: "Mechanical Engineering", username: "lugschmo" },
{ name: "Thomas Reid Meehan", hometown: "", major: "Mechanical Engineering", username: "meehantr" },
{ name: "Carson James Meyer", hometown: "St. Louis, MO", major: "Computer Engineering", username: "meyerc1" },
//{ name: "Bryce Allen Nesius", hometown: "Rensselaer, IN", major: "Computer Engineering", username: "nesiusba" },
{ name: "Jake Brandt Powell", hometown: "Robinson, IL", major: "Mechanical Engineering", username: "powelljb" },
//{ name: "Gavin Dane Rue", hometown: "Fishers, IN", major: "Chemical Engineering", username: "ruegd" },
{ name: "Geoffrey Barton Tomlinson", hometown: "Houston, TX", major: "Computer Engineering", username: "tomlingb" },
{ name: "Joshua Daniel Warning", hometown: "Noblesville, IN", major: "Software Engineering", username: "warninjd" },
{ name: "Zehming Zhang", hometown: "Xi'an China", major: "Mechanical Engineering", username: "zhangz12" },
];

var juniors = [
    { name: "Evan Thomas Baker", hometown: "Springville, IN", major: "Mechanical Engineering", username: "bakeret"},
    { name: "Jared William Joseph Brown", hometown: "Skokie, IL", major: "Mechanical Engineering", username: "brownjw" },
    { name: "Calen Michael Cook", hometown: "Brazil, IN", major: "Chemical Engineering", username: "cookc4" },
    { name: "Lucas Alberto D'Alesio", hometown: "Park Ridge, IL", major: "Computer Engineering", username: "dalesil" },
    { name: "Songwei Fan", hometown: "Shenzhen, China", major: "Mechanical Engineering", username: "fans" },
    //{ name: "Thriambak Rishi Giripra", hometown: "Bloomington, IL", major: "Biomedical Engineering", username: "giriprtr" },
    { name: "Bryce Benjamin Hatfield", hometown: "Saint John, IN", major: "Chemical Engineering", username: "hatfiebb" },
    { name: "Nasser Nadim Hegar", hometown: "Noblesville, IN", major: "Computer Engineering", username: "hegarnn" },
    { name: "Brian Michael Huyge", hometown: "Marshall, MI", major: "Chemical Engineering", username: "huygebm" },
    { name: "Michael James Johnson", hometown: "Gothenburg, Sweden", major: "Mechanical Engineering", username: "johnsom4" },
    //{ name: "Tazwell Alexander Long", hometown: "Columbus, IN", major: "Mechanical Engineering", username: "longta" },
    { name: "Colton Tyler McKay", hometown: "Rising Sun, IN", major: "Mechanical Engineering", username: "mckayct" },
    { name: "Aidan Cory Moss", hometown: "Broomfield, CO", major: "Computer Engineering", username: "mossac" },
    { name: "Haiden Michael Smith", hometown: "Manhattan, IL", major: "Electrical Engineering", username: "smithhm" },
    //{ name: "Bryce Cameron Snaguski", hometown: "Rolling Hills Estates, CA", major: "Mechanical Engineering", username: "snagusbc" },
    { name: "Jacob Dietrich Tebbe", hometown: "Lebanon, OH", major: "Electrical Engineering", username: "tebbejd" },
    { name: "Tyler Joe Thenell", hometown: "West Milford, NJ", major: "Computer Engineering", username: "theneltj" },
    { name: "Shengjun Guan", hometown: "Wenzhou, China", major: "Computer Science", username: "guans"}
];



var sophomores = [
    {name: "Vance Joseph Allen", hometown: "San Diego, CA", major: "Mechanical Engineering", username: "allenvj"},
    {name: "William Bartlett Bowman", hometown: "Germantown, OH", major: "Mathematics", username: "bowmanwb"},
    {name: "John 'Yoon Su' Chung", hometown: "Santa Clara, CA", major: "Engineering Design", username: "chungy"},
    {name: "Brendon Michael Crabtree", hometown: "Indianapolis, IN", major: "Mechanical Engineering", username: "crabtrbm"},
    {name: "Ethan Benjamin Drong", hometown: "Lockport, IL", major: "Mechanical Engineering", username: "drongeb"},
    {name: "Jameson Minovich Jochheim", hometown: "Round Lake, IL", major: "Mechanical Engineering", username: "jochhejm"},
    {name: "Samuel Edward Johnson", hometown: "Oldenburg, IN", major: "Mechanical Engineering", username:"johnsose"},
    {name: "Joshua Steven Mitterling", hometown: "Noblesville, IN", major: "Computer Engineering", username: "mitterj"},
    {name: "Aidan Ronaldo Morris", hometown: "Franklin, IN", major: "Chemical Engineering", username: "morrisad"},
    {name: "David Jason Purdy", hometown: "Franklin, IN", major: "Computer Engineering", username: "purdydj"},
    {name: "Carl Frederick Quist", hometown: "Marshall, MI", major: "Mechanical Engineering", username: "quistcf"},
    {name: "Jack Freidmont Raker", hometown: "Palatine, IL", major: "Chemical Engineering", username: "rakerjp"},
    {name: "Mason Darrell Reid", hometown: "Glasgow, KY", major: "Biomedical Engineering", username: "reidmd"},
    {name: "Luke Abraham Wendel", hometown: "Noblesville, IN", major: "Computer Engineering", username:"wendella"},
    {name: "Ethan Donald Whetter", hometown: "Santa Barbara, CA", major: "Biomedical Engineering", username: "whetteed"}
];

function getBrotherCard(brother){
  var email = brother.username+'@rose-hulman.edu';
  var html = '<div class="col l6">';
  html += '<div class="card-panel z-depth-1">';
  html += '<div class="row valign-wrapper no-margin">';
  html += '<div class="col s3">';
  html += '<img id="' + brother.username + '" src="img/portraits/'+brother.username+'.jpg" alt="" class="circle responsive-img valign">';
  html += '</div>';
  html += '<div class="col s9">';
  html += '<h5 class="no-top-margin"><strong>'+brother.name+'</strong></h5>';
  html += '<h6 class="no-margin">'+brother.hometown+'</h6>';
  html += '<h6>'+brother.major+'</h6>';
  html += '<a href="mailto:'+email+'" class="no-margin green-text text-darken-3">'+email+'</a>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
}


//add seniors
for(var i=0; i<seniors.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getBrotherCard(seniors[i]);
  if( (i+1) < seniors.length){
    html += getBrotherCard(seniors[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#seniors-container").append(html);
}
//add juniors
for(var i=0; i<juniors.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getBrotherCard(juniors[i]);
  if( (i+1) < juniors.length){
    html += getBrotherCard(juniors[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#juniors-container").append(html);
}


$("#chakrap").click(() => { window.location.href='https://www.pi-kappa-alpha.net/' })
$("#chakrap").css('cursor', 'pointer')
//add sophomores
for(var i=0; i<sophomores.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getBrotherCard(sophomores[i]);
  if( (i+1) < sophomores.length){
    html += getBrotherCard(sophomores[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#sophomores-container").append(html);
}

//add freshmen
for(var i=0; i<freshmen.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getBrotherCard(freshmen[i]);
  if( (i+1) < freshmen.length){
    html += getBrotherCard(freshmen[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#freshmen-container").append(html);
}

