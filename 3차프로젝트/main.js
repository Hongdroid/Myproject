

//햄버거 메뉴
const toggleBtn = document.querySelector('.navbar_toggleBtn'); 
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 

// 슬라이드
var slideWrapper = document.querySelector('.container');
        var slides = document.querySelectorAll('.item');
        var totalSlides = slides.length; // item의 갯수
        
        
        var sliderWidth = slideWrapper.clientWidth; // container의 width
        var slideIndex = 0;
        var slider = document.querySelector('.slider');
        
        slider.style.width = sliderWidth * totalSlides + 'px';
        
        showSlides()
        
        function showSlides() {
            for(var i=0;i<slides.length;i++){
                slider.style.left = -(sliderWidth * slideIndex) + 'px';    
            }
            slideIndex++;
            if (slideIndex === totalSlides) {
                slideIndex = 0;
            }
            setTimeout(showSlides, 2000); 
        }

        
        window.onload = function () {

            function onClick() {
                document.querySelector('.modal_wrap').style.display = 'block';
                document.querySelector('.black_bg').style.display = 'block';
            }
            function offClick() {
                document.querySelector('.modal_wrap').style.display = 'none';
                document.querySelector('.black_bg').style.display = 'none';
            }

            document.getElementById('modal_btn').addEventListener('click', onClick);
            document.querySelector('.modal_close').addEventListener('click', offClick);

        };

        let id = $('#id');
let pw = $('#pw');
let login_btn = $('#login_btn');

$(login_btn).on('click', function() {
    if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning'); 
        }, 1500);
    } else if ($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        }, 1500);
    }
});

function setThumbnail(event) { 
    var reader = new FileReader(); 
    reader.onload = function(event) { 
        var img = document.createElement("img"); 
        img.setAttribute("src", event.target.result); 
        document.querySelector("div#img_container").appendChild(img); 
    }; 
        reader.readAsDataURL(event.target.files[0]); 
    }
