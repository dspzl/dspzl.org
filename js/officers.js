var elected = [
    { position: 'President', name: "Nikita Romanovich Egorov", username:"egorovn" },
    { position: 'Vice President', name: "Vincent Donovan Hammer", username: "hammervd" },
    { position: 'Tresurer', name: "Ian Henry Stedham", username: "stedhai" },
    { position: 'Steward', name: "Nathan Rupert Pratt", username:"prattnr" },
    { position: 'House Director', name: "Jameson Michael Jochheim", username:"jochhejm" },
    { position: 'Secretary', name:"Zachary ZheYing Cao", username:"caozz" },
    { position: 'Philanthropy Director', name: "Ian 'Earl' Christopher Resnik", username:"resnikic"},
    { position: 'Sergeant-at-Arms', name:'Adam Steven Deckard', username:"deckaras" },
    { position: 'Rush Director', name: "Aidan Donald Janc", username:"jancad" },
    { position: 'Rush Director', name: "Noah Robert Gerschutz", username:"gerschnr"},
    { position: 'Social Director', name: "Joshua Quinn Shrock", username:"shrocjq"},
    { position: 'Bid Selection Committee Chairman', name: "Matthew Li Hart", username:"hartml"},
    { position: 'New Member Educator', name: "Mason Darrell Reid", username:"reidmd" }
];

var appointed = [
    { position:'Activities Director', name:'Braxton Micheal Gabbard', username:"gabarbm" },
    { position: 'Athletics Director', name: "Ethan James Parsons", username:"parsonej" },
    { position: 'Interfraternity Council Representative', name:'Adam Steven Deckard', username:"deckaras" },
    { position: 'Interfraternity Council Representative', name: "Asher Lennon Blythe", username:"blytheal" },
    { position: 'Public Relations Director', name: "Ethan Conner Minckler", username:"mincklec" },
    { position: 'Alumni Director', name:"Zachary ZheYing Cao", username:"caozz" },
    { position: 'Chaplain', name: "Carl Frederick Quist", username:"quistcf" },
    { position: 'Editor', name: "Apollo Jackson Picot", username:"picotaj" },
    { position: 'Historian', name: "Nikita Romanovich Egorov", username:"egorovn" },
    { position: 'Technology Director', name: "Aidan Jeffery Sturgeon", username:"sturgeaj" },
    { position: 'Webmaster', name: "Joshua Wai Kit Jue", username:"juejw" },
    { position: 'Student Government Association Representative', name: "Jake Richard Vincent", username:"vincenjr" },
    { position: 'Song Leader', name: "Andrew Dietrich Nichols", username: "nicolad" },
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
