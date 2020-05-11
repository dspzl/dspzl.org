var elected = [
    { position: 'President', name: 'Philip James Bissmeyer', username: "bissmepj" },
    { position: 'Vice-President', name: "Cole Alexander Hanson", username: "hansonca" },
    { position: 'Engineered Leadership Director', name: "Jacob Dietrich Tebbe", username: "tebbejd" },
    { position: 'Treasurer', name: "Geoff Barton Tomlinson", username: "tomlingb" },
    { position: 'Steward', name: "Nasser Nadim Hegar", username:"hegarnn" },
    { position: 'House Director', name: "Brian Michael Huyge", username:"huygebm" },
    { position: 'Secretary', name: "Carl Frederick Quist", username:"quistcf" },
    { position: 'Sergeant-at-Arms', name: "Nicholas Paul Barr", username:"barrnp" },
    { position: 'Rush Director', name: "Tyler Joe Thenell", username:"theneltj" },
    { position: 'Rush Director', name: "Aidan Cory Moss", username:"mossac"},
    { position: 'Social Director', name: "Jake Brandt Powell", username:"powelljb" },
    { position: 'Bid Selection Committee Chairman', name:"Robert Dilbert DeBerry", username:"deberrr" },
    { position: 'New Member Educator', name: "Jackson Lee Cook", username:"cookjl" }
];

var appointed = [
    { position:'Activities Director', name:'Thomas Reid Meehan', username:"meehantr" },
    { position: 'Athletics Director', name: "Ethan Benjamin Drong", username:"drongeb" },
    { position: 'Interfraternity Council Representative', name: 'Carson James Meyer', username: "meyerc1" },
    { position: 'Interfraternity Council Representative', name: "Carl Frederick Quist", username:"quistcf" },
    { position: 'Public Relations Director', name: "Michael Richard Holtz", username:"holtzmr" },
    { position: 'Philanthropy Director', name: "Bryce Benjamin Hatfield", username:"hatfiebb"},
    { position: 'Alumni Director', name: "Jacob Dietrich Tebbe", username:"tebbejd" },
    { position: 'Chaplain', name: "Thomas Reid Meehan", username:"meehantr" },
    { position: 'Editor', name: "Carson James Meyer", username: "meyerc1" },
    { position: 'Historian', name:"Praneet Chakraborty", username:"chakrap" },
    { position: 'Technology Director', name: "Joshua Daniel Warning", username:"warninjd" },
    { position: 'Webmaster', name: "Carson James Meyer", username:"meyerc1" },
    //need middle name
    { position: 'Student Government Association Representative', name: "Mason Doland Reid", username:"reidmd" },
    { position: 'Song Leader', name: "James Guan", username: "guans" },
];

var advisors = [
  { position:'Professor of Electrical and Computer Engineering', name:'Dr. Cliff Grigg', username:"grigg" },
  { position:'Physics & Optical Engineering Department Technician', name:'Ben Webster', username:"webster" }
];



function getOfficerCard(brother){
  var email = brother.username+'@rose-hulman.edu';
  var html = '<div class="col l6">';
  html += '<div class="card-panel z-depth-1">';
  html += '<div class="row valign-wrapper no-margin">';
  html += '<div class="col s3">';
  html += '<img src="img/portraits/'+brother.username+'.jpg" alt="" class="circle responsive-img valign">';
  html += '</div>';
  html += '<div class="col s9">';
  html += '<h5 class="no-top-margin"><strong>'+brother.position+'</strong></h5>';
  html += '<h6 class="no-margin">'+brother.name+'</h6>';
  html += '<a href="mailto:'+email+'" class="no-margin green-text text-darken-3">'+email+'</a>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
}

function getAdvisorCard(advisor){
  var email = advisor.username+'@rose-hulman.edu';
  var html = '<div class="col l6">';
  html += '<div class="card-panel z-depth-1">';
  html += '<div class="row valign-wrapper no-margin">';
  html += '<div class="col s3">';
  html += '<img src="img/portraits/'+advisor.username+'.jpg" alt="" class="circle responsive-img valign">';
  html += '</div>';
  html += '<div class="col s9">';
  html += '<h5 class="no-top-margin"><strong>'+advisor.name+'</strong></h5>';
  html += '<h6 class="no-margin">'+advisor.position+'</h6>';
  html += '<a href="mailto:'+email+'" class="no-margin green-text text-darken-3">'+email+'</a>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
}

//add elected
for(var i=0; i<elected.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getOfficerCard(elected[i]);
  if( (i+1) < elected.length){
    html += getOfficerCard(elected[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#elected-container").append(html);
}

//add appointed
for(var i=0; i<appointed.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getOfficerCard(appointed[i]);
  if( (i+1) < appointed.length){
    html += getOfficerCard(appointed[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#appointed-container").append(html);
}

//add advisors
for(var i=0; i<advisors.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getAdvisorCard(advisors[i]);
  if( (i+1) < advisors.length){
    html += getAdvisorCard(advisors[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#advisors-container").append(html);
}

