var elected = [
    { position: 'President', name: 'Tyler Joe Thenell', username: "theneltj" },
    { position: 'Vice-President', name: "David Jason Purdy", username: "purdydj" },
    { position: 'Treasurer', name: "Vance Joesph Allen", username: "allenvj" },
    { position: 'Steward', name: "Lucas Alberto D'Alesio", username:"dalesil" },
    { position: 'House Director', name: "Samuel Edward Johnson", username:"johnsose" },
    { position: 'Secretary', name: "Collin Mao Morris", username:"morrisc1" },
    { position: 'Philanthropy Director', name: "Bryce Benjamin Hatfield", username:"hatfiebb"},
    { position: 'Sergeant-at-Arms', name: "Mason Darrell Reid", username:"reidmd" },
    { position: 'Rush Director', name: "Brendon Michael Crabtree", username:"crabtrbm" },
    { position: 'Rush Director', name: "Carl Frederick Quist", username:"quistcf"},
    { position: 'Social Director', name: "Michael James Johnson", username:"johnsom4" },
    { position: 'Bid Selection Committee Chairman', name:"Luke Abraham Wendel", username:"wendella" },
    { position: 'New Member Educator', name: "Carson James Meyer", username:"meyerc1" }
];

var appointed = [
    { position:'Activities Director', name:'David Jason Purdy', username:"purdydj" },
    { position: 'Athletics Director', name: "Ethan Benjamin Drong", username:"drongeb" },
    { position: 'Interfraternity Council Representative', name: 'Carson James Meyer', username: "meyerc1" },
    { position: 'Interfraternity Council Representative', name: "Mason Steven Wykes", username:"wykesms" },
    { position: 'Public Relations Director', name: "Brendon Michael Crabtree", username:"crabtrbm" },
    { position: 'Alumni Director', name: "Aidan Jeffery Sturgeon", username:"sturgeaj" },
    { position: 'Chaplain', name: "Nicholas Paul Barr", username:"barrnp" },
    { position: 'Editor', name: "Bryce Benjamin Hatfield", username: "hatfiebb" },
    { position: 'Historian', name:"Vance Joesph Allen", username:"allenvj" },
    { position: 'Technology Director', name: "Aidan Cory Moss", username:"mossac" },
    { position: 'Webmaster', name: "John 'Yoon Su' Chung", username:"chungy" },
    { position: 'Student Government Association Representative', name: "Richard Wayne Barker III", username:"barkerrw" },
    { position: 'Song Leader', name: "Ethan Douglas Whetter", username: "whetteed" },
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
