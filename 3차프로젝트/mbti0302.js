




var num1 = 1;
var q = {
    1: { "title1": "Question.1 <br><br> 많은 사람들과 시간을 보낸 후에 에너지가 넘친다고 느낍니다.", "typeone": "EI", "A1": "그렇습니다", "B1": "아닙니다" },
    2: { "title1": "Question.2 <br><br> 정장을 요하거나 역할극 활동을 수반하는 사교 모임에 가는 것을 즐깁니다.", "typeone": "EI", "A1": "그렇습니다", "B1": "아닙니다" },
    3: { "title1": "Question.3 <br><br> 대게 의욕적이고 활동적입니다.<br><br>", "typeone": "EI", "A1": "그렇습니다", "B1": "아닙니다" },
    4: { "title1": "Question.4 <br><br> 종종 사회적 상황에서 주도적으로 행동합니다.", "typeone": "EI", "A1": "그렇습니다", "B1": "아닙니다" },
    5: { "title1": "Question.5 <br><br> 금방 새로운 직장 사람들과 어울리기 시작합니다.", "typeone": "EI", "A1": "그렇습니다", "B1": "아닙니다" }

}
var result1 = {
    "E": { "PR_type1": "E", "explain1": "'소금형,청렴결백한 논리주의자' 논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.", "img": "/images/mbti/1_ISTJ.png" },
    "I": { "PR_type1": "I", "explain1": "'권력자형,용감한 수호자' 수호자형 사람은 꽤 독특한 특징을 가지고 있는데, 이 유형에 속하는 사람은 이들을 정의하는 성격 특성에 꼭 들어맞지 않는다는 점입니다. 타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 합니다. 조용하고 내성적인 반면 관계술에 뛰어나 인간관계를 잘 만들어갑니다. 안정적인 삶을 지향하지만 이들이 이해받고 존경받는다고 생각되는 한에서는 변화를 잘 수용합니다. 이처럼 수호자형 사람은 한마디로 정의 내리기 힘든 다양한 성향을 내포하고 있는데, 이는 오히려 그들의 장점을 승화시켜 그들 자신을 더욱 돋보이게 합니다.", "img": "/images//mbti/2_ISFJ.png" }

}







$(".A1").click(function () {
    var type1 = $(".typeone").val();
    var preValue1 = $("." + type1).val();
    $("." + type1).val(parseInt(preValue1) + 1);
    next1();
});
$(".B1").click(function () {
    next1();
});
$(".back1").click(function () {
    back1();
});

function next1() {
    if (num1 == 6) {
        $(".question1").hide();
        $(".result1").show();
        $(".A1").hide();
    $(".B1").hide();    
        var mbti1 = "";
        ($(".EI").val() < 3) ? mbti1 += "I" : mbti1 += "E";

        
       
      
        $(".ttest1").html(result1[mbti1]["PR_type1"]);
        $(".explain1").html(result1[mbti1]["explain1"]);
        
    } else {
       
        $(".title1").html(q[num1]["title1"]);
        $(".typeone").val(q[num1]["typeone"]);
        $(".A1").html(q[num1]["A1"]);
        $(".B1").html(q[num1]["B1"]);


        num1++;


    }
    
}

 
function back1(){
    $(".typeone").val(q[num1]["typeone"]);
    num1--;
}


/////////////2번//////////////

var num2 = 1;
var w = {
    1: {"title2": "Question.6 <br><br>언제나 항상 새로운 아이디어와 계획이 머리속에 넘쳐납니다.", "typetwo": "SN", "A2": "그렇습니다", "B2": "아닙니다"},
        2: {"title2": "Question.7 <br><br> 꿈이 현실 세계와 사건에 중점을 두는 경향이 있습니다.", "typetwo": "SN", "A2": "그렇습니다", "B2": "아닙니다"},
        3: {"title2": "Question.8 <br><br> 본인이 창의적이기보다 현실적인 사람이라고 생각합니다.", "typetwo": "SN", "A2": "그렇습니다", "B2": "아닙니다"},
        4: {"title2": "Question.9 <br><br> 다른 사람들이 본인의 행동에 영향을 주는 것을 허용하지 않습니다.", "typetwo": "SN", "A2": "그렇습니다", "B2": "아닙니다"},
        5: {"title2": "Question.10 <br><br> 공상과 아이디어 때문에 흥분하는 일은 없습니다.", "typetwo": "SN", "A2": "그렇습니다", "B2": "아닙니다"}

}
var result2 = {
    "S": { "PR_type2": "S", "explain2": "'청렴결백한 논리주의자' 논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.", "img": "/images/mbti/1_ISTJ.png" },
    "N": { "PR_type2": "N", "explain2": "'용감한 수호자' 수호자형 사람은 꽤 독특한 특징을 가지고 있는데, 이 유형에 속하는 사람은 이들을 정의하는 성격 특성에 꼭 들어맞지 않는다는 점입니다. 타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 합니다. 조용하고 내성적인 반면 관계술에 뛰어나 인간관계를 잘 만들어갑니다. 안정적인 삶을 지향하지만 이들이 이해받고 존경받는다고 생각되는 한에서는 변화를 잘 수용합니다. 이처럼 수호자형 사람은 한마디로 정의 내리기 힘든 다양한 성향을 내포하고 있는데, 이는 오히려 그들의 장점을 승화시켜 그들 자신을 더욱 돋보이게 합니다.", "img": "/images//mbti/2_ISFJ.png" }

}






function start2() {
    $(".start2").hide();
    $(".question2").show();
    next2();
}
$(".A2").click(function () {
    var type2 = $(".typetwo").val();
    var preValue2 = $("." + type2).val();
    $("." + type2).val(parseInt(preValue2) + 1);
    next2();
});
$(".B2").click(function () {
    next2();
});
function next2() {
    if (num2 == 6) {
        $(".question2").hide();
        $(".result2").show();
        $(".A2").hide();
        $(".B2").hide();  
        var mbti2 = "";
        ($(".SN").val() < 3) ? mbti2 += "S" : mbti2 += "N";

       
       
        $(".ttest2").html(result2[mbti2]["PR_type2"]);
        $(".explain2").html(result2[mbti2]["explain2"]);
    } else {
      
        $(".title2").html(w[num2]["title2"]);
        $(".typetwo").val(w[num2]["typetwo"]);
        $(".A2").html(w[num2]["A2"]);
        $(".B2").html(w[num2]["B2"]);


        num2++;
    }
}
///////////////////////3번



var num3 = 1;
var e = {
    1: {"title3": "Question.11 <br><br><br> 논쟁에서 이기는 것이 상대방을 불쾌하지 않도록 하는 것보다 더 중요합니다.", "typethree": "TF", "A3": "그렇습니다", "B3": "아닙니다"},
    2: {"title3": "Question.12 <br><br><br> 종종 다른 사람들에게 자신을 정당화시켜야 할 것 만 같은 기분이 듭니다.", "typethree": "TF", "A3": "그렇습니다", "B3": "아닙니다"},
    3: {"title3": "Question.13 <br><br><br> 토론 시 사람들의 민감한 반응보다 보다 진실을 더 중요시해야 합니다.", "typethree": "TF", "A3": "그렇습니다", "B3": "아닙니다"},
    4: {"title3": "Question.14 <br><br> 상대방이 이메일에 재빨리 회신하지 않을 경우, 본인이 말실수를 했는지 걱정하기 시작합니다.", "typethree": "TF", "A3": "그렇습니다", "B3": "아닙니다"},
    5: {"title3": "Question.15 <br><br> 협동 작업을 수행하는 경우 협력적인 자세보다 올바르게 행동하는 것이 더욱 중요합니다.", "typethree": "TF", "A3": "그렇습니다", "B3": "아닙니다"}
}
var result3 = {
    "T": { "PR_type3": "T", "explain3": "'소금형, 청렴결백한 논리주의자' 논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.", "img": "/images/mbti/1_ISTJ.png" },
    "F": { "PR_type3": "F", "explain3": "'권력자형, 용감한 수호자' 수호자형 사람은 꽤 독특한 특징을 가지고 있는데, 이 유형에 속하는 사람은 이들을 정의하는 성격 특성에 꼭 들어맞지 않는다는 점입니다. 타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 합니다. 조용하고 내성적인 반면 관계술에 뛰어나 인간관계를 잘 만들어갑니다. 안정적인 삶을 지향하지만 이들이 이해받고 존경받는다고 생각되는 한에서는 변화를 잘 수용합니다. 이처럼 수호자형 사람은 한마디로 정의 내리기 힘든 다양한 성향을 내포하고 있는데, 이는 오히려 그들의 장점을 승화시켜 그들 자신을 더욱 돋보이게 합니다.", "img": "/images//mbti/2_ISFJ.png" }

}






function start3() {
    $(".start3").hide();
    $(".question3").show();
    next3();
}
$(".A3").click(function () {
    var type3 = $(".typethree").val();
    var preValue3 = $("." + type3).val();
    $("." + type3).val(parseInt(preValue3) + 1);
    next3();
});
$(".B3").click(function () {
    next3();
});
function next3() {
    if (num3 == 6) {
        $(".question3").hide();
        $(".result3").show();
        $(".A3").hide();
        $(".B3").hide();  
        var mbti3 = "";
        ($(".TF").val() < 3) ? mbti3 += "T" : mbti3 += "F";

       
     
        $(".ttest3").html(result3[mbti3]["PR_type3"]);
        $(".explain3").html(result3[mbti3]["explain3"]);
    } else {
    
        $(".title3").html(e[num3]["title3"]);
        $(".typethree").val(e[num3]["typethree"]);
        $(".A3").html(e[num3]["A3"]);
        $(".B3").html(e[num3]["B3"]);


        num3++;
    }
}
///////////////////////4번

var num4 = 1;
var r = {
    1: {"title4": "Question.16 <br><br> 이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없습니다.", "typefour": "JP", "A4": "그렇습니다", "B4": "아닙니다"},
    2: {"title4": "Question.17 <br><br> 적응을 잘 하는 것 보다 체계적인 것이 더 중요합니다.", "typefour": "JP", "A4": "그렇습니다", "B4": "아닙니다"},
    3: {"title4": "Question.18 <br><br> 집과 업무 환경이 잘 정돈되어 있습니다.", "typefour": "JP", "A4": "그렇습니다", "B4": "아닙니다"},
    4: {"title4": "Question.19 <br><br> 보통 여행 계획은 철저하게 세우는 편입니다.", "typefour": "JP", "A4": "그렇습니다", "B4": "아닙니다"},
    5: {"title4": "Question.20 <br><br> 계획의 수립과 이행은 모든 프로젝트에서 가장 중요한 부분입니다.", "typefour": "JP", "A4": "그렇습니다", "B4": "아닙니다"}
}
var result4 = {
    "J": { "PR_type4": "J", "explain4": "'청렴결백한 논리주의자' 논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.", "img": "/images/mbti/1_ISTJ.png" },
    "P": { "PR_type4": "P", "explain4": "'용감한 수호자' 수호자형 사람은 꽤 독특한 특징을 가지고 있는데, 이 유형에 속하는 사람은 이들을 정의하는 성격 특성에 꼭 들어맞지 않는다는 점입니다. 타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 합니다. 조용하고 내성적인 반면 관계술에 뛰어나 인간관계를 잘 만들어갑니다. 안정적인 삶을 지향하지만 이들이 이해받고 존경받는다고 생각되는 한에서는 변화를 잘 수용합니다. 이처럼 수호자형 사람은 한마디로 정의 내리기 힘든 다양한 성향을 내포하고 있는데, 이는 오히려 그들의 장점을 승화시켜 그들 자신을 더욱 돋보이게 합니다.", "img": "/images//mbti/2_ISFJ.png" }

}






function start4() {
    $(".start4").hide();
    $(".question4").show();
    next4();
}
$(".A4").click(function () {
    var type4 = $(".typefour").val();
    var preValue4 = $("." + type4).val();
    $("." + type4).val(parseInt(preValue4) + 1);
    next4();
});
$(".B4").click(function () {
    next4();
});
function next4() {
    if (num4 == 6) {
        $(".question4").hide();
        $(".result4").show();
        $(".A4").hide();
        $(".B4").hide();  
        var mbti4 = "";
        ($(".JP").val() < 3) ? mbti4 += "J" : mbti4 += "P";

       
        
     
        $(".ttest4").html(result4[mbti4]["PR_type4"]);
        $(".explain4").html(result4[mbti4]["explain4"]);
    } else {
    
        $(".title4").html(r[num4]["title4"]);
        $(".typefour").val(r[num4]["typefour"]);
        $(".A4").html(r[num4]["A4"]);
        $(".B4").html(r[num4]["B4"]);


        num4++;
    }
}

    document.getElementById("mon").innerHTML="PR_type1"+"PR_type2"+"PR_type3"+"PR_type4"


