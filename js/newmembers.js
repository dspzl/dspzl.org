var newmembers=[ { name:"Michael Richard Holtz", hometown:"Elkhart, IN", major:"Optical Engineering", username:"holtzmr"},
  { name:"Alain Olivier Kouassi", hometown:"West Orange, NJ", major:"Computer Science", username:"kouassao"},
  { name:"Thomas Reid Meehan", hometown:"", major:"Mechanical Engineering", username:"meehantr"}
];

function getNewMemberCard(newmember){
    var email = newmember.username+'@rose-hulman.edu';
    var html = '<div class="col l6">';
    html += '<div class="card-panel z-depth-1">';
    html += '<div class="row valign-wrapper no-margin">';
    html += '<div class="col s3">';
    html += '<img src="img/portraits/'+newmember.username+'.jpg" alt="" class="circle responsive-img valign">';
    html += '</div>';
    html += '<div class="col s9">';
    html += '<h5 class="no-top-margin"><strong>'+newmember.name+'</strong></h5>';
    html += '<h6 class="no-margin">'+newmember.hometown+'</h6>';
    html += '<h6>'+newmember.major+'</h6>';
    html += '<a href="mailto:'+email+'" class="no-margin green-text text-darken-3">'+email+'</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

for(var i=0; i<newmembers.length; i+=2){
    var html = '<div class="row content no-margin">';
    html += getNewMemberCard(newmembers[i]);
    if( (i+1) < newmembers.length){
        html += getNewMemberCard(newmembers[i+1]);
    }
    html += '</div>';
    html += '</div>';
    $("#newmembers-container").append(html);
}
