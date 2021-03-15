let id = $('#id');
let pw = $('#pw');
let login_btn = $('#login_btn');

$(login_btn).on('click', function() {
    if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning'); /*경고 후 원상복귀*/ 
        }, 1500);
    } else if ($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        }, 1500);
    }
});