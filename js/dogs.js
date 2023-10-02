var dogs = [
            { name: "Nikita Romanovich Egorov", hometown: "Fishers, IN", talent: "Talent: Anti-Brother of the week", owner: "&#916;&#931;&#934; &#918;&#923;", username: "egorovn"},
            { name: "Murphy", hometown: "Bombay, India", talent: "Talent: Snoozing", owner: "Brother Praanav Lodha", username: "murphy"},
            { name: "Dredgen", hometown: "West Lafayette, IN", talent: "Talent: Mouse Removal Specialist", owner: "Brother Aidan Sturgeon", username: "dredgen"},
            { name: "Vincent Donovan Hammer", hometown: "Noblesville, IN", talent: "Talent: Carrying Things", owner: "&#916;&#931;&#934; &#918;&#923;", username: "hammer"}
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
