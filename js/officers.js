var elected = [
    { position: 'President', name: 'Brendon Michael Crabtree', username: "crabtrbm" },
    { position: 'Vice President', name: "Vance Joesph Allen", username: "allenvj" },
    { position: 'Tresurer', name: "Jack Phillip Raker", username: "rakerjp" },
    { position: 'Steward', name: "Mason Steven Wykes", username:"wykesms" },
    { position: 'House Director', name: "Brian Michael Huyge", username:"huygebm" },
    { position: 'Secretary', name: "Nikita Romanovich Egorov", username:"egorovn" },
    { position: 'Philanthropy Director', name: "Ian 'Earl' Christopher Resnik", username:"resnikic"},
    { position: 'Sergeant-at-Arms', name: "Ethan Benjamin Drong", username:"drongeb" },
    { position: 'Rush Director', name: "Sang Heon Choi", username:"chois3" },
    { position: 'Rush Director', name: "Joshua Quinn Shrock", username:"shrocjq"},
    { position: 'Social Director', name: "David Jason Purdy", username:"purdydj" },
    { position: 'Bid Selection Committee Chairman', name:"Luke Abraham Wendel", username:"wendella" },
    { position: 'New Member Educator', name: "Joshua Steven Mitterling", username:"mitterj" }
];

var appointed = [
    { position:'Activities Director', name:'Adam Steven Deckard', username:"deckaras" },
    { position: 'Athletics Director', name: "Apollo Jackson Picot", username:"picotaj" },
    { position: 'Interfraternity Council Representative', name: 'Joshua Steven Mitterling', username: "mitterj" },
    { position: 'Interfraternity Council Representative', name: "Carl Frederick Quist", username:"quistcf" },
    { position: 'Public Relations Director', name: "Brendon Michael Crabtree", username:"crabtrbm" },
    { position: 'Alumni Director', name: "Sang Heon Choi", username:"chois3" },
    { position: 'Chaplain', name: "Mason Darrell Reid", username:"reidmd" },
    { position: 'Editor', name: "Ziyu 'Leonardo' Xie", username: "xiez6" },
    { position: 'Historian', name:"Zachary ZheYing Cao", username:"caozz" },
    { position: 'Technology Director', name: "Joshua DoggyDog Warning", username:"warninjd" },
    { position: 'Webmaster', name: "David Jason Purdy", username:"purdydj" },
    { position: 'Student Government Association Representative', name: "Matthew Li Hart", username:"hartml" },
    { position: 'Song Leader', name: "Andrew Dietrich Nichols", username: "nicolad" },
];

var advisors = [
  { position:'Professor of Electrical and Computer Engineering', name:'Dr. Cliff Grigg', username:"grigg" },
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
