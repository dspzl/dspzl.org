/* Update the brothers list here */

var seniors = [
  //{ name: "Nasser Nadim Hegar", hometown: "Noblesville, IN", major: "Computer Engineering", username: "hegarnn" },
  { name: "Brian Michael Huyge", hometown: "Marshall, MI", major: "Chemical Engineering", username: "huygebm" },
  { name: "Michael James Johnson", hometown: "Gothenburg, Sweden", major: "Mechanical Engineering", username: "johnsom4" },
  { name: "Vance Joseph Allen", hometown: "San Diego, CA", major: "Mechanical Engineering", username: "allenvj", link:"https://www.rosepikes.com/" },
  { name: "William Bartlett Bowman", hometown: "Germantown, OH", major: "Mathematics", username: "bowmanwb" },
  { name: "Sang Heon Choi", hometown: "Sungnam, South Korea", major: "Computer Science", username: "chois3" },
  { name: "John 'Yoon Su' Chung", hometown: "Santa Clara, CA", major: "Engineering Design", username: "chungy" },
  { name: "Brendon Michael Crabtree", hometown: "Indianapolis, IN", major: "Mechanical Engineering", username: "crabtrbm" },
  { name: "Ethan Benjamin Drong", hometown: "Lockport, IL", major: "Mechanical Engineering", username: "drongeb" },
  { name: "Jameson Michael Jochheim", hometown: "Round Lake, IL", major: "Mechanical Engineering", username: "jochhejm" },
  { name: "Samuel Edward Johnson", hometown: "Oldenburg, IN", major: "Mechanical Engineering", username: "johnsose" },
  { name: "Joshua Steven Mitterling", hometown: "Noblesville, IN", major: "Computer Engineering", username: "mitterj" },
  { name: "Aidan Drew Morris", hometown: "Richmond, IN", major: "Chemical Engineering", username: "morrisad" },
  { name: "Collin Mao Morris", hometown: "Shanghai, China", major: "Computer Science", username: "morrisc1" },
  { name: "David Jason Purdy", hometown: "Franklin, IN", major: "Computer Science", username: "purdydj" },
  { name: "Carl Frederick Quist", hometown: "Marshall, MI", major: "Mechanical Engineering", username: "quistcf" },
  { name: "Jack Phillip Raker", hometown: "Palatine, IL", major: "Chemical Engineering", username: "rakerjp" },
  { name: "Mason Darrell Reid", hometown: "Glasgow, KY", major: "Biology", username: "reidmd" },
  { name: "Luke Abraham Wendel", hometown: "Noblesville, IN", major: "Computer Engineering", username: "wendella" },
  { name: "Ethan Douglas Whetter", hometown: "Santa Barbara, CA", major: "Biomedical Engineering", username: "whetteed" }
];

var juniors = [
  { name: "Richard Wayne Barker III", hometown: "Columbia, IL", major: "Engineering Design", username: "barkerrw" },
  { name: "Aidan Jeffery Sturgeon", hometown: "West Lafayette, IN", major: "Mechanical Engineering", username: "sturgeaj" },
  { name: "Mason Steven Wykes", hometown: "Greenville, OH", major: "Mechanical Engineering", username: "wykesms" },
  { name: "Braxton Micheal Gabbard", hometown: "Terre Haute, IN", major: "Civil Engineering", username: "gabarbm"},
];

var sophomores = [
  { name: "Ziyu 'Leonardo' Xie", hometown: "Chengdu City, China", major: "Computer Engineering", username: "xiez6" },
  { name: "Ian 'Earl' Christopher Resnik", hometown: "Pittsburgh, PA", major: "Mechanical Engineering", username: "resnikic" },
  { name: "Nikita Romanovich Egorov", hometown: "Fishers, IN", major: "Electrical Engineering", username: "egorovn" },
  { name: "Joshua Quinn Shrock", hometown: "Goshen, IN", major: "Computer Engineering", username: "shrocjq" },
  { name: "Aidan Donald Janc", hometown: "Chicago, IL", major: "Computer Science", username: "jancad" },
  { name: "Ian Henry Stedham", hometown: "Columbia, MD", major: "Computer Science", username: "stedhai" },
  { name: "Adam Steven Deckard", hometown: "Nashville, TN", major: "Mechanical Engineering", username: "deckaras" },
  { name: "Nathan Rupert Pratt", hometown: "Hopewell, NJ", major: "Eng. Physics", username: "prattnr" },
  { name: "Zachary ZheYing Cao", hometown: "Louisville, KY", major: "Computer Science", username: "caozz" },
  { name: "Andrew Dietrich Nichols", hometown: "Houston, TX", major: "Mechanical Engineering", username: "nicolad" },
  { name: "Apollo Jackson Picot", hometown: "Rockton, IL", major: "Mechanical Engineering", username: "picotaj" },
  { name: "Damian Ivan Dalic", hometown: "Chicago, IL", major: "Computer Science", username: "dalicdi" },
  { name: "Matthew Li Hart", hometown: "Clarksville, MD", major: "Electrical Engineering", username: "hartml" },
  { name: "Drew Ryan Kilner", hometown: "Louisville, KY", major: "Computer Engineering", username: "kilnerdr" },
  { name: "James 'Zeno' Day", hometown: "Lexington, KY", major: "Computer Science", username: "dayjz" },
  { name: "Anuj Suvarna", hometown: "St. Charles, IL", major: "Computer Engineering", username: "suvarna1", link:"https://www.triangle.org/" },
  { name: "Vincent Donovan Hammer", hometown: "Noblesville, IN", major: "Optical Engineering", username: "hammervd" },
  { name: "Junki Lee", hometown: "Montrose, CA", major: "Computer Engineering", username: "leej25" },
  { name: "Tristan Colt Wischmeier", hometown: "Excelsior, MN", major: "Chemical Engineering", username: "wischmtc"},
  { name: "Alexander Gordon Herzog", hometown: "Elwood, IL", major: "Computer Engineering", username: "herzogag"},
];

var freshman = [
  { name: "Joshua Wai Kit Jue", hometown: "San Francisco, CA", major: "Computer Science", username: "juejw"},
  { name: "Noah Robert Gerschutz", hometown: "Carey, OH", major: "Civil Engineering", username: "gerschnr"},
  { name: "Ryan Matthew Burch", hometown: "Brownsburg, IN", major: "Mechanical Engineering", username: "burchrm"},
  { name: "Devin Lorenzo Bibb", hometown: "Washington DC", major: "Computer Science", username: "bibbdl"},
  { name: "Ethan James Parsons", hometown: "Brownsburg, IN", major: "Computer Science", username: "parsonej"},
  { name: "Praanav Ravi Lodha", hometown: "Bombay, India", major: "Mechnanical Engineering", username: "lodhapr"},
  { name: "Jake Richard Vincent", hometown: "Valparaiso, IN", major: "Mechanical Engineering", username: "vincenjr"},
  { name: "Kyle Benjamin Broeker", hometown: "Newburgh, IN", major: "Mechanical Engineering", username: "broekekb"},
  { name: "Ethan Conner Minckler", hometown: "Anna, IN", major: "Mechanical Engineering", username: "mincklec"},
  { name: "Asher Lennon Blythe", hometown: "Galveston, TX", major: "Mechanical Engineering", username: "blytheal"},
]



function getBrotherCard(brother){
  var email = brother.username + '@rose-hulman.edu';
  return `
    <div class="col l6">
      <div class="card-panel z-depth-1">
        <div class="row valign-wrapper no-margin">
          <div class="col s3">
         
            <img id="${brother.username}" src="img/portraits/${brother.username}.jpg" alt="" class="circle responsive-img valign">
          
            </div>
          <div class="col s9">
            <h5 class="no-top-margin"><strong>${brother.name}</strong></h5>
            <h6 class="no-margin">${brother.hometown}</h6>
            <h6>${brother.major}</h6>
            <a href="mailto:${email}" class="no-margin green-text text-darken-3">${email}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// For 1 brother card
function buildContainer(brotherList, selector){
  var html = "";
  for(var i = 0; i < brotherList.length; i += 2){
    html += '<div class="row content no-margin">';
    html += getBrotherCard(brotherList[i]);
    if( (i+1) < brotherList.length)
      html += getBrotherCard(brotherList[i+1]);
    html += '</div>';
    html += '</div>';
  }
  $(selector).append(html); //Only access dom once per container
}

// For a whole grade, with lil parallax container below
function buildSection(section) {
  var html = `
  <div id="${section}" class="section white scrollspy">
    <div class="row container">
      <h2 class="header">${capitalizeFirstLetter(section)}</h2>
      <div id="${section}-container">
      </div>
    </div>
  </div>
  <div class="parallax-container-mobile">
    <div class="parallax-mobile"><img src="img/brothers/porch-pic-19.jpg"></div>
  </div>
  `;
  $("#grades").append(html);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: Only show the sections if there are brothers for it
if (seniors != null && seniors.length != 0) {
  buildSection("seniors");
  buildContainer(seniors, "#seniors-container");
  $("#brothers-content").append(`<li><a href="#seniors">Seniors</a></li>`);
}

if (juniors != null && juniors.length != 0) {
  buildSection("juniors");
  buildContainer(juniors, "#juniors-container");
  $("#brothers-content").append(`<li><a href="#juniors">Juniors</a></li>`);
}

if (sophomores != null && sophomores.length != 0) {
  buildSection("sophomores");
  buildContainer(sophomores, "#sophomores-container");
  $("#brothers-content").append(`<li><a href="#sophomores">Sophomores</a></li>`);
}
if (freshman != null && freshman.length != 0) {
  buildSection("freshman");
  buildContainer(freshman, "#freshman-container");
  $("#brothers-content").append(`<li><a href="#freshman">Freshman</a></li>`);
}

// Tenn ball
//$("#barrnp").hover( () => $("#barrnp").attr("src","img/portraits/BarrTennisBall.jpg"), () => $("#barrnp").attr("src","img/portraits/barrnp.jpg"));
//$("allenvj").onclick( () => $("allenvj").attr("href","https://www.rosepikes.com/"), () => $("allenvj").attr("src","img/portraits/allenvj.jpg"))
