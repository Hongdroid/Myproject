var num = 1;
var q = {
    1: { "title": "Question.1 많은 사람들과 시간을 보낸 후에 에너지가 넘친다고 느낍니다.<br>", "type": "EI", "A": "그렇습니다", "B": "아닙니다"},
    2: { "title": "Question.2 정장을 요하거나 역할극 활동을 수반하는 사교 모임에 가는 것을 즐깁니다.", "type": "EI", "A": "그렇습니다", "B": "아닙니다"},
    3: { "title": "Question.3 대게 의욕적이고 활동적입니다.<br><br>", "type": "EI", "A": "그렇습니다", "B": "아닙니다"},
    4: { "title": "Question.4 종종 사회적 상황에서 주도적으로 행동합니다.<br><br>", "type": "EI", "A": "그렇습니다", "B": "아닙니다"},
    5: { "title": "Question.5 금방 새로운 직장 사람들과 어울리기 시작합니다.<br><br>", "type": "EI", "A": "그렇습니다", "B": "아닙니다"},
    6: { "title": "Question.6 언제나 항상 새로운 아이디어와 계획이 머리속에 넘쳐납니다.", "type": "SN", "A": "그렇습니다", "B": "아닙니다"},
    7: { "title": "Question.7 꿈이 현실 세계와 사건에 중점을 두는 경향이 있습니다.", "type": "SN", "A": "그렇습니다", "B": "아닙니다"},
    8: { "title": "Question.8 본인이 창의적이기보다 현실적인 사람이라고 생각합니다.", "type": "SN", "A": "그렇습니다", "B": "아닙니다"},
    9: { "title": "Question.9 다른 사람들이 본인의 행동에 영향을 주는 것을 허용하지 않습니다.", "type": "SN", "A": "그렇습니다", "B": "아닙니다" },
    10: { "title": "Question.10 공상과 아이디어 때문에 흥분하는 일은 없습니다.<br><br>", "type": "SN", "A": "그렇습니다", "B": "아닙니다" },
    11: { "title": "Question.11 논쟁에서 이기는 것이 상대방을 불쾌하지 않도록 하는 것보다 더 중요합니다.", "type": "TF", "A": "그렇습니다", "B": "아닙니다" },
    12: { "title": "Question.12 종종 다른 사람들에게 자신을 정당화시켜야 할 것 만 같은 기분이 듭니다.", "type": "TF", "A": "그렇습니다", "B": "아닙니다" },
    13: { "title": "Question.13 토론 시 사람들의 민감한 반응보다 보다 진실을 더 중요시해야 합니다.", "type": "TF", "A": "그렇습니다", "B": "아닙니다" },
    14: { "title": "Question.14 상대방이 이메일에 재빨리 회신하지 않을 경우, 본인이 말실수를 했는지 걱정하기 시작합니다.", "type": "TF", "A": "그렇습니다", "B": "아닙니다"},
    15: { "title": "Question.15 협동 작업을 수행하는 경우 협력적인 자세보다 올바르게 행동하는 것이 더욱 중요합니다.", "type": "TF", "A": "그렇습니다", "B": "아닙니다" },
    16: { "title": "Question.16 이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없습니다.", "type": "JP", "A": "그렇습니다", "B": "아닙니다"},
    17: { "title": "Question.17 적응을 잘 하는 것 보다 체계적인 것이 더 중요합니다.", "type": "JP", "A": "그렇습니다", "B": "아닙니다"},
    18: { "title": "Question.18 집과 업무 환경이 잘 정돈되어 있습니다.<br><br>", "type": "JP", "A": "그렇습니다", "B": "아닙니다" },
    19: { "title": "Question.19 보통 여행 계획은 철저하게 세우는 편입니다.<br><br>", "type": "JP", "A": "그렇습니다", "B": "아닙니다" },
    20: { "title": "Question.20 계획의 수립과 이행은 모든 프로젝트에서 가장 중요한 부분입니다.", "type": "JP", "A": "그렇습니다", "B": "아닙니다" }
}
var result = {
    "ISTJ": { "PR_type": "108MHz", "explain": "달빛으로의 초대", "img": "/images/heart_logo.png" },
    "ISFJ": { "PR_type": "94MHz", "explain": "스위트박스", "img": "/images/heart_logo.png" },
    "INFJ": { "PR_type": "89MHz", "explain": "별 헤는 밤", "img": "/images/heart_logo.png" },
    "INTJ": { "PR_type": "80MHz", "explain": "아름다운 그대에게", "img": "/images/heart_logo.png" },
    "ISTP": { "PR_type": "114MHz", "explain": "새벽의 달", "img": "/images/heart_logo.png" },
    "ISFP": { "PR_type": "100MHz", "explain": "그대와 여는 아침", "img": "/images/heart_logo.png" },
    "INFP": { "PR_type": "95MHz", "explain": "레인보우 스트리트", "img": "/images/heart_logo.png" },
    "INTP": { "PR_type": "109MHz", "explain": "남다른 하루", "img": "/images/heart_logo.png" },
    "ESTP": { "PR_type": "110MHz", "explain": "달콤한 수다", "img": "/images/heart_logo.png" },
    "ESFP": { "PR_type": "96MHz", "explain": "러브쉐이크", "img": "/images/heart_logo.png" },
    "ENFP": { "PR_type": "91MHz", "explain": "상상파워", "img": "/images/heart_logo.png" },
    "ENTP": { "PR_type": "105MHz", "explain": "향기로운 오후", "img": "/images/heart_logo.png" },
    "ESTJ": { "PR_type": "104MHz", "explain": "오늘같은밤", "img": "/images/heart_logo.png" },
    "ESFJ": { "PR_type": "90MHz", "explain": "널 만나러 가는 길", "img": "/images/heart_logo.png" },
    "ENFJ": { "PR_type": "95MHz", "explain": "써니데이", "img": "/images/heart_logo.png" },
    "ENTJ": { "PR_type": "99MHz", "explain": "어메이징 그레이스", "img": "/images/heart_logo.png" }
}
function start() {
    $(".start").hide();
    $(".question").show();
    next();
}
$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});
$("#B").click(function () {
    next();
});
function next() {
    if (num == 21) {
        $(".question").hide();
        $(".result").show();
        var mbti = "";
        ($("#EI").val() < 3) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 3) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 3) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 3) ? mbti += "P" : mbti += "J";
        //alert(mbti);
        $("#img").attr("src", result[mbti]["img"]);
        $("#PR_type").html(result[mbti]["PR_type"]);
        $("#explain").html(result[mbti]["explain"]);
    } else {
        $(".progress-bar").attr('style', 'width: calc(100/20*' + num + '%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}