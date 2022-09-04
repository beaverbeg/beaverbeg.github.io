var currentLink = "https://beaverbeg.xyz"

console.log("page is loaded");

function getCurrentLink(){
    return currentLink;
}
function NewTab(link){
    window.open(link+'','_blank')
}
function ThisTab(link){
    window.open(link)
}