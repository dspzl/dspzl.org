var elected = [
  { position:'President', name:'Philip James Bissmeyer', username:"bissempj" },
  { position:'Vice-President', name:'Joshua Dean Reitz', username:"reitzjd" },
  { position:'Engineered Leadership Director', name:'Daniel Thomas Connolly', username:"connoldt" },
  { position:'Treasurer', name:'Thomas Michael Gallery', username:"gallertm" },
  { position:'Steward', name:'James Micah Fletcher', username:"fletchjm" },
  { position:'House Manager', name:'Zachary Eberhardt Zdanavicius', username:"zdanavz" },
  { position:'Secretary', name:'Luke Giusep Evard', username:"evardl" },
  { position:'Sergeant-at-Arms', name:'Joseph Anthony Holtz', username:"holtzja" },
  { position:'Rush Director', name:'Stephen Adam Jones', username:"jonessa1" },
  { position:'Rush Director', name:'Nolan Christopher Hughes', username:"hughesnc"},
  { position:'Social Director', name:'Jason Franklin Danford', username:"danforjf" },
  { position:'Bid Selection Committee Chairman', name:'Robert Dilbert DeBerry', username:"deberrr" },
  { position:'New Member Educator', name:'James Ferguson Usher', username:"usherj" }
];

var appointed = [
  { position:'Activities Director', name:'Carson James Meyer', username:"meyerc1" },
  { position:'Athletics Director', name:'Alexander Joseph Deptula', username:"deptulaj" },
  { position:'Interfraternity Council Representative', name:'Philip James Bissmeyer', username:"bissmepj" },
  { position:'Interfraternity Council Representative', name:'Nicholas Paul Barr', username:"barrnp" },
  { position:'Public Relations Director', name:'Nathaniel Chapman Huey', username:"hueync" },
  { position:'Philanthropy Director', name:'Cole Alexander Hanson', username:"hansonca"},
  { position:'Alumni Director', name:'John Michael Quinslisk Van Treeck', username:"vantrejm" },
  { position:'Chaplain', name:'Joseph Anthony Holtz', username:"holtzja" },
  { position:'Editor', name:'Jake Brandt Powell', username:"powelljb" },
  { position:'Historian', name:'Philip James Bissmeyer', username:"bissmepj" },
  { position:'Technology Director', name:'William Walton York', username:"yorkww" },
  { position:'Webmaster', name:'Bryce Allen Nesius', username:"nesiusba" },
  { position:'Student Government Association Representative', name:'William Joseph McEvoy', username:"mcevoywj" },
  { position:'Song Leader', name:'Mitchell Owen Lugsch', username:"lugschmo" }
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
