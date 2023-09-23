var d = data;

var mydata = JSON.parse(d);

var cLink =        mydata.main[0].link;
var cFartbinLink =   mydata.fartbin[0].link;
var cWebpassLink =   mydata.pass[0].link;
var cCubeLink =      mydata.cube[0].link;
var cTheboxLink =    mydata.tb[0].link;
var cRockpaperLink = mydata.rps[0].link;
var cSomegameLink = mydata.somegame[0].link;

var cFartbinDesc =   mydata.fartbin[1].desc;
var cWebpassDesc =   mydata.pass[1].desc;
var cCubeDesc =      mydata.cube[1].desc;
var cTheboxDesc =    mydata.tb[1].desc;
var cRockpaperDesc = mydata.rps[1].desc;
var cSomegameDesc = mydata.somegame[1].desc;

try{
    document.getElementById("fartbin-desc").innerHTML = "- "+cFartbinDesc;
    document.getElementById("pass-desc").innerHTML =    "- "+cWebpassDesc;
    document.getElementById("cube-desc").innerHTML =    "- "+cCubeDesc;
    document.getElementById("tb-desc").innerHTML =      "- "+cTheboxDesc;
    document.getElementById("rps-desc").innerHTML =     "- "+cRockpaperDesc;
    document.getElementById("somegame-desc").innerHTML =     "- "+cSomegameDesc;
}
catch(err){
    console.log("could not add description to projects\n");
}


function addCurrentLink(link, id){
    var linkToAdd;
    if(link=="beaverbeg"){
        linkToAdd = cLink;
    }
    if(link=="fartbin"){
        linkToAdd = cFartbinLink;
    }
    if(link=="webpass"){
        linkToAdd = cWebpassLink;
    }
    if(link=="cube"){
        linkToAdd = cCubeLink;
    }
    if(link=="tb"){
        linkToAdd = cTheboxLink;
    }
    if(link=="rps"){
        linkToAdd = cRockpaperLink;
    }
    if(link=="somegame"){
        linkToAdd = cSomegameLink;
    }

    document.getElementById(id).href = linkToAdd;
}


function NewTab(link){
    window.open(link+'','_blank')
}
function ThisTab(link){
    window.open(link+'', '_self')
}
