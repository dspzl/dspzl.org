var dogs = [{ name: "Piper", hometown: "Noblesville, IN", talent: "Talent: Fetching", owner: "Brother Jack Cook", username: "piper" },
            { name: "Leo", hometown: "St. Louis, MO", talent: "Talent: Sleeping", owner: "Brother Carson Meyer", username: "leo"},
            { name: "Mabel", hometown: "Fishers, IN", talent: "Talent: Guarding", owner: "Brother Nicholas Barr", username: "mabel"},
            { name: "Sox", hometown: "Robinson, IL", talent: "Talent: Parenting", owner: "Brother Jake Powell", username: "sox"}
];

function getDogsCard(dog){
  var html = '<div class="col l6">';
  html += '<div class="card-panel z-depth-1">';
  html += '<div class="row valign-wrapper no-margin">';
  html += '<div class="col s3">';
  html += '<img id="' + dog.username + '" src="img/dogs/'+dog.username+'.jpg" alt="" class="circle responsive-img valign">';
  html += '</div>';
  html += '<div class="col s9">';
  html += '<h5 class="no-top-margin"><strong>'+dog.name+'</strong></h5>';
  html += '<h6 class="no-margin">'+dog.hometown+'</h6>';
  html += '<h6>'+dog.talent+'</h6>';
  html += '<h6>'+dog.owner+'</h6>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
}


//add dogs
for(var i=0; i<dogs.length; i+=2){
  var html = '<div class="row content no-margin">';
  html += getDogsCard(dogs[i]);
  if( (i+1) < dogs.length){
    html += getDogsCard(dogs[i+1]);
  }
  html += '</div>';
  html += '</div>';
  $("#dogs-container").append(html);
}
