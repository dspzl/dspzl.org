var seniors = [
    { name: "Evan Thomas Baker", hometown: "Springville, IN", major: "Mechanical Engineering", username: "bakeret"},
    // { name: "Nicholas Paul Barr", hometown: "Fishers, IN", major: "Mechanical Engineering", username: "barrnp" },
    { name: "Calen Michael Cook", hometown: "Brazil, IN", major: "Chemical Engineering", username: "cookc4" },
    { name: "Lucas Alberto D'Alesio", hometown: "Park Ridge, IL", major: "Computer Engineering", username: "dalesil" },
    // { name: "Songwei Fan", hometown: "Shenzhen, China", major: "Mechanical Engineering", username: "fans" },
    { name: "Bryce Benjamin Hatfield", hometown: "Saint John, IN", major: "Chemical Engineering", username: "hatfiebb" },
    { name: "Nasser Nadim Hegar", hometown: "Noblesville, IN", major: "Computer Engineering", username: "hegarnn" },
    { name: "Brian Michael Huyge", hometown: "Marshall, MI", major: "Chemical Engineering", username: "huygebm" },
    { name: "Michael James Johnson", hometown: "Gothenburg, Sweden", major: "Mechanical Engineering", username: "johnsom4" },
    // { name: "Carson James Meyer", hometown: "St. Louis, MO", major: "Computer Engineering", username: "meyerc1" },
    { name: "Aidan Cory Moss", hometown: "Broomfield, CO", major: "Computer Engineering", username: "mossac" },
    { name: "Haiden Michael Smith", hometown: "Manhattan, IL", major: "Electrical Engineering", username: "smithhm" },
    { name: "Jacob Dietrich Tebbe", hometown: "Lebanon, OH", major: "Electrical Engineering", username: "tebbejd" },
    { name: "Tyler Joe Thenell", hometown: "West Milford, NJ", major: "Computer Engineering", username: "theneltj" },
    { name: "Geoffrey Barton Tomlinson", hometown: "Houston, TX", major: "Computer Engineering", username: "tomlingb" },
    { name: "Robert Dilbert DeBerry", hometown: "Farm, IN", major: "Mechanical Engineering", username: "deberrr"},
    { name: "William Woke McEvoy", hometown: "Chicago, IL", major: "Computer Science", username: "mcevoywj"},
    { name: "Joshua DoggyDog Warning", hometown: "Noblesville, IN", major: "Software Engineering", username: "warninjd"},
    { name: "Griffin John Altmix", hometown: "Cincinnati, OH", major: "Mechanical Engineering", username: "altmixgj"},
    { name: "Mark Andrew Gearhart Jr.", hometown: "Hobart, IN", major: "Chemical Engineering", username: "gearhama"},
  ];

var juniors = [
    {name: "Vance Joseph Allen", hometown: "San Diego, CA", major: "Mechanical Engineering", username: "allenvj"},
    {name: "William Bartlett Bowman", hometown: "Germantown, OH", major: "Mathematics", username: "bowmanwb"},
    {name: "Sang Heon Choi", hometown: "Sungnam, South Korea", major: "Computer Science", username: "chois3"},
    {name: "John 'Yoon Su' Chung", hometown: "Santa Clara, CA", major: "Engineering Design", username: "chungy"},
    {name: "Brendon Michael Crabtree", hometown: "Indianapolis, IN", major: "Mechanical Engineering", username: "crabtrbm"},
    {name: "Ethan Benjamin Drong", hometown: "Lockport, IL", major: "Mechanical Engineering", username: "drongeb"},
    {name: "Jameson Michael Jochheim", hometown: "Round Lake, IL", major: "Mechanical Engineering", username: "jochhejm"},
    {name: "Samuel Edward Johnson", hometown: "Oldenburg, IN", major: "Mechanical Engineering", username:"johnsose"},
    {name: "Joshua Steven Mitterling", hometown: "Noblesville, IN", major: "Computer Engineering", username: "mitterj"},
    {name: "Aidan Drew Morris", hometown: "Richmond, IN", major: "Chemical Engineering", username: "morrisad"},
    {name: "Collin Mao Morris", hometown: "Shanghai, China", major: "Computer Science", username: "morrisc1"},
    {name: "David Jason Purdy", hometown: "Franklin, IN", major: "Computer Science", username: "purdydj"},
    {name: "Carl Frederick Quist", hometown: "Marshall, MI", major: "Mechanical Engineering", username: "quistcf"},
    {name: "Jack Phillip Raker", hometown: "Palatine, IL", major: "Chemical Engineering", username: "rakerjp"},
    {name: "Mason Darrell Reid", hometown: "Glasgow, KY", major: "Biology", username: "reidmd"},
    {name: "Luke Abraham Wendel", hometown: "Noblesville, IN", major: "Computer Engineering", username:"wendella"},
    {name: "Ethan Douglas Whetter", hometown: "Santa Barbara, CA", major: "Biomedical Engineering", username: "whetteed"}
];

var sophomores = [
  {name: "Richard Wayne Barker III", hometown: "Columbia, IL", major: "Engineering Design", username: "barkerrw"},
  {name: "Aidan Jeffery Sturgeon", hometown: "West Lafayette, IN", major: "Mechanical Engineering", username: "sturgeaj"},
  {name: "Mason Steven Wykes", hometown: "Greenville, OH", major: "Mechanical Engineering", username: "wykesms"},
];

var freshman = [
  { name: "Ziyu 'Leonardo' Xie", hometown: "Chengdu City, China", major: "Computer Engineering", username: "xiez6"},
  { name: "Ian 'Earl' Christopher Resnik", hometown: "Pittsburgh, PA", major: "Mechanical Engineering", username: "resnikic"},
  { name: "Nikita Romanovich Egorov", hometown: "Fishers, IN", major: "Electrical Engineering", username: "egorovn"},
  { name: "Joshua Quinn Shrock", hometown: "Goshen, IN", major: "Computer Engineering", username: "shrocjq"},
  { name: "Aidan Donald Janc", hometown: "Chicago, IL", major: "Computer Science", username: "jancad"},
  { name: "Ian Henry Stedham", hometown: "Columbia, MD", major: "Computer Science", username: "stedhai"},
  { name: "Adam Steven Deckard", hometown: "Nashville, TN", major: "Mechanical Engineering", username: "deckaras"},
  { name: "Nathan Rupert Pratt", hometown: "Hopewell, NJ", major: "Eng. Physics", username: "prattnr"},
  { name: "Zachary ZheYing Cao", hometown: "Louisville, KY", major: "Computer Science", username: "caozz"},
  { name: "Andrew Dietrich Nichols", hometown: "Houston, TX", major: "Mechanical Engineering", username: "nicolad"},
  { name: "Apollo Jackson Picot", hometown: "Rockton, IL", major: "Mechanical Engineering", username: "picotaj"},
  { name: "Damian Ivan Dalic", hometown: "Chicago, IL", major: "Computer Science", username: "dalicdi"},
  { name: "Matthew Li Hart", hometown: "Clarksville, MD", major: "Electrical Engineering", username: "hartml"},
  { name: "Drew Ryan Kilner", hometown: "Louisville, KY", major: "Computer Engineering", username: "kilnerdr"},


];

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

buildContainer(seniors, "#seniors-container");

buildContainer(juniors, "#juniors-container");

buildContainer(sophomores, "#sophomores-container");

buildContainer(freshman, "#freshman-container");

// Tenn ball
$("#barrnp").hover( () => $("#barrnp").attr("src","img/portraits/BarrTennisBall.jpg"), () => $("#barrnp").attr("src","img/portraits/barrnp.jpg"));