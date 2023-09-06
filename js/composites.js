var currentYear = 2023;
var foundingYear = 1981;
var foundingDecade = 1980;
var currentDecade = 2020;
var test1 = 2022;
var test2 = 2023

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

function buildModal(year) {
    var html = "";
    html += `  
    <div id=${year}_modal class="modal">
    
    <span class="close" onclick="closeModal('${year}_modal')">&times;</span>
    
    <img class="modal-content" id="${year}_img">
    
    </div>`
    $("#modal_container").append(html);
}

function buildContainer(decade) {
    var html = "";
    html += `<div id="test_row">`
    var nextDecade = decade + 9;
    if (decade < foundingYear){
        decade = foundingYear;
    }
    if (nextDecade > currentYear){
        nextDecade = currentYear - 1
    }
    for (var i = decade; i < nextDecade+1; i++){
    // for (var i = nextDecade; i > decade-1; i--){
        var next = i+1;
        html += `
        <div class="col_comp">
            <img id="${i}-${next}" class="composite" src="img/composites/${i}-${next}.jpg" onclick="openModal('${i}_modal', '${i}-${next}', '${i}_img')" alt="${i}-${next}" >
            <p class="year_text">${i} - ${next}</p>
        </div>
        `
        buildModal(i, next);
    }
    html += `</div>`
    return html;
}

function buildSection(decade) {
    var nextDecade = decade + 9;
    var html = "";
    var container = buildContainer(decade);
    if (decade < foundingYear){
        decade = foundingYear;
    }
    if (nextDecade > currentYear){
        nextDecade = currentYear
    }
    html += `
        <div id="${decade}">
            <h1 class="composite_head">${decade}-${nextDecade}</h2>
            <div id="${decade}-container">
    `;
    html += container
    html += ` </div>
    </div>`
    $("#composite_container").append(html);
}

function buildPage() {
    var year = foundingDecade;
    for (var i = currentDecade; i > (foundingDecade)-10; i -= 10) {
        buildSection(i)
    }
}

buildPage();


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
