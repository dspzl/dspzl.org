/* Update the brothers list here */

var seniors = [
  { name: "Richard Wayne Barker III", hometown: "Columbia, IL", major: "Engineering Design", username: "barkerrw" },
  { name: "Braxton Micheal Gabbard", hometown: "Terre Haute, IN", major: "Civil Engineering", username: "gabarbm"},
  { name: "Jameson Michael Jochheim", hometown: "Round Lake, IL", major: "Mechanical Engineering", username: "jochhejm" },
  { name: "Carl Frederick Quist", hometown: "Marshall, MI", major: "Mechanical Engineering", username: "quistcf" },
  { name: "Mason Darrell Reid", hometown: "Glasgow, KY", major: "Biology", username: "reidmd" },
  { name: "Aidan Jeffery Sturgeon", hometown: "West Lafayette, IN", major: "Mechanical Engineering", username: "sturgeaj" },
  { name: "Mason Steven Wykes", hometown: "Greenville, OH", major: "Mechanical Engineering", username: "wykesms" },
];

var juniors = [
  { name: "Zachary ZheYing Cao", hometown: "Louisville, KY", major: "Computer Science", username: "caozz" },
  { name: "Damian Ivan Dalic", hometown: "Chicago, IL", major: "Computer Science", username: "dalicdi" },
  { name: "James 'Zeno' Day", hometown: "Lexington, KY", major: "Computer Science", username: "dayjz" },
  { name: "Adam Steven Deckard", hometown: "Nashville, TN", major: "Mechanical Engineering", username: "deckaras" },
  { name: "Nikita Romanovich Egorov", hometown: "Fishers, IN", major: "Electrical Engineering", username: "egorovn" },
  { name: "Vincent Donovan Hammer", hometown: "Noblesville, IN", major: "Optical Engineering", username: "hammervd" },
  { name: "Matthew Li Hart", hometown: "Clarksville, MD", major: "Electrical Engineering", username: "hartml" },
  { name: "Alexander Gordon Herzog", hometown: "Elwood, IL", major: "Computer Engineering", username: "herzogag"},
  { name: "Aidan Donald Janc", hometown: "Chicago, IL", major: "Computer Science", username: "jancad" },
  { name: "Drew Ryan Kilner", hometown: "Louisville, KY", major: "Computer Engineering", username: "kilnerdr" },
  { name: "Junki Lee", hometown: "Montrose, CA", major: "Computer Engineering", username: "leej25" },
  { name: "Andrew Dietrich Nichols", hometown: "Houston, TX", major: "Mechanical Engineering", username: "nicolad" },
  { name: "Nathan Rupert Pratt", hometown: "Hopewell, NJ", major: "Eng. Physics", username: "prattnr" },
  { name: "Apollo Jackson Picot", hometown: "Rockton, IL", major: "Mechanical Engineering", username: "picotaj" },
  { name: "Ian 'Earl' Christopher Resnik", hometown: "Pittsburgh, PA", major: "Mechanical Engineering", username: "resnikic" },
  { name: "Joshua Quinn Shrock", hometown: "Goshen, IN", major: "Computer Engineering", username: "shrocjq" },
  { name: "Brody Keaton Smith", hometown: "Talbott, TN", major: "Computer Science", username: "smithbk" },
  { name: "Ian Henry Stedham", hometown: "Columbia, MD", major: "Computer Science", username: "stedhai" },
  { name: "Anuj Suvarna", hometown: "St. Charles, IL", major: "Computer Engineering", username: "suvarna1"},
  { name: "Tristan Colt Wischmeier", hometown: "Excelsior, MN", major: "Chemical Engineering", username: "wischmtc"},
  { name: "Ziyu 'Leonardo' Xie", hometown: "Chengdu City, China", major: "Computer Engineering", username: "xiez6" },
];

var sophomores = [
  { name: "Devin Lorenzo Bibb", hometown: "Washington DC", major: "Computer Science", username: "bibbdl"},
  { name: "Asher Lennon Blythe", hometown: "Galveston, TX", major: "Mechanical Engineering", username: "blytheal"},
  { name: "Kyle Benjamin Broeker", hometown: "Newburgh, IN", major: "Mechanical Engineering", username: "broekekb"},
  { name: "Ryan Matthew Burch", hometown: "Brownsburg, IN", major: "Mechanical Engineering", username: "burchrm"},
  { name: "Noah Robert Gerschutz", hometown: "Carey, OH", major: "Civil Engineering", username: "gerschnr"},
  { name: "Joshua Wai Kit Jue", hometown: "San Francisco, CA", major: "Computer Science", username: "juejw"},
  { name: "Praanav Ravi Lodha", hometown: "Bombay, India", major: "Mechnanical Engineering", username: "lodhapr"},
  { name: "Jacob Alexander Marsh", hometown: "San Diego, CA", major: "Computer Science", username: "marshja" },
  { name: "Ethan Conner Minckler", hometown: "Anna, IN", major: "Mechanical Engineering", username: "mincklec"},
  { name: "Ethan James Parsons", hometown: "Brownsburg, IN", major: "Computer Science", username: "parsonej"},
  { name: "Jeremiah 'Mc'Sweeny 'with no Mc'", hometown: "Indianapolis, IN", major: "Mechanical Engineer", username: "sweenyj" },
  { name: "Jake Richard Vincent", hometown: "Valparaiso, IN", major: "Mechanical Engineering", username: "vincenjr"},
];

var freshman = [
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
$("#morrisad").hover( () => $("#morrisad").attr("src","img/plz_don't_look/morrisad.PNG"), () => $("#morrisad").attr("src","img/portraits/morrisad.jpg"));
$("#huygebm").hover( () => $("#huygebm").attr("src","img/plz_don't_look/huygebm.PNG"), () => $("#huygebm").attr("src","img/portraits/huygebm.jpg"));
$("#johnsom4").hover( () => $("#johnsom4").attr("src","img/plz_don't_look/johnsom4.PNG"), () => $("#johnsom4").attr("src","img/portraits/johnsom4.jpg"));
$("#allenvj").hover( () => $("#allenvj").attr("src","img/plz_don't_look/allenvj.PNG"), () => $("#allenvj").attr("src","img/portraits/allenvj.jpg"));
$("#bowmanwb").hover( () => $("#bowmanwb").attr("src","img/plz_don't_look/bowmanwb.PNG"), () => $("#bowmanwb").attr("src","img/portraits/bowmanwb.jpg"));
$("#chois3").hover( () => $("#chois3").attr("src","img/plz_don't_look/chois3.PNG"), () => $("#chois3").attr("src","img/portraits/chois3.jpg"));
$("#chungy").hover( () => $("#chungy").attr("src","img/plz_don't_look/chungy.PNG"), () => $("#chungy").attr("src","img/portraits/chungy.jpg"));
$("#crabtrbm").hover( () => $("#crabtrbm").attr("src","img/plz_don't_look/crabtrbm.PNG"), () => $("#crabtrbm").attr("src","img/portraits/crabtrbm.jpg"));
$("#jochhejm").hover( () => $("#jochhejm").attr("src","img/plz_don't_look/jochhejm.PNG"), () => $("#jochhejm").attr("src","img/portraits/jochhejm.jpg"));
$("#johnsose").hover( () => $("#johnsose").attr("src","img/plz_don't_look/johnsose.PNG"), () => $("#johnsose").attr("src","img/portraits/johnsose.jpg"));
$("#mitterj").hover( () => $("#mitterj").attr("src","img/plz_don't_look/mitterj.PNG"), () => $("#mitterj").attr("src","img/portraits/mitterj.jpg"));
$("#morrisc1").hover( () => $("#morrisc1").attr("src","img/plz_don't_look/morrisc1.PNG"), () => $("#morrisc1").attr("src","img/portraits/morrisc1.jpg"));
$("#quistcf").hover( () => $("#quistcf").attr("src","img/plz_don't_look/quistcf.PNG"), () => $("#quistcf").attr("src","img/portraits/quistcf.jpg"));
$("#rakerjp").hover( () => $("#rakerjp").attr("src","img/plz_don't_look/rakerjp.PNG"), () => $("#rakerjp").attr("src","img/portraits/rakerjp.jpg"));
$("#reidmd").hover( () => $("#reidmd").attr("src","img/plz_don't_look/reidmd.PNG"), () => $("#reidmd").attr("src","img/portraits/reidmd.jpg"));
$("#wendella").hover( () => $("#wendella").attr("src","img/plz_don't_look/wendella.PNG"), () => $("#wendella").attr("src","img/portraits/wendella.jpg"));
$("#whetteed").hover( () => $("#whetteed").attr("src","img/plz_don't_look/whetteed.PNG"), () => $("#whetteed").attr("src","img/portraits/whetteed.jpg"));
$("#purdydj").hover( () => $("#purdydj").attr("src","img/plz_don't_look/purdydj.PNG"), () => $("#purdydj").attr("src","img/portraits/purdydj.jpg"));
$("#drongeb").hover( () => $("#drongeb").attr("src","img/plz_don't_look/drongeb.PNG"), () => $("#drongeb").attr("src","img/portraits/drongeb.jpg"));
