

var num = 1;
var q = {
    1: { "title": "Question.1 연인과 놀이동산을 간 당신<br>놀이기구를 탈 때 나는?<br>", "type": "EI", "A": "이건 꼭 타야해! 지도를 보며 계획을 세운다.", "B": "와, 저거 재밌겠다! 보이는 것 부터!"},
    2: { "title": "Question.2 소개팅을 나간 당신<br>첫 만남에 어색할 때 나는?", "type": "EI", "A": "생각해 온 첫 인사를 건낸다", "B": "미소를 지으며 상대의 말을 기다린다"},
    3: { "title": "Question.3 연인의 생일<br>어떤 선물을 주지?", "type": "EI", "A": "계획했던 선물을 미리 산다", "B": "생일에 맞춰 맞는 선물을 산다"},
    4: { "title": "Question.4 연인이 걷다가 누군가와 부딪혔다<br>어떻게 할까?", "type": "EI", "A": "저기요, 사과하세요!", "B": "괜찮아? 안다쳤어?"},
    5: { "title": "Question.5 직장에서 화가 난 날<br>연인과 통화를 할 때 나는?", "type": "EI", "A": "오늘 일을 처음부터 끝까지 전부", "B": "상사 욕부터 하고 상세한건 이따가"},
    6: { "title": "Question.6 연인과 말다툼 중 나는?", "type": "SN", "A": "연인 기분이 상했겠지만 팩트가 우선", "B": "팩트보다는 연인의 기분이 우선"},
    7: { "title": "Question.7 나는 어떤 데이트를 좋아할까?", "type": "SN", "A": "핫플에서 사진찍고 맛집 탐방", "B": "집에서 꽁냥꽁냥 넷플 정주행"},
    8: { "title": "Question.8 연인과 데이트 하는 날<br>어떻게 할까?", "type": "SN", "A": "미리 코스를 검색하고 예약한다", "B": "만나서 그때 당기는 것, 가고 싶은 곳에"},
    9: { "title": "Question.9 오늘은 내 생일<br>연인이 선물을 준다", "type": "SN", "A": "나에게 필요한걸 물어 사주면 좋겠다", "B": "마음만 느껴지면 어떤 선물도 좋다" },
    10: { "title": "Question.10 하루종일 휴일<br>나는?", "type": "SN", "A": "좀 쑤신다...어디라도 나가볼까?", "B": "집이 좋다, 집에 있어도 바빠!" },
    11: { "title": "Question.11 오랜만에 소개팅에 나갔다<br>이상형이 나왔을 때 나는?", "type": "TF", "A": "상대방을 알고싶다. 폭풍 질문!", "B": "내 얘길 하면서 나의 매력 어필!" },
    12: { "title": "Question.12 힘든 상황에 처한 연인<br>이 때 나는?", "type": "TF", "A": "상황에 대한 해결책 제시", "B": "공감과 정신적인 지지" },
    13: { "title": "Question.13 연인과 걷다 연인 동창을 만났다<br>이 때의 난?", "type": "TF", "A": "나도 친밀하게 이야기 한다", "B": "난 투명인간, 멀리서 대화 끝까지 기다린다" },
    14: { "title": "Question.14 연인이 3시간 넘게 연락이 없다!", "type": "TF", "A": "수시로 휴대폰을 들여다 본다", "B": "바쁜가보다, 연락 올 때까지 기다린다"},
    15: { "title": "Question.15 연인과 만났다<br>나 달라진거 없어라고 물을 때?", "type": "TF", "A": "뭐가 바뀌었지? 당황스럽다", "B": "디테일한 부분까지 다 찾아낸다" },
    16: { "title": "Question.16 연인과 신나는 게임 중!<br>이때 나는?", "type": "JP", "A": "연인도 좋지만 게임은 이겨야 한다", "B": "승패가 무슨 중요? 재밌으면 됐지"},
    17: { "title": "Question.17 연인에게 '뭐해?'라는 카톡이 왔다<br>이때 나는?", "type": "JP", "A": "바로바로 읽는다. 무조건 칼답!", "B": "할 일이 있다. 나중에 답하자!"},
    18: { "title": "Question.18 연인과 기념일<br>회사에 일이 생겼다.", "type": "JP", "A": "약속을 미루고 야근한다", "B": "상사에게 양해를 구한다" },
    19: { "title": "Question.19 연인과 밥먹으러 어디로 갈까?", "type": "JP", "A": "검증된 맛집! 단골집으로 간다!", "B": "새로 오픈했다고? 도전!" },
    20: { "title": "Question.20 연인이 기념일을 잊었다<br>화가 난 나는?", "type": "JP", "A": "왜 잊었는지 조목조목 따져 듣는다", "B": "날 사랑하긴 하니? 울컥한다" }
}

// var result = {
//     "ISTJ": { "PR_type": "108MHz <br> 달빛으로의 초대", "explain": "조용하고, 신중하다.<br>매사에 책임감이 강하여 한 번 시작한 일은 끝까지 해낸다.<br>위기 상황에 충동적으로 일을 처리 하지 않는다.<br>때로는 고집 있지만 어떤 일에 대처할때는 매우 확고하고 분별력 있다.<br>연인 관계 안에 본인을 소속시키고 유지하려는 성향을 보인다.<br>본인이 연인에게 신뢰할 수 있는 사람이 되기를 바라며,<br>연인 사이의 상황과 역할에 충실하려 한다.", "img": "/images/heart_logo.png", "match_type": "108MHz(달빛으로의 초대)<br>94MHz(스위트 박스)" },
//     "ISFJ": { "PR_type": "94MHz <br> 스위트박스", "explain": "사랑은 진지한 헌신이라고 생각한다.<br>연인과의 관계도 계획적으로 생각하여 행동하기를 좋아한다.<br>연애도 진지한 자세로 임하며, 연인에게도 직설적으로 말하는 경향이 있다.<br>사랑은 안정감 있고, 신뢰감 있어야한다.<br>사랑의 가치가 소중하기 때문에 연애에도 열정적이며 연인을 통해 삶의 만족감을 느낀다.", "img": "/images/heart_logo.png", "match_type": "108MHz(달빛으로의 초대)<br>94MHz(스위트박스)" },
//     "INFJ": { "PR_type": "89MHz <br> 별 헤는 밤", "explain": "통찰력 있고, 직관력 있다.<br>독립심 있고 협력을 중요시한다.<br>어떤 일을 시작할 때 그 일을 하는<br>연인에게 사랑 표현은 많이 하지 않지만, 한번을 만나더라도 깊게 사랑한다.", "img": "/images/heart_logo.png", "match_type": "85MHz(써니데이)<br>95MHz(레인보우 스트리트)<br>109MHz(남다른 하루)" },
//     "INTJ": { "PR_type": "80MHz <br> 아름다운 그대에게", "explain": "독창적이며, 창의적이다.<br>진취적이고 단호한 성향이 있다.<br>전체적인 조화를 중요하게 생각하며 목표를 달성하는데 시간과 노력을 쏟는다.<br>비전을 제시할 줄 알고, 일을 조직화할 줄 안다.<br>때로는 어떤 문제에 대해 고집이 세다.<br>사랑은 자신의 세계에 연인을 받아들이는 것이라 생각한다.<br>열정적인 상대에게 매력을 느낀다.", "img": "/images/heart_logo.png", "match_type": "80MHz(별헤는 밤)" },
//     "ISTP": { "PR_type": "114MHz <br> 새벽의 달", "explain": "유연한 사고를 가졌으며, 상황을 분석적으로 본다.<br>사실 정보를 좋아하고 객관적인 추론을 제외하고는 신뢰하지 않는다.<br>논리적이고 상황에 빠르게 적응한다.<br>대체로 가까운 사람들 외에는 자신을 필요 이상으로 개방하지 않는다.<br>떄로는 지나치게 노력을 절약하려는 경향이 있다.<br>사랑은 현실적이고 주고 받는 것이 확실하다고 생각한다.<br>연인 관계더라도 각자의 생활과 자유를 존중할 줄 알아야 한다고 생각한다.<br>연인과 같이 즐기는 취미를 좋아한다.", "img": "/images/heart_logo.png", "match_type": "114MHz(백과사전형)<br>85MHz(써니데이)"},
//     "ISFP": { "PR_type": "100MHz <br> 그대와 여는 아침", "explain": "감정에 민감하고, 주변에 관심이 많다.<br>대체적으로 친절하여 타인에게 본인 생각을 강요하지 않는다.<br>어떤 상황에도 적응력있이 대처하며, 목표까지 여유있는 태도로 임한다.<br>상대방을 알기 전까지는 따뜻함을 잘 드러내지는 않는다.<br>자신의 내적인 기준에 부합하지 않는다면 조금도 양보하지 않는다.<br>사랑은 관심이라고 생각한다.<br>연인의 필요와 욕구에 대해 배려심 있게 행동한다.<br>사랑에 깊이 빠지는 경향이 있어 때로는 사랑에 지치기도 한다.", "img": "/images/heart_logo.png", "match_type": "100MHz(그대와 아는 아침)" },
//     "INFP": { "PR_type": "95MHz <br> 레인보우 스트리트", "explain": "이상주의자이다.<br>자신이 지향하는 가치에 신념을 가지고 있지만, 일상에서 드러내지는 않는다.<br>대체로 관대하고 남에게 강요하지 않는다.<br>어떤 일을 할 때 완벽주의자 성향을 보인다.<br>사랑은 깊은 헌신이며, 성취할 수 없는 것이라 생각한다.<br>이상적인 연인 관계를 원하므로 상대를 사귈 때도 신중하게 검토한다.", "img": "/images/heart_logo.png", "match_type": "95MHz(레인보우 스트리트)<br>89MHz(별헤는 밤)" },
//     "INTP": { "PR_type": "109MHz <br> 남다른 하루", "explain": "조용하고, 과묵하다.<br>이론적이고 관심있는 분야라면 말이 많아진다.<br>아이디어에 중점을 두고 가능성에 관심이 많다.<br>지적인 욕구가 강하고, 개인 간의 관계에는 다소 흥미가 없다.<br>비평적인 관점을 가지고 있으며 문제해결에 전략적으로 뛰어든다.<br>사랑도 순서가 있다고 생각한다.<br>시작하는 단계에서도 본인만의 기준에 따라 관계를 유지하며,<br>헤어지더라도 이별에 대한 확실한 과정을 선호한다.", "img": "/images/heart_logo.png", "match_type": "109MHz(남다른 하루)<br>89MHz(별헤는 밤)" },
//     "ESTP": { "PR_type": "110MHz <br> 달콤한 수다", "explain": "유연한 사고로 문제해결에 적극적인 움직임을 보인다.<br>현실적이고, 실제 경험을 중시한다.<br>관대하고 느긋한 경향이 있고 선입견 없이 개방적인 사고를 지녔다.<br>문제 상황에서 누구나 만족할만한 해결책을 찾으려 노력하고, 규범을 통해 해결하기 보다 현재에 초점을 맞추어 해결하려 한다.<br>사랑은 서로의 기쁨을 나누는 것이라 생각한다.<br>연인에게 어려운 상황을 제시하는 것을 꺼려한다.<br>무엇이든 본인관 함께 즐기고자하는 연인을 선호한다.", "img": "/images/heart_logo.png", "match_type": "110MHz(달콤한 수다)<br>105MHz(향기로운 오후)" },
//     "ESFP": { "PR_type": "96MHz <br> 러브쉐이크", "explain": "우호적이며, 수용력 강하고 긍정적인다.<br>어떤 상황에서도 잘 적응하고 타협적인 태도로 임한다.<br>주변에 관심이 많고, 타인의 의견을 잘 받아들인다.<br>논리적인 사고 보다는 본인이 중요하다 생각하는 가치에 따른 결정을 내린다.<br>사물 혹은 사람에 대한 관심과 호기심이 많고<br>어떤 일을 배울 때 이론 보다는 직접 경험하는 것을 좋아한다.<br>사랑은 상대와 즐겁게 시간을 보내는 것이라 생각한다.<br>중요하다고 생각하는 가치에 대해 연인과 의견 나누기를 좋아하며<br>본인 생각을 공유하고 싶어한다.<br>연인과 관계가 소홀해지면 언제든 이별하고자하는 준비가 되어있고<br>상대에게 거절당하는 것을 두려워한다.<br>반대로 상대가 사랑에 헌신적이면 받은 만큼 돌려준다.", "img": "/images/heart_logo.png", "match_type": "96MHz(러브 쉐이크)" },
//     "ENFP": { "PR_type": "91MHz <br> 상상파워", "explain": "상상력이 풍부하고, 열정적이다.<br>순간적인 에너지가 좋고 타인들에게 칭찬받기를 좋아한다.<br>통찰력 있고, 다른 사람을 잘 돕는다.<br>문제 상황이 생기면 창의적인 방법으로 해결하고자 한다.<br>자발적이고 유창한 화술로 상대방 또한 본인 일에 관심을 가지도록 만든다.<br>사랑은 자신과 떼려야 뗄 수 없는 것이라 생각한다.<br>새로운 상대에게 흥미를 느끼며<br>화려한 사랑을 추구한다.<br>다른 사람들을 잘 매료시키기 때문에 연인을 자신의 성향에 동화시킨다.", "img": "/images/heart_logo.png", "match_type": "91MHz" },
//     "ENTP": { "PR_type": "105MHz <br> 향기로운 오후", "explain": "활기차고, 표현력이 좋다.<br>독창적이며 혁신적인 사고를 지녔다.<br>상상력이 풍부하여 새로운 시도를 좋아하며, 다재다능하다.<br>어떤 일에든 자신감을 보이며 관심 분야의 범위가 넓다.<br>실증을 잘 내기도 하지만, 지속 적으로 흥미로운 일을 찾는다.<br>사랑은 잘 맞는 사람과의 연속성이라고 생각한다.<br>따라서 대화를 통해 잘 맞지 않는 사람이라고 생각하면 연인 가능성을 제외시킨다.<br>상대를 처음 만났을 때, 어떤 관계로 발전할 지 잘 파악하는 편이다.<br>연인이 될 가능성이 있는 상대를 알아갈 때는<br>새로운 사람이 나타나더라도 관심이 없다.<br>상대에게도 본인과 같은 확신을 요구하기 때문에<br>이별하게 되면 굉장히 힘들어한다.", "img": "/images/heart_logo.png", "match_type": "110MHz(달콤한 수다)<br>105MHz(향기로운 오후)" },
//     "ESTJ": { "PR_type": "104MHz <br> 오늘같은밤", "explain": "구체적이고, 어떤 일이든 결정을 내리려는 성향이 있다.<br>계획적이고 추진력 있으며 조직을 이끄는데 탁월한 재능을 보인다.<br>불분명한 것을 싫어하고, 규칙을 준수한다.<br>중요한 결정은 반드시 사실에 바탕을 두고 검토한다.<br>사랑은 진지한 헌신이라고 생각한다.<br>연인과의 관계도 계획적으로 생각하여 행동하기를 좋아한다.<br>연애도 진지한 자세로 임하며, 연인에게도 직설적으로 말하는 경향이 있다.", "img": "/images/heart_logo.png", "match_type": "104MHz(오늘같은 밤)<br>99MHz(어메이징 그레이스)" },
//     "ESFJ": { "PR_type": "90MHz <br> 널 만나러 가는 길", "explain": "협조적이며, 조화를 추구한다.<br>대체적으로 친절하며, 타인에게 헌신적인 성향이 있다.<br>재치 있고, 비판보다는 타인의 의견에 우선 동의해준다.<br>동정심과 동료애가 많아 다른 사람에게 도움 주기를 좋아한다.<br>본인이 해야할 일과 하지 않아야할 일에 대한 구분이 명확하다.<br>갈등 상황에서는 회피하려는 경향을 보인다.<br>사랑은 꾸준한 관심이라고 생각한다.<br>연인에게 온화하며 서로 관심을 가지고 상호작용 하기를 원한다.<br>상대에게 늘 배려있게 행동하며<br>연인에게 기대한만큼 실망도 크게한다.", "img": "/images/heart_logo.png", "match_type": "90MHz(널 만나러 가는 길)" },
//     "ENFJ": { "PR_type": "95MHz <br> 써니데이", "explain": "친절하고 재치있으며, 동료애가 많다.<br>감정이입을 잘하여 다른 사람들 의견을 존중할 줄 안다.<br>대체로 성실하며, 다른 사람에게 관심이 많다.<br>조화로운 인간 관계를 중요하게 생각하며<br>타인의 성장을 돕는다.<br>때로는 다른 사람들도 본인과<br>같은 생각일 것이라 생각하는 경향이 있다.<br>사랑은 낭만적인 것이라 생각한다.<br>연인이 생기면 상대와의 가장 이상적인 관계로 발전할 것이라 생각한다.<br>사랑에 깊게 빠지는 성향이기 때문에, 사랑에 힘들어한다.<br>상대에게 해준 만큼 상대도 본인에게 똑같이 해주길 원한다.", "img": "/images/heart_logo.png", "match_type": "85MHz(써니데이)<br>114MHz(새벽의 달)" },
//     "ENTJ": { "PR_type": "99MHz <br> 어메이징 그레이스", "explain": "결단력 있고, 분석적이다.<br>솔직하며 타인을 활력있게 이끄는 능력이 있다.<br>장기적인 계획을 세우고<br>목표 달성을 위해 체계적으로 추진하는 것을 좋아한다.<br>불분명하고 비효율적인 일에는 관심이 없다.<br>본인의 신념과 지식을 확장하고자 하며<br>타인에게 전달한다.<br>사랑은 본인을 더 성장시키는 것이다.<br>본인의 목표를 같이 이룰 수 있는 상대를 원한다.<br>따라서 상대에게 본인 상황에 맞추어 요구하려는 경향을 보인다.<br>쉽게 사랑에 빠지기도 하지만<br>연인 사이에서도 각자의 독립성을 존중 받기를 원한다.", "img": "/images/heart_logo.png", "match_type": "99MHz(어메이징 그레이스)<br>104MHz(오늘같은 밤)" }
// }



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
        //$("#img").attr("src", result[mbti]["img"]);
        $("#PR_type").html(retList[mbti]["typeName"]);
        $("#user_type").html(retList[mbti]["userType"]);
        $("#match_type").html(retList[mbti]["matchType"]);
        $("#explain").html(retList[mbti]["typeDesc"]);
        document.getElementById("Result").value=retList[mbti]["userType"];

    } else {
        $(".progress-bar").attr('style', 'width: calc(100/20*' + num + '%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}