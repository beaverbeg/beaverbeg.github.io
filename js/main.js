var mydata = JSON.parse(data);
console.log("page is loaded");

var currentLink =        mydata.main[0].link;
var currentFartbinLink = mydata.fartbin[0].link;
var currentWebpassLink = mydata.pass[0].link;
var currentCubeLink =    mydata.cube[0].link;
var currentCodesLink =   mydata.codes[0].link;

var currentFartbinDesc = mydata.fartbin[1].desc;
var currentWebpassDesc = mydata.pass[1].desc;
var currentCubeDesc =    mydata.cube[1].desc;
document.getElementById("fartbin-desc").innerHTML = "- "+currentFartbinDesc;
document.getElementById("cube-desc").innerHTML =    "- "+currentCubeDesc;
document.getElementById("pass-desc").innerHTML =    "- "+currentWebpassDesc;


function addCurrentLink(link, id){
    var linkToAdd;
    if(link=="beaverbeg"){
        linkToAdd = currentLink;
    }
    if(link=="fartbin"){
        linkToAdd = currentFartbinLink;
    }
    if(link=="webpass"){
        linkToAdd = currentWebpassLink;
    }
    if(link=="cube"){
        linkToAdd = currentCubeLink;
    }
    if(link=="codes"){
        linkToAdd = currentCodesLink;
    }

    document.getElementById(id).href = linkToAdd;
}

function NewTab(link){
    window.open(link+'','_blank')
}
function ThisTab(link){
    window.open(link+'', '_self')
}