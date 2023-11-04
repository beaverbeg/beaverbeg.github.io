var d = data;

var mydata = JSON.parse(d);

var cLink =        mydata.main[0].link;

var cFartbinLink =   mydata.fartbin[0].link;
var cWebpassLink =   mydata.pass[0].link;
var cCubeLink =      mydata.cube[0].link;
var cTheboxLink =    mydata.tb[0].link;
var cSomegameLink = mydata.somegame[0].link;

var cFartbinDesc =   mydata.fartbin[1].desc;
var cWebpassDesc =   mydata.pass[1].desc;
var cCubeDesc =      mydata.cube[1].desc;
var cTheboxDesc =    mydata.tb[1].desc;
var cSomegameDesc = mydata.somegame[1].desc;


var desname = [cFartbinDesc, cWebpassDesc, cCubeDesc, cTheboxDesc, cSomegameDesc]
var desid = ['fartbin-desc', 'pass-desc', 'cube-desc', 'tb-desc', 'somegame-desc']
for(var i = 0; i<desid.length;i++){
    try{
        document.getElementById(desid[i]).innerHTML = "- "+desname[i];
    }
    catch(err){
        console.log("could not add description to project");
    }
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
