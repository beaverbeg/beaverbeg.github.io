var currentLink = "https://beaverbeg.xyz/";
var currentFartbinLink = "https://fartbin.cf/";
var currentWebpassLink = "https://pass.beaverbeg.xyz";
var currentCubeLink = "https://cube.beaverbeg.xyz";
var currentCodesLink = "https://codes.beaverbeg.xyz";

console.log("page is loaded");

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