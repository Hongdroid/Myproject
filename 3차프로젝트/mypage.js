document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;

  // If the parent has .skewed class, set the skewHack var.
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});
//햄버거 메뉴
const toggleBtn = document.querySelector('.navbar_toggleBtn'); 
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 

//화살표 누르면 텍스트
var bDisplay = true;

function dodisplay1(){
  var con = document.getElementById("text1");
  var dl = document.getElementById("delete1")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay2(){
  var con = document.getElementById("text2");
  var dl = document.getElementById("delete2")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay3(){
  var con = document.getElementById("text3");
  var dl = document.getElementById("delete3")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay4(){
  var con = document.getElementById("text4");
  var dl = document.getElementById("delete4")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay5(){
  var con = document.getElementById("text5");
  var dl = document.getElementById("delete5")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay6(){
  var con = document.getElementById("text6");
  var dl = document.getElementById("delete6")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay7(){
  var con = document.getElementById("text7");
  var dl = document.getElementById("delete7")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay8(){
  var con = document.getElementById("text8");
  var dl = document.getElementById("delete8")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay9(){
  var con = document.getElementById("text9");
  var dl = document.getElementById("delete9")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay10(){
  var con = document.getElementById("text10");
  var dl = document.getElementById("delete10")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  
var bDisplay = true;
function dodisplay11(){
  var con = document.getElementById("text11");
  var dl = document.getElementById("delete11")
    if(con.style.display=='block'){
    
    con.style.display='none';
  }else{
    
    con.style.display='block';
  }     
  if(dl.style.display=='block')  {
    dl.style.display='none';
  } else{
    dl.style.display='block';
  }
}  

function setThumbnail(event) { 
  var reader = new FileReader(); 
  reader.onload = function(event) { 
      var img = document.createElement("img"); 
      img.setAttribute("src", event.target.result); 
      document.querySelector("div#img_container").appendChild(img); 
  }; 
      reader.readAsDataURL(event.target.files[0]); 
  }
