// $(function() {

    $("#signupButton").on("click", function(){
        console.log($("#userId").val());
        console.log($("#userPw").val());
        console.log($("#userName").val());
        console.log($("#idChk").val());
        if($("#userId").val()=="" || $("#userId").val()==null){
            alert("아이디를 입력해주세요.");
            $("#userId").focus();
            return false;
        }
        if($("#userPw").val()==""|| $("#userPw").val()==null){
            alert("비밀번호를 입력해주세요.");
            $("#userPass").focus();
            return false;
        }
        if($("#userName").val()==""|| $("#userName").val()==null){
            alert("이름을 입력해주세요.");
            $("#userName").focus();
            return false;
        }
        let idChkVal = $("#idChk").val();
        if(idChkVal === "N"){
            alert("중복확인 버튼을 눌러주세요.");
            return false;
        }else if(idChkVal === "Y"){
            $("#signupForm").submit();
        }
    });

    $("#idChk").on("click", function () {
        console.log("test");
        $.ajax({
            type : "post",
            dataType : "json",
            url : "/idChk",
            data : {"userId" : $("#userId").val()},
            success : function(data){
                if(data === 1){
                    alert("중복된 아이디입니다.");
                }else if(data === 0){
                    if($("#userId").val() === "") {
                        alert("아이디를 입력해주세요.")
                    } else {
                        $("#idChk").attr("value", "Y");
                        alert("사용가능한 아이디입니다.");
                    }
                }
            }
        })
    });
// });