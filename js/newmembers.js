var newmembers=[
  { name:"Nicholas Paul Barr", hometown:"Fishers, IN", major:"Mechanical Engineering", username:"barrnp" },
  { name:"Philip James Bissmeyer", hometown:"Cincinatti, OH", major:"Mechanical Engineering", username:"bissmepj" },
  { name:"Christopher Lee Blankenship", hometown:"Sullivan, MO", major:"Chemical Engineering", username:"blankecl" },
  { name:"Nick Charles Chappell", hometown:"Severna Park, MD", major:"Mechanical Engineering", username:"chappenc" },
  { name:"Jackson Lee Cook", hometown:"Noblesville, IN", major:"Electrical Engineering", username:"cookjl" },
  { name:"Jason Franklin Danford", hometown:"San Pierre, IN", major:"Mechanical Engineering", username:"danforjf" },
  { name:"Jacob Michael Deniston", hometown:"Springfield, VA", major:"Mechanical Engineering", username:"denistjm" },
  { name:"Zachariah Benjamin Eme", hometown:"Livermore, CA", major:"Mechanical Engineering", username:"emezb" },
  { name:"Samuel Colier Flickinger", hometown:"Decatur, IL", major:"Computer Science/Computer Engineering", username:"flickisc" },
  { name:"Paul Andrei Ghejan", hometown:"Terre Haute, IN", major:"Mechanical Engineering", username:"ghejanpa" },
  { name:"Cole Alexander Hanson", hometown:"Kokomo, IN", major:"Mechanical Engineering", username:"hansonca" },
  { name:"Nathaniel Chapman Huey", hometown:"Cocktown, PA", major:"Mechanical Engineering", username:"hueync" },
  { name:"Will Carl Kemp", hometown:"Louisville, KY", major:"Biomedical Engineering", username:"kempwc" },
  { name:"Hans William Knoepfel", hometown:"Paris, IL", major:"Civil Engineering", username:"knoepfhw" },
  { name:"Liam Clinton Libbey", hometown:"Arlington, VA", major:"Chemical Engineering", username:"libbeylc" },
  { name:"Mitchell Owen Lugsch", hometown:"Golden, CO", major:"Mechanical Engineering", username:"lugschmo" },
  { name:"Carson James Meyer", hometown:"St. Louis, MO", major:"Computer Engineering", username:"meyerc1" },
  { name:"Bryce Allen Nesius", hometown:"Rensselaer, IN", major:"Computer Engineering", username:"nesiusba" },
  { name:"Christopher Devereux Pile", hometown:"Farmington, NM", major:"Computer Science", username:"pilecd" },
  { name:"Jake Brandt Powell", hometown:"Robinson, IL", major:"Mechanical Engineering", username:"powelljb" },
  { name:"Gavin Dane Rue", hometown:"Fishers, IN", major:"Chemical Engineering", username:"ruegd" },
  { name:"Geoffrey Barton Tomlinson", hometown:"Houston, TX", major:"Computer Engineering", username:"tomlingb" },
  { name:"Joshua Daniel Warning", hometown:"Noblesville, IN", major:"Software Engineering", username:"warninjd" },
  { name:"Zehming Zhang", hometown:"Xi'an China", major:"Mechanical Engineering", username:"zhangz12" },
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
