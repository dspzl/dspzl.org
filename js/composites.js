var currentYear = 2023;
var foundingYear = 1981;
var foundingDecade = 1980;
var currentDecade = 2020;
var showDecade = 0;

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
    var nextDecade = decade;
    for (var i = 0; i < 9; i++){
        nextDecade++;
    }
    if (decade < foundingYear){
        decade = foundingYear;
    }
    if (nextDecade > currentYear){
        nextDecade = currentYear - 1
    }
    for (var i = decade; i < nextDecade+1; i++){
    // for (var i = nextDecade; i > decade-1; i--){
        var next = i;
        next++;
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
    var nextDecade = decade;
    for (var i = 0; i < 9; i++){
        nextDecade++;
    }
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
    // var year = foundingDecade;
    // for (var i = currentDecade; i > (foundingDecade)-10; i -= 10) {
    //     buildSection(i)
    // }
    buildSection(currentDecade);
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


// implement show more button to load more composites, hopefully will reduce load time
// probably need to add searching or something
// maybe do a scroll thing where reach end of page


function searchFunction() {
    var decade = document.getElementById("decadeText").value;
    var year = document.getElementById("yearText").value;
    $("#composites").html('<div id="composites" class="section white scrollspy"></div>        <div id="composite_container"></div>');
    $("#composites").append(`<button onclick="reset()" id="backbutt">Back</button>`);


    if (currentDecade >= decade && decade >= foundingDecade){
        buildSection(decade);
    }
    else if (currentYear >= year && year>= foundingYear){
        var next = year;
        next++;
        var html = "";
        html += `<div id="test_row">`
        html += `
        <div class="col_comp">
            <img id="${year}-${next}" class="composite" src="img/composites/${year}-${next}.jpg" onclick="openModal('${year}_modal', '${year}-${next}', '${year}_img')" alt="${year}-${next}" >
            <p class="year_text">${year} - ${next}</p>
        </div>
        `
        buildModal(year, year+1);
        
        html += `</div>`

        $("#composite_container").append(html);
    }
  }

  function loadMore(){
    showDecade++;
    var year = currentDecade - (10 * showDecade);
    console.log(year);
    if (currentDecade >= year && year >= foundingDecade){
        buildSection(year);
    }
    console.log(showDecade);
  }

  function reset(){
    $("#composites").html('<div id="composites" class="section white scrollspy"></div>');
    $("#composites").append(`<div id="current_composite_row" class="row container">
            <img id="current" class="composite" src="img/composites/2022-2023.jpg" onclick="openModal('current_modal', 'current', 'img01')" alt="2022-2023" >
        </div>
        <br>
        <br>
        <div id="searching_container">
            <!-- <div> -->
            <p>Decade: </p>
            <input type="text" id="decadeText" class="inputtext" >            
            <!-- </div>
            <div> -->
            <p>Year:</p>
            <input type="text" id="yearText" class="inputtext">            
            <!-- </div> -->
            <button onclick="searchFunction()" id="searchButt">Search</button>
        </div>

        <div id="composite_container">

        </div>
        <button onclick="loadMore()" id="loadingbutt">Load More</button>`);
  buildPage();
  showDecade = 0;
  }

