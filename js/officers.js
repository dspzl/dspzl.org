var elected = [
    { position: 'President', name: "Zachary ZheYing Cao", username:"caozz" },
    { position: 'Vice President', name: "Apollo Jackson Picot", username: "picotaj" },
    { position: 'Treasurer', name: "Asher Lennon Blythe", username: "blytheal" },
    { position: 'Steward', name: "Noah Robert Gerschutz", username:"gerschnr" },
    { position: 'House Director', name: "Jake Richard Vincent", username:"vincenjr"},
    { position: 'Secretary', name:"John Bentley Webb", username:"webbjb" },
    { position: 'Philanthropy Director', name: "James 'Zeno' Day", username:"dayjz"},
    { position: 'Sergeant-at-Arms', name:'Tristan Colt Wischmeier', username:"wischmtc" },
    { position: 'Rush Director', name: "Vincent Donovan Hammer", username:"hammervd" },
    { position: 'Rush Director', name: "Nathan Rupert Pratt", username:"prattnr"},
    { position: 'Social Director', name: "Drew Ryan Kilner", username:"shrocjq"},
    { position: 'Bid Selection Committee Chairman', name: "Matthew Li Hart", username:"hartml"},
    { position: 'New Member Educator', name: "Adam Steven Deckard", username:"deckaras" }
];

var appointed = [
    { position:'Activities Director', name:'Alexander Gordon Herzog', username:"herzogag" },
    { position: 'Athletics Director', name: "Ethan James Parsons", username:"parsonej" },
    { position: 'Interfraternity Council Representative', name:'Kyle Benjamin Broeker', username:"broekekb" },
    { position: 'Interfraternity Council Representative', name: "Cale David Everroad", username:"everrocd" },
    { position: 'Public Relations Director', name: "Ethan Conner Minckler", username:"mincklec" },
    { position: 'Alumni Director', name:"Nikita Romanovich Egorov", username:"egorovn" },
    { position: 'Chaplain', name: "Ian Henry Stedham", username:"stedhai" },
    { position: 'Editor', name: "Ryan Matthew Burch", username:"burchrm" },
    { position: 'Historian', name: "Nikita Romanovich Egorov", username:"egorovn" },
    { position: 'Technology Director', name: "Jeremiah Sweeny", username:"sweenyj" },
    { position: 'Webmaster', name: "Joshua Wai Kit Jue", username:"juejw" },
    { position: 'Student Government Association Representative', name: "Zander Matthew Tamez", username:"tamezzm" },
    { position: 'Song Leader', name: "Charlie Stephen Landis", username: "landiscs" },
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
