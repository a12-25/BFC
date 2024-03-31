var n = document.querySelector('nav');
var cont = n.innerHTML;
let StoreScroll = window.scrollY;
let ch = false;
let detailsElement;
let sideBarElement;
function sidenav() {
  let navr = n.getBoundingClientRect();
  let currentScrollY = window.scrollY;
  if (currentScrollY > StoreScroll) {
    if (!ch && currentScrollY > navr.bottom + 350) {
      n.innerHTML = '';
      var d = document.createElement('details');
      var sum = document.createElement('summary');
      sum.innerHTML = '';
      var list = document.createElement('div');
      n.appendChild(d);
      d.appendChild(sum);
      d.appendChild(list);
      list.innerHTML = cont;
      console.log("nav out");
      n.classList.add('sidebar');
      n.style.width = '15%';
      ch = true;
      detailsElement = document.querySelector('details');
      sidebarElement = document.querySelector('.sidebar');
      sidebarElement.classList.add('noTransition');
      function adjustSidebarWidth() {
        if (detailsElement.open) {
          sidebarElement.style.width = '15%';
          sidebarElement.classList.remove('noTransition');
          detailsElement.style.paddingLeft = '5%';
        } else {
          sidebarElement.style.width = '5%';
          detailsElement.style.paddingLeft = '25%';
        }
      }
      adjustSidebarWidth();
      detailsElement.addEventListener('toggle', adjustSidebarWidth);
    }
  } else {
    if (ch && currentScrollY < navr.bottom - 200) {
      console.log("nav in");
      n.classList.remove('sidebar');
      n.innerHTML = '';
      n.innerHTML = cont;
      n.style.width = '100%';
      detailsElement.style.paddingLeft = '25%';
      ch = false;
    }
  }
  StoreScroll = currentScrollY;
}
window.addEventListener('scroll', sidenav);
function upDate(previewPic) {
  var img = previewPic.getAttribute("src");
  document.getElementById('image').style.backgroundImage = "url('" + img + "')";

}
function unDo() {
  var image = document.getElementById('image');
  image.style.backgroundImage = "url('')";
}
window.addEventListener("load", function() {
  console.log("Page loaded.");
  let x = document.querySelectorAll(".preview")

  for (let i = 0; i < x.length; i++) {
    console.log("Image " + i);
    x[i].setAttribute("tabindex", "0");
  }
})
function eventfocus(previewPic) {
  console.log("Image focused.");
  upDate(previewPic);
}
function eventblur() {
  console.log("Image blurred.");
  unDo();
}

