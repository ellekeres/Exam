window.onload = init;
function init() {
  lastUpdated();
  }

function lastUpdated(){
  const d = new Date(document.lastModified);
  document.getElementById("lastupdated").innerHTML = "Last Updated: " + d.toDateString();
}