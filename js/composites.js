var currentYear = 2023;
var foundingYear = 1985;
var foundingDecade = 1980;
var currentDecade = 2020;

function getCompositeCard(year){
    return `
        <img id="myImg" src="img/composites/${year}.jpg" alt="${year}" style="width:100%;max-width:300px">

        <div id="myModal" class="modal">
        
        <span class="close">&times;</span>
        
        <img class="modal-content" id="img01">
        
        <div id="caption"></div>
        </div>
    `
}

function buildContainer(year, decade) {
    var html = "";
    html += `<div id="test_row">
    <div id="col"`
    var year = 2022;
    for (var i = 2020; i < 2022; i++){
        html += `<img id="${year}" class="composite" src="img/composites/2022-2023.jpg" onclick="openModal('current_modal', 'current', 'img01')" alt="2022-2023" >`
        buildModal(year);
    }
    html += `</div>`
    return html;
}

function buildModal(year) {
    var html = "";
    html += `  
    <div id=${year}_modal class="modal">
  
    <span class="close" onclick="closeModal('${year}_modal')">&times;</span>
  
    <img class="modal-content" id="${year}_img">
  
  </div>`
  $("#modal_container").append(html);
}

function buildSection(decade) {
    var next = decade + 9;
    var html = "";
    html += `
        <div id="${decade}">
            <h1 class="composite_head">${decade}-${next}</h2>
            <div id="${decade}-container">
    `;
    html += buildContainer()
    html += ` </div>
    </div>`
    console.log(decade);
    $("#composite_container").append(html);
}

function buildPage() {
    var year = foundingDecade;
    for (var i = 0; i < (currentDecade - foundingDecade) / 10 + 1; i++){
        buildSection(year);
        year += 10;
    }
}

//buildPage();


function openModal(id, img_id, modal_img) {
    var modal = document.getElementById(id);
    var img = document.getElementById(img_id);
    var modalImg = document.getElementById(modal_img);

    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
