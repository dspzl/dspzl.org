var elected = [
  { position: 'President', name: "Caleb John Heldman", username:"heldmacj" },
  { position: 'Vice President', name: "Oliver O'Dell Estes", username: "esteso" },
  { position: 'Treasurer', name: "Nate Christopher Nielsen", username: "nielsenc" },
  { position: 'Steward', name: "Aidan Kristopher Lee Arnold", username: "arnoldak" },
  { position: 'House Director', name: "Payton Hudson Sprinkle", username: "sprinkph"},
  { position: 'Secretary', name: "Matthew David Rudolph", username: "rudolphmd" },
  { position: 'Philanthropy Director', name: "Alexander Naismith Carpenter", username: "carpena1"},
  { position: 'Sergeant-at-Arms', name: "C.J. Northrop", username: "northrcf" },
  { position: 'Rush Director', name: "Cam Ransdell Baylor", username: "baylorcr" },
  { position: 'Rush Director', name: "Charlie Stephen Landis", username: "landiscs"},
  { position: 'Social Director', name: "John Bentley Webb", username: "webbjb"},
  { position: 'Bid Selection Committee Chairman', name: "Erik Winston", username: "winstoe"},
  { position: 'New Member Educator', name: "Philip Scott Bernauer", username: "bernaups" }
];

var appointed = [
  { position: 'Activities Director', name: "Sebastian Thomas Choy", username: "choys" },
  { position: 'Athletics Director', name: "Brenden James Warren", username: "warrenbj" },
  { position: 'Interfraternity Council Representative', name: "Samuel Anthony Drong", username: "drongsa" },
  { position: 'Public Relations Director', name: "Ethan Conner Minckler", username: "mincklec" },
  { position: 'Alumni Director', name: "John Huang", username: "huangj15" },
  { position: 'Chaplain', name: "Mathias (Mac) William Rambur", username: "ramburmw" },
  { position: 'Editor', name: "Matthew David Rudolph", username: "rudolphmd" },
  { position: 'Historian', name: "Lawson Liang Zhou", username: "zhoull" },
  { position: 'Technology Director', name: "Payton Hudson Sprinkle", username: "sprinkph" },
  { position: 'Webmaster', name: "C.J. Northrop", username: "northrcf" },
  { position: 'Student Government Association Representative', name: "Cam Ransdell Baylor", username: "baylorcr" },
];

var advisors = [
  { position:'Professor of Electrical and Computer Engineering', name: "Dr. Marc Herniter", username: "herniter" },
  { position:'Physics & Optical Engineering Department Technician', name: "Ben Webster", username: "webster" }
];

function getOfficerCard(brother){
  var email = brother.username + '@rose-hulman.edu';
  return `
    <div class="col l6">
      <div class="card-panel z-depth-1">
        <div class="row valign-wrapper no-margin">
          <div class="col s3">
            <img src="img/portraits/${brother.username}.jpg" alt="" class="circle responsive-img valign">
          </div>
          <div class="col s9">
            <h5 class="no-top-margin"><strong>${brother.position}</strong></h5>
            <h6 class="no-margin">${brother.name}</h6>
            <a href="mailto:${email}" class="no-margin green-text text-darken-3">${email}</a>
          </div>
        </div>
      </div>
    </div>              
  `;
}

function buildContainer(brotherList, selector){
  var html = "";
  for(var i = 0; i < brotherList.length; i += 2){
    html += '<div class="row content no-margin">';
    html += getOfficerCard(brotherList[i]);
    if( (i+1) < brotherList.length)
      html += getOfficerCard(brotherList[i+1]);
    html += '</div>';
    html += '</div>';
  }
  $(selector).append(html); //One dom access per container
}

buildContainer(elected, "#elected-container");

buildContainer(appointed, "#appointed-container");

buildContainer(advisors, "#advisors-container");
