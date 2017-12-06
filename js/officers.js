var elected = [
  { position:'President', name:'Wesley Donald Umbower', username:"umbowewd" },
  { position:'Vice-President', name:'Turner Paul Tarrillion', username:"tarriltp" },
  { position:'Engineered Leadership Director', name:'William Walton York', username:"yorkww" },
  { position:'Treasurer', name:'Kevin Thomas Wuest', username:"wuestkt" },
  { position:'Steward', name:'Zachary Eberhardt Zdanavicius', username:"zdanavz" },
  { position:'House Manager', name:'Matthew Leland Dale', username:"daleml" },
  { position:'Secretary', name:'John Michael Quinslisk Van Treeck', username:"vantrejm" },
  { position:'Sergeant-at-Arms', name:'Corey A Bochat', username:"bochatca" },
  { position:'Rush Director', name:'Jonathan Thomas Moore', username:"moorejt2" },
  { position:'Rush Director', name:'Joseph Anthony Holtz', username:"holtzja"},
  { position:'Social Director', name:'Jack William Richard', username:"richarjw" },
  { position:'Bid Selection Committee Chairman', name:'Robert Taylor Means', username:"meansrt" },
  { position:'New Member Educator', name:'Austin Salisbury', username:"salisbaj" }
];

var appointed = [
  { position:'Activities Director', name:'Daniel Thomas Connolly', username:"connoldt" },
  { position:'Athletics Director', name:'Luke Giusep Evard', username:"evardl" },
  { position:'Interfraternity Council Representative', name:'Thomas Michael Gallery', username:"gallertm" },
  { position:'Interfraternity Council Representative', name:'Nolan Christopher Hughes', username:"hughesnc" },
  { position:'Public Relations Director', name:'Bradley Chase Mobley', username:"mobleybc" },
  { position:'Philanthropy Director', name:'Thomas Michael Gallery', username:"gallertm"},
  { position:'Alumni Director', name:'John Michael Quinslisk Van Treeck', username:"vantrejm" },
  { position:'Chaplain', name:'William Joseph McEvoy', username:"mcevoywj" },
  { position:'Editor', name:'Jarrett Scott Alexander', username:"alexanjs" },
  { position:'Historian', name:'Bradley Michael Pender', username:"penderbm" },
  { position:'Technology Director', name:'Jordan Atchinson Knupp', username:"knuppja" },
  { position:'Webmaster', name:'William Walton York', username:"yorkww" },
  { position:'Student Government Association Representative', name:'Bradley Chase Mobley', username:"mobleybc" },
  { position:'Song Leader', name:'Jacob Donald Beckman', username:"beckmaj1" }
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
