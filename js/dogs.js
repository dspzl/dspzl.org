var dogs = [{ name: "Piper", hometown: "Noblesville, IN", talent: "Talent: Fetching", owner: "Brother Jack Cook", username: "piper" },
            { name: "Leo", hometown: "St. Louis, MO", talent: "Talent: Sleeping", owner: "Brother Carson Meyer", username: "leo"},
            { name: "Mabel", hometown: "Fishers, IN", talent: "Talent: Guarding", owner: "Brother Nicholas Barr", username: "mabel"},
            { name: "Sox", hometown: "Robinson, IL", talent: "Talent: Parenting", owner: "Brother Jake Powell", username: "sox"}
];

function getDogsCard(dog){
  return `
    <div class="col l6">
      <div class="card-panel z-depth-1">
        <div class="row valign-wrapper no-margin">
          <div class="col s3">
            <img id="${dog.username}" src="img/dogs/${dog.username}.jpg" alt="" class="circle responsive-img valign">
          </div>
          <div class="col s9">
            <h5 class="no-top-margin"><strong>${dog.name}</strong></h5>
            <h6 class="no-margin">${dog.hometown}</h6>
            <h6>${dog.talent}</h6>
            <h6>${dog.owner}</h6>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildContainer(dogs, selector) {
  var html = '';
  for(var i=0; i < dogs.length; i+=2){
    html += '<div class="row content no-margin">';
    html += getDogsCard(dogs[i]);
    if( (i+1) < dogs.length){
      html += getDogsCard(dogs[i+1]);
    }
    html += '</div>';
    html += '</div>';
  }
  $(selector).append(html);
}

buildContainer(dogs, "#dogs-container");
