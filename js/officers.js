var elected = [
  { position: 'President', name: "Jake Vincent", username:"vincenjr" },
  { position: 'Vice President', name: "Jeremiah Sweeny", username: "sweenyj" },
  { position: 'Treasurer', name: "Ethan Parsons", username: "parsonej" },
  { position: 'Steward', name: "Joshua Jue", username:"juejw" },
  { position: 'House Director', name: "Cale Everroad", username:"everrocd"},
  { position: 'Secretary', name:"Payton Hudson Sprinkle", username:"sprinkph" },
  { position: 'Philanthropy Director', name: "Michael Riedeman Jr.", username:"riedemenmj"},
  { position: 'Sergeant-at-Arms', name:'Jacob Marsh', username:"marshja" },
  { position: 'Rush Director', name: "Sean Rody", username:"rodysb" },
  { position: 'Rush Director', name: "Caleb Heldman", username:"heldmacj"},
  { position: 'Social Director', name: "Ethan Minckler", username:"mincklec"},
  { position: 'Bid Selection Committee Chairman', name: "Erik Winston", username:"winstoe"},
  { position: 'New Member Educator', name: "Ryan Burch", username:"burchrm" }
];

var appointed = [
  { position:'Activities Director', name:'Kyle Broeker', username:"broekekb" },
  { position: 'Athletics Director', name: "Vincent Donovan Hammer", username:"hammervd" },
  { position: 'Interfraternity Council Representative', name:'Payton Sprinkle', username:"sprinkph" },
  { position: 'Public Relations Director', name: "Ethan Conner Minckler", username:"mincklec" },
  { position: 'Alumni Director', name:"Dane Verkouteren", username:"verkoudc" },
  { position: 'Chaplain', name: "Erik Winston", username:"winstoe" },
  { position: 'Editor', name: "Payton Sprinkle", username:"sprinkph" },
  { position: 'Historian', name: "Marcus Yoo", username:"yoomj" },
  { position: 'Technology Director', name: "Olivier Estes", username:"esteso" },
  { position: 'Webmaster', name: "Ryan Hung", username:"hungra" },
  { position: 'Student Government Association Representative', name: "Nate Nielsen", username:"nielsenc" },
];

var advisors = [
  { position:'Professor of Electrical and Computer Engineering', name:'Dr. Marc Herniter', username:"herniter" },
  { position:'Physics & Optical Engineering Department Technician', name:'Ben Webster', username:"webster" }
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
