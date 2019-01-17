var newmembers=[ { name:"Jared William Joseph Brown", hometown:"Skokie, IL", major:"Mechanical Engineering", username:"brownjw"},
  { name:"Praneet Chakraborty", hometown:"Aurora, IL", major:"Computer Science", username:"chakrap"},
  { name:"Calen Michael Cook", hometown:"Brazil, IN", major:"Chemical Engineering", username:"cookc4"},
  { name:"Lucas Alberto D'Alesio", hometown:"Park Ridge, IL", major:"Computer Engineering", username:"dalesil"},
  { name:"Songwei Fan", hometown:"Shenzhen, China", major:"Mechanical Engineering", username:"fans"},
  { name:"Thriambak Rishi Giripra", hometown:"Bloomington, IL", major:"Biomedical Engineering", username:"giriprtr"},
  { name:"Bryce Benjamin Hatfield", hometown:"Saint John, IN", major:"Chemical Engineering", username:"hatfiebb"},
  { name:"Nasser Nadim Hegar", hometown:"Noblesville, IN", major:"Computer Engineering", username:"hegarnn"},
  { name:"Brian Michael Huyge", hometown:"Marshall, MI", major:"Chemical Engineering", username:"huygebm"},
  { name:"Michael James Johnson", hometown:"Gothenburg, Sweden", major:"Mechanical Engineering", username:"johnsom4"},
  { name:"Tazwell Alexander Long", hometown:"Columbus, IN", major:"Mechanical Engineering", username:"longta"},
  { name:"Colton Tyler McKay", hometown:"Rising Sun, IN", major:"Mechanical Engineering", username:"mckayct"},
  { name:"Aidan Cory Moss", hometown:"Broomfield, CO", major:"Computer Engineering", username:"mossac"},
  { name:"Haiden Michael Smith", hometown:"Manhattan, IL", major:"Electrical Engineering", username:"smithhm"},
  { name:"Bryce Cameron Snaguski", hometown:"Rolling Hills Estates, CA", major:"Mechanical Engineering", username:"snagusbc"},
  { name:"Jacob Dietrich Tebbe", hometown:"Lebanon, OH", major:"Electrical Engineering", username:"tebbejd"},
  { name:"Tyler Joe Thenell", hometown:"West Milford, NJ", major:"Computer Engineering", username:"theneltj"}
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
