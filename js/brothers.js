/* Update the brothers list here */

var seniors = [
  { name: "Asher Lennon Blythe", hometown: "Galveston, TX", major: "Mechanical Engineering", username: "blytheal" },
  { name: "Kyle Benjamin Broeker", hometown: "Newburgh, IN", major: "Mechanical Engineering", username: "broekekb" },
  { name: "Ryan Matthew Burch", hometown: "Brownsburg, IN", major: "Mechanical Engineering", username: "burchrm" },
  { name: "Noah Robert Gerschutz", hometown: "Carey, OH", major: "Civil Engineering", username: "gerschnr" },
  { name: "Joshua Wai Kit Jue", hometown: "San Francisco, CA", major: "Computer Science", username: "juejw" },
  { name: "Jacob Alexander Makrsh", hometown: "San Diego, CA", major: "Computer Science", username: "marshja" },
  { name: "Ethan Conner Minckler", hometown: "Anna, IN", major: "Mechanical Engineering", username: "mincklec" },
  { name: "Ethan James Parsons", hometown: "Brownsburg, IN", major: "Computer Science", username: "parsonej" },
  { name: "William Ryan Prusak", hometown: "Naperville, IL", major: "Mechanical Engineering", username: "prusakwr" },
  { name: "Sean Barrie Rody", hometown: "Frenchtown, MT", major: "Computer Engineering", username: "rodysb" },
  { name: "William Henry Scholten III", hometown: "Hudsonville, MI", major: "Computer Engineering", username: "scholtwh" },
  { name: "Jeremiah 'Mc'Sweeny 'with no Mc'", hometown: "Indianapolis, IN", major: "Mechanical Engineering", username: "sweenyj" },
  { name: "Jake Richard Vincent", hometown: "Valparaiso, IN", major: "Mechanical Engineering", username: "vincenjr" },
  { name: "Ian 'Earl' Christopher Resnik", hometown: "Pittsburgh, PA", major: "Mechanical Engineering", username: "resnikic" },
];

var juniors = [
  { name: "Philip Scott Bernauer", hometown: "Indianapolis, IN", major: "Chemical Engineering", username: "bernaups" },
  { name: "Sebastian Thomas Choy", hometown: "Weehawken, NJ", major: "Mechanical Engineering", username: "choys" },
  { name: "Oliver O'Dell Estes", hometown: "Michigan City, IN", major: "Mechanical Engineering", username: "esteso" },
  { name: "Cale David Everroad", hometown: "Mount Gilead, OH", major: "Mechanical Engineering", username: "everrocd" },
  { name: "Caleb John Heldman", hometown: "Brownsburg, IN", major: "Biomedical Engineering", username: "heldmacj" },
  { name: "Charlie Stephen Landis", hometown: "Kensington, MD", major: "Electrical Engineering", username: "landiscs" },
  { name: "Zander Matthew Tamez", hometown: "Monee, IL", major: "Mechanical Engineering", username: "tamezzm" },
  { name: "John Bentley Webb", hometown: "Poulsbo, WA", major: "Electrical Engineering", username: "webbjb" },
  { name: "Ewik Bintin", hometown: "Arlington, VA", major: "Mechanical Engineering", username: "winstoe" },
];

var sophomores = [
  { name: "Cam Ransdell Baylor", hometown: "Lincoln, NE", major: "Mechanical Engineering", username: "baylorcr" },
  { name: "Alexander Naismith Carpenter", hometown: "Philpot, KY", major: "Biomedical Engineering", username: "carpena1" },
  { name: "Ryan Andrew Hung", hometown: "Irvine, CA", major: "Computer Science", username: "hungra" },
  { name: "Nate Christopher Nielsen", hometown: "Dallas, TX", major: "Electrical Engineering", username: "nielsenc" },
  { name: "Charles Joseph Frederick Northrop", hometown: "Warsaw, IN", major: "Computer Science", username: "northrcf" },
  { name: "Layth Khalil Rahman", hometown: "Lexington, KY", major: "Software Engineering", username: "rahmanlk" },
  { name: "Michael Joseph Riedeman Jr.", hometown: "Indianapolis, IN", major: "Chemical Engineering", username: "riedemenmj" },
  { name: "Payton Hudson Sprinkle", hometown: "Fort Wayne, IN", major: "Mathematics", username: "sprinkph" },
  { name: "Dane Cooper Verkouteren", hometown: "Los Angeles, CA", major: "Computer Engineering", username: "verkoudc" },
  { name: "Marcus Joonsuh Yoo", hometown: "Irvine, CA", major: "Mechanical Engineering", username: "yoomj" },
  { name: "Logan Daniel Fiorito-Zendejas", hometown: "Lynnwood, WA", major: "Engineering Design", username: "fioritld" },
  { name: "Brenden James Warren", hometown: "Crawfordsville, Indiana", major: "Mechanical Engineering", username: "warrenbj"},
];

var freshman = [

];


function getBrotherCard(brother) {
  var email = brother.username + '@rose-hulman.edu';
  return `
    <div class="col l6">
      <div class="card-panel z-depth-1">
        <div class="row valign-wrapper no-margin">
          <div class="col s3">
         
            <img id="${brother.username}" src="img/portraits/${brother.username}.jpg" alt="" class="circle responsive-img valign brother_img">
            </div>
          <div class="col s9">
            <h5 id="${brother.username}_name" class="no-top-margin"><strong>${brother.name}</strong></h5>
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
function buildContainer(brotherList, selector) {
  var html = "";
  for (var i = 0; i < brotherList.length; i += 2) {
    html += '<div class="row content no-margin">';
    html += getBrotherCard(brotherList[i]);
    if ((i + 1) < brotherList.length)
      html += getBrotherCard(brotherList[i + 1]);
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
    <div class="porch parallax-mobile"><img src="img/brothers/porch-pic-2023-Richard.jpg"></div>
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
if (freshmen != null && freshmen.length != 0) {
  buildSection("freshmen");
  buildContainer(freshmen, "#freshmen-container");
  $("#brothers-content").append(`<li><a href="#freshmen">Freshmen</a></li>`);
}

// Tenn ball


// $("#sturgeaj").hover(() => $("#sturgeaj").attr("src", "img/plz_don't_look/sturgeaj.PNG"), () => $("#sturgeaj").attr("src", "img/portraits/sturgeaj.jpg"));

// $("#sweenyj").hover(() => $("#sweenyj").attr("src", "img/plz_don't_look/sweenyj.PNG"), () => $("#sweenyj").attr("src", "img/portraits/sweenyj.jpg"));
// $("#marshja").hover(() => $("#marshja").attr("src", "img/plz_don't_look/marshja.PNG"), () => $("#marshja").attr("src", "img/portraits/marshja.jpg"));
// $("#smithbk").hover(() => $("#smithbk").attr("src", "img/plz_don't_look/smithbk.PNG"), () => $("#smithbk").attr("src", "img/portraits/smithbk.jpg"));

// $("#bernaups").hover(() => $("#bernaups").attr("src", "img/plz_don't_look/bernaups.PNG"), () => $("#bernaups").attr("src", "img/portraits/bernaups.jpg"));
// $("#choys").hover(() => $("#choys").attr("src", "img/plz_don't_look/choys.PNG"), () => $("#choys").attr("src", "img/portraits/choys.jpg"));
// $("#everrocd").hover(() => $("#everrocd").attr("src", "img/plz_don't_look/everrocd.PNG"), () => $("#everrocd").attr("src", "img/portraits/everrocd.jpg"));
// $("#heldmacj").hover(() => $("#heldmacj").attr("src", "img/plz_don't_look/heldmacj.PNG"), () => $("#heldmacj").attr("src", "img/portraits/heldmacj.jpg"));
// $("#landiscs").hover(() => $("#landiscs").attr("src", "img/plz_don't_look/landiscs.PNG"), () => $("#landiscs").attr("src", "img/portraits/landiscs.jpg"));
// $("#tamezzm").hover(() => $("#tamezzm").attr("src", "img/plz_don't_look/tamezzm.PNG"), () => $("#tamezzm").attr("src", "img/portraits/tamezzm.jpg"));
// $("#webbjb").hover(() => $("#webbjb").attr("src", "img/plz_don't_look/webbjb.PNG"), () => $("#webbjb").attr("src", "img/portraits/webbjb.jpg"));
// $("#winstoe").hover(() => $("#winstoe").attr("src", "img/plz_don't_look/winstoe.PNG"), () => $("#winstoe").attr("src", "img/portraits/winstoe.jpg"));


//this probably isn't the ideal solution b/c the error still appears in the console if there
//isn't any image that exists but it works I guess
function isImageValid(imagePath) {
  return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);  // Image successfully loaded
      img.onerror = () => resolve(false);  // Image failed to load
      img.src = imagePath;
  });
}

function getHoverUWU() {
  const brothers = document.getElementsByClassName("brother_img");
  for (let i = 0; i < brothers.length; i++) {

    const identity = '#' + brothers.item(i).id;
    const user = brothers.item(i).id;

    isImageValid("img/plz_don't_look/" + user + ".PNG").then(isValid => {
      if (isValid) {
        $(identity).hover(() => $(identity).attr("src", "img/plz_don't_look/" + user + ".PNG"), () => $(identity).attr("src", "img/portraits/" + user + ".jpg"));
      }
      // else {
      //     console.log('Image is invalid');
      // }
  });
  }
}
//unlock at own risk, UWU
//getHoverUWU();
