/* brothers.json is read here and used to build the brothers.html page */

var data = fetch('../data/brothers.json')
.then(response => response.json())
.then(data => {

  if (data.seniors.length != 0) {
    buildSection("seniors");
    buildContainer(data.seniors, "#seniors-container");
    $("#brothers-content").append(`<li><a href="#seniors">Seniors</a></li>`);
  }

  if (data.juniors.length != 0) {
    buildSection("juniors");
    buildContainer(data.juniors, "#juniors-container");
    $("#brothers-content").append(`<li><a href="#juniors">Juniors</a></li>`);
  }

  if (data.sophomores.length != 0) {
    buildSection("sophomores");
    buildContainer(data.sophomores, "#sophomores-container");
    $("#brothers-content").append(`<li><a href="#sophomores">Sophomores</a></li>`);
  }
  
  if (data.freshman.length != 0) {
    buildSection("freshman");
    buildContainer(data.freshman, "#freshman-container");
    $("#brothers-content").append(`<li><a href="#freshman">Freshman</a></li>`);
  }

});

function getBrotherCard(brother){
  var email = brother.username + '@rose-hulman.edu';
  return `
    <div class="col l6">
      <div class="card-panel z-depth-1">
        <div class="row valign-wrapper no-margin">
          <div class="col s3">
            <img id="${brother.username}" src="img/portraits/${brother.username}.jpg" alt="" class="circle responsive-img valign">
          </div>
          <div class="col s9">
            <h5 class="no-top-margin"><strong>${brother.name}</strong></h5>
            <h6 class="no-margin">${brother.hometown}</h6>
            <h6>${brother.major}</h6>
            <a href="mailto:${email}" class="no-margin green-text text-darken-3">${email}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// For 1 brother card
function buildContainer(brotherList, selector){
  var html = "";
  for(var i = 0; i < brotherList.length; i += 2){
    html += '<div class="row content no-margin">';
    html += getBrotherCard(brotherList[i]);
    if( (i+1) < brotherList.length)
      html += getBrotherCard(brotherList[i+1]);
    html += '</div>';
    html += '</div>';
  }
  $(selector).append(html); //Only access dom once per container
}

// For a whole grade, with lil parallax container below
function buildSection(section) {
  var html = `
  <div id="${section}" class="section white scrollspy">
    <div class="row container">
      <h2 class="header">${capitalizeFirstLetter(section)}</h2>
      <div id="${section}-container">
      </div>
    </div>
  </div>
  <div class="parallax-container-mobile">
    <div class="parallax-mobile"><img src="img/brothers/porch-pic-19.jpg"></div>
  </div>
  `;
  $("#grades").append(html);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Tenn ball
//$("#barrnp").hover( () => $("#barrnp").attr("src","img/portraits/BarrTennisBall.jpg"), () => $("#barrnp").attr("src","img/portraits/barrnp.jpg"));
