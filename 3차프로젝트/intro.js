//햄버거 메뉴
const toggleBtn = document.querySelector('.navbar_toggleBtn'); 
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 


// 바로가기 메뉴 
function div_show(){
    document.getElementById("typeli").style.display="block"
 }
 function div_hide(){
    document.getElementById("typeli").style.display="none"
 }

 // 바로가기 메뉴 네비게이션
var stmnLEFT = 10; 
var stmnGAP1 = 0; 
var stmnGAP2 = 530; 
var stmnBASE = 150;  
var stmnActivateSpeed = 20; 
var stmnScrollSpeed = 10; 
var stmnTimer; 

function RefreshStaticMenu() { 
 var stmnStartPoint, stmnEndPoint; 
 stmnStartPoint = parseInt(document.getElementById('STATICMENU').style.top, 10); 
 stmnEndPoint = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + stmnGAP2; 
 if (stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1; 
 if (stmnStartPoint != stmnEndPoint) { 
  stmnScrollAmount = Math.ceil( Math.abs( stmnEndPoint - stmnStartPoint ) / 15 ); 
  document.getElementById('STATICMENU').style.top = parseInt(document.getElementById('STATICMENU').style.top, 10) + ( ( stmnEndPoint<stmnStartPoint ) ? -stmnScrollAmount : stmnScrollAmount ) + 'px'; 
  stmnRefreshTimer = stmnScrollSpeed; 
  }
 stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed); 
 } 
function InitializeStaticMenu() {
 document.getElementById('STATICMENU').style.right = stmnLEFT + 'px';  //처음에 오른쪽에 위치. left로 바꿔도.
 document.getElementById('STATICMENU').style.top = document.body.scrollTop + stmnBASE + 'px'; 
 RefreshStaticMenu();
 }