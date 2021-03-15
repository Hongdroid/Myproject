//햄버거 메뉴
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});


function getvision(){
  const con5 = document.getElementById("smtimg")
  const con4 = document.getElementById("smtbtn2")
  const con3 = document.getElementById("smttitle")
  const con2 = document.getElementById("smt")
  const con = document.getElementById("chat-sec");

  if(con.style.display=='block'){
    con.style.display='none';

  }else{
    con.style.display='block';
    con2.style.display='none';
    con3.style.display='none';
    con4.style.display='none';
    con5.style.display='none';
  }
}


//채팅 부분
var messages = [],

    lastUserMessage = "",
    botMessage = "",
    botName = '상대방',
    talking = true;
function chatbotResponse() {
  talking = true;
  botMessage = "다시 말해줄 수 있을까?";
  if (lastUserMessage === '안녕' || lastUserMessage == '안녕하세요' || lastUserMessage == '반가워요' || lastUserMessage == '반가워') {
    const hi = ['안녕', '안녕하세요', '반가워']
    botMessage = hi[Math.floor(Math.random() * (hi.length))];
    ;
  }
  if (lastUserMessage === '이름이 무엇인가요' || lastUserMessage == '이름' || lastUserMessage == '이름이 뭔가요') {
    botMessage = '내 이름은 ' + botName;
  }
  if (lastUserMessage === '지역' || lastUserMessage == '어디에 사나요' || lastUserMessage == '어디에 삽니까' || lastUserMessage == '어디에 사시나요'
      || lastUserMessage == '어디에 살아요?') {
    botMessage = '서울 살고 있어! 넌??';
  }
  if (lastUserMessage === '광주' || lastUserMessage == '나주' || lastUserMessage == '전주' || lastUserMessage == '서울'
      || lastUserMessage == '목포') {
    botMessage = '좋은 곳이지!';
  }
  if (lastUserMessage === '나이' || lastUserMessage == '몇살인가요' || lastUserMessage == '나이가 어떻게 되시나요' || lastUserMessage == '나이가 몇살인가요' || lastUserMessage == '나이가 어떻게 되나요') {
    botMessage = ' 비밀ㅎㅎ ';
  }
  if (lastUserMessage === 'mbti' || lastUserMessage == 'mbti가 무엇인가요' || lastUserMessage == '성격' || lastUserMessage == '성격이 어떻게 되시나요'
      || lastUserMessage == '주파수' || lastUserMessage == '몇 주파수') {
    botMessage = '80MHz - 아름다운 당신에게 유형이라고 나왔어!';
  }
  if (lastUserMessage === '술' || lastUserMessage == '술은 잘마시나요' || lastUserMessage == '주량은' || lastUserMessage == '주량'
      || lastUserMessage == '술 좋아해요?' || lastUserMessage == '술 좋아해?' || lastUserMessage == '소주' || lastUserMessage == '맥주') {
    botMessage = '안 취할만큼 적당히?';
  }
  if (lastUserMessage === '흡연' || lastUserMessage == '담배' || lastUserMessage == '흡연 하시나요' || lastUserMessage == '담배 펴요?' || lastUserMessage == '담배 펴?') {
    botMessage = '안 펴~';
  }
  if (lastUserMessage === '야' || lastUserMessage == '뭐' || lastUserMessage == '헤이' || lastUserMessage == '왜' || lastUserMessage == 'ㅇ' || lastUserMessage == '말해봐') {
    botMessage = '왜?';
  }
  if (lastUserMessage === '취미' || lastUserMessage == '취미가 뭔가요' || lastUserMessage == '취미가 무엇인가요' || lastUserMessage == '취미는?') {
    botMessage = '등산 다니는거 좋아해~';
  }
  if (lastUserMessage === '뭐해' || lastUserMessage == '뭐하고 있어?' || lastUserMessage == '뭔데' || lastUserMessage == '뭐함?') {
    botMessage = '멍 타는중';
  }
  if (lastUserMessage === '심심해' || lastUserMessage == '놀아줘' || lastUserMessage == '심심' || lastUserMessage == '뭐라고치지'
      || lastUserMessage == '뭐라고 치지' || lastUserMessage == '뭐라고하지' || lastUserMessage == '뭐라고 하지' || lastUserMessage == '뭐하지'
      || lastUserMessage == '뭐할까' || lastUserMessage == '음') {
    botMessage = '편하게 대화하자~';
  }
  if (lastUserMessage === '왜 반말해' || lastUserMessage == '반말 왜 해' || lastUserMessage == '반말 왜 해' || lastUserMessage == '존대 써') {
    botMessage = '미안..ㅎ 편한게 좋아서..';
  }
  if (lastUserMessage === '사랑해' || lastUserMessage == '결혼하자' || lastUserMessage == '결혼할래?' || lastUserMessage == '사귈래?') {
    botMessage = '응??ㅋㅋㅋㅋ생각해볼게';
  }


  if (lastUserMessage === 'ㅋㅋㅋㅋ' || lastUserMessage == 'ㅎㅎㅎㅎ' || lastUserMessage == '.....' || lastUserMessage == ';;' || lastUserMessage == '??'
      || lastUserMessage == '?' || lastUserMessage == 'ㅋㅋㅋ' || lastUserMessage == 'ㅋ' || lastUserMessage == 'ㅋㅋ' || lastUserMessage == 'ㅋㅋㅋㅋㅋㅋ') {
    botMessage = '왜? ㅋㅋㅋ';
  }

  if (lastUserMessage === '그냥' || lastUserMessage == '걍' || lastUserMessage == '내 맘' || lastUserMessage == '안물' || lastUserMessage == '안물안궁'
      || lastUserMessage == '안궁금해' || lastUserMessage == '별론데' || lastUserMessage == '우웩' || lastUserMessage == '읔ㅋㅋㅋ' || lastUserMessage == '몰라') {
    botMessage = '그럴 수 있지..';
  }


//스몰톡 주제
  if (lastUserMessage === '집에서 쉰다' || lastUserMessage == '집순이' || lastUserMessage == '집돌이' || lastUserMessage == '밖에 나간다'
      || lastUserMessage == '집에서' || lastUserMessage == '나간다' || lastUserMessage == '밖순이' || lastUserMessage == '밖돌이') {
    botMessage = '그게 쉬는거지, 나도 담에 같이 쉬자!';
  }
  if (lastUserMessage === '해양 액티비티' || lastUserMessage == '야외운동' || lastUserMessage == '야외 운동' || lastUserMessage == '실내 운동'
      || lastUserMessage == '실내 운동' || lastUserMessage == '운동 안해' || lastUserMessage == '운동 싫어해' || lastUserMessage == '운동 싫어') {
    botMessage = '나랑 똑같네, 올해 도전해보자';
  }
  if (lastUserMessage === '숙소' || lastUserMessage == '자는게 편해야돼' || lastUserMessage == '관광' || lastUserMessage == '돌아다녀야지'
      || lastUserMessage == '피곤해' || lastUserMessage == '편한 침대' || lastUserMessage == '볼거 많아' || lastUserMessage == '또 언제오겠어') {
    botMessage = '그게 여행이지, 같이 가면 딱 맞겠다';
  }
  if (lastUserMessage === '위로해주기' || lastUserMessage == '위로' || lastUserMessage == '해결' || lastUserMessage == '해결책 찾아주기'
      || lastUserMessage == '들어줘야지' || lastUserMessage == '해결해줘야지' || lastUserMessage == '위로할거야' || lastUserMessage == '해결할래') {
    botMessage = '나도 그게 좋아, 다음에 그렇게 해줘!';
  }
  if (lastUserMessage === '그럴수있지' || lastUserMessage == '그럴 수 있지' || lastUserMessage == '너무해' || lastUserMessage == '파토 싫어'
      || lastUserMessage == '사정이 있겠지' || lastUserMessage == '이유 들어보고' || lastUserMessage == '어쩔 수 없지' || lastUserMessage == '어쩔수없지') {
    botMessage = '그니까! 역시 나랑 똑같은 줄 알았어';
  }
  if (lastUserMessage === '플렉스' || lastUserMessage == 'flex' || lastUserMessage == '일단 질러' || lastUserMessage == '지른다'
      || lastUserMessage == '지름신' || lastUserMessage == '후기' || lastUserMessage == '리뷰 보고' || lastUserMessage == '후기 보고' || lastUserMessage == '후기부터 보자') {
    botMessage = '인생의 진리지. 나도 그래';
  }
  if (lastUserMessage === '영화관에서' || lastUserMessage == '영화관' || lastUserMessage == '직접 가서' || lastUserMessage == '집'
      || lastUserMessage == '집에서' || lastUserMessage == '편하게' || lastUserMessage == '집에서 편하게' || lastUserMessage == '영화관 가서') {
    botMessage = '영화는 그렇게 봐야지, 담에 같이 한 편 보자~~';
  }
  if (lastUserMessage === '여름옷' || lastUserMessage == '겨울옷' || lastUserMessage == '여름에 겨울 옷' || lastUserMessage == '겨울에 여름 옷'
      || lastUserMessage == '여름에 겨울옷' || lastUserMessage == '겨울에 여름옷') {
    botMessage = '힘들어도 그게 나아ㅠㅠㅋㅋㅋ 알지알지';
  }
  if (lastUserMessage === '조개구이' || lastUserMessage == '조개' || lastUserMessage == '라면' || lastUserMessage == '스키장'
      || lastUserMessage == '라면에 핫바' || lastUserMessage == '겨울바다') {
    botMessage = '좋다, 다음에 같이 갈까?';
  }
  if(lastUserMessage === '안녕하세요? 저는 쉬는날이면 밖에나가서 외식을 즐기는편인거같아요'){
    botMessage = '안녕하세요~ 반가워요 ㅎㅎ 저도 밖에나가서 외식하고 천변로 걷는걸좋아해요!';
  }
  if(lastUserMessage === '저도 천변로 자주걷는데..우연인가요?ㅎㅎ'){
    botMessage = '오늘 저녁에 시간어떻세요? 같이 운동하고 치맥이나 한잔할까요?';
  }
  if(lastUserMessage === '네! 좋습니다! 그럼이따 뵐게요!'){
    botMessage = '응! 이따 봐요 ♡';
  }
  if (lastUserMessage === '무 별로' || lastUserMessage == '무 안좋아해' || lastUserMessage == '무 없이 어케먹음?' || lastUserMessage == '치킨무'
      || lastUserMessage == '무없이 안돼' || lastUserMessage == '치킨무 맛있지' || lastUserMessage == '콜라가 최고' || lastUserMessage == '콜라없이 어케 먹어?'
      || lastUserMessage == '콜라없이 어떻게 먹어?' || lastUserMessage == '콜라없이 안돼' || lastUserMessage == '빅맥' || lastUserMessage == '사이다') {
    botMessage = '어! 나도 마찬가지~ 먹으러 갈까?';
  }
  if (lastUserMessage === '한시간' || lastUserMessage == '하루 종일' || lastUserMessage == '하루종일' || lastUserMessage == '1시간'
      || lastUserMessage == '계속 만나야돼' || lastUserMessage == '보고싶잖아') {
    botMessage = '나도! 나랑 잘맞네~';
  }
  if (lastUserMessage === '뿌링클' || lastUserMessage == '치킨' || lastUserMessage == '레드반반' || lastUserMessage == '어떤 치킨 좋아해?'
      || lastUserMessage == '무슨 치킨 좋아해요' || lastUserMessage == 'bhc' || lastUserMessage == '교촌') {
    botMessage = '교촌 반반이 진리지, 같이 먹을까?';
  }
  if (lastUserMessage === '비비큐' || lastUserMessage == '호식이' || lastUserMessage == '푸라닭' || lastUserMessage == '후라이드'
      || lastUserMessage == '굽네' || lastUserMessage == 'bbq' || lastUserMessage == '양념') {
    botMessage = '교촌 허니콤보가 땡기는데, 같이 먹을래?';
  }
  if (lastUserMessage === '부먹' || lastUserMessage == '찍먹' || lastUserMessage == '탕수육' || lastUserMessage == '담먹'
      || lastUserMessage == '바삭한거' || lastUserMessage == '눅눅해져') {
    botMessage = '바삭한게 좋지, 찍먹! 오늘 저녁은 중식 어때?';
  }
  if (lastUserMessage === '겨울' || lastUserMessage == '여름' || lastUserMessage == '봄' || lastUserMessage == '가을') {
    botMessage = '나돈데!!! 여행갈까?';
  }
  if (lastUserMessage === '귀여움' || lastUserMessage == '귀여운 사람' || lastUserMessage == '섹시' || lastUserMessage == '섹시한 사람'
      || lastUserMessage == '귀요미') {
    botMessage = '딱 난데? 나 어때 ㅋㅋㅋㅋㅋ';
  }
  if (lastUserMessage === '야채' || lastUserMessage == '채소' || lastUserMessage == '고기' || lastUserMessage == '평생 야채만'
      || lastUserMessage == '평생 야채만 먹기' || lastUserMessage == '평생 고기만' || lastUserMessage == '평생 고기만 먹기') {
    botMessage = '극단적이긴 한데, 그게 낫지.... 같이 도전할까?';
  }


  if (lastUserMessage === '둘다' || lastUserMessage == '둘 다' || lastUserMessage == '다 좋아' || lastUserMessage == '다 싫어' || lastUserMessage == '둘다좋아'
      || lastUserMessage == '둘다싫어' || lastUserMessage == '둘 다 좋아' || lastUserMessage == '둘 다 싫어' || lastUserMessage == '다별로' || lastUserMessage == '둘 다 별로'
      || lastUserMessage == '둘다별로' || lastUserMessage == '못골라' || lastUserMessage == '못고르겠어' || lastUserMessage == '다 좋은데') {
    botMessage = '그래도 하나만 생각해줘~';
  }


  if (lastUserMessage === '좋아' || lastUserMessage == '좋아요' || lastUserMessage == '조아' || lastUserMessage == '네' || lastUserMessage == '넵'
      || lastUserMessage == '조앙' || lastUserMessage == '구랭' || lastUserMessage == '그랭' || lastUserMessage == '오키'
      || lastUserMessage == '응' || lastUserMessage == '웅' || lastUserMessage == '오케이' || lastUserMessage == '가자' || lastUserMessage == '그래'
      || lastUserMessage == '좋아용ㅋㅋㅋ' || lastUserMessage == '좋앜ㅋㅋㅋ' || lastUserMessage == '고고' || lastUserMessage == '넹') {
    botMessage = '좋아! 또 연락할게!';
  }

  if (lastUserMessage === '싫어' || lastUserMessage == '싫어요' || lastUserMessage == '시러' || lastUserMessage == '별로' || lastUserMessage == '흠'
      || lastUserMessage == '글쎄' || lastUserMessage == '별루' || lastUserMessage == '싫은데?' || lastUserMessage == '안갈래' || lastUserMessage == '엥'
      || lastUserMessage == '안가' || lastUserMessage == '개싫어' || lastUserMessage == '으' || lastUserMessage == '훔' || lastUserMessage == 'ㅂㄹ'
      || lastUserMessage == '아니' || lastUserMessage == '어쩌라고' || lastUserMessage == 'ㅇㅉ' || lastUserMessage == 'ㅇㅉㄺ') {
    botMessage = 'ㅠㅠ잘 생각해봐줘, 다시 연락할게!';
  }
}


function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push("<b>"+"나 : "+ "</b>" +lastUserMessage);


    // messages.push("<b>" +"나" + ":</b> " + lastUserMessage);

    for (var i = 1; i < 8; i++) {

      if (messages[messages.length - i] != undefined){
        console.log(messages[messages.length - i]);
        curlog = document.getElementById("chatlog" + i);
        curlog.innerHTML = messages[messages.length - i];
        if(i%2==1){
          curlog.style.textAlign = "right";
        }else{
          curlog.style.textAlign = "left";
        }
      }
    }

    setTimeout(function() {
      console.log('Works!');
      chatbotResponse();
      messages.push("<b>" + botName + " :</b> " + botMessage);

      Speech(botMessage);
      for (var i = 1; i < 8; i++) {
        if (messages[messages.length - i]!= undefined){
          //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
          curlog = document.getElementById("chatlog" + i);
          curlog.innerHTML = messages[messages.length - i];
          if(i%2==0){
            curlog.style.textAlign = "right";
          }else{
            curlog.style.textAlign = "left";
          }
        }
      }
    }, 2000);
  }
}

function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    const utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}
document.onkeypress = keyPress;
function keyPress(e) {
  const x = e || window.event;
  const key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {

    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}

//상단 메뉴 사람 바꾸는 기능
$('#v').on('click',function(){
  $('#kim').html('<img src="/images/man/03.jpg" alt=""><div><h2>뷔</h2><h3><span class="status green"></span>online</h3></div>');
});
$('#kim1').on('click',function(){
  $('#kim').html('<img src="/images/man/01.jpg" alt=""><div><h2>김지훈</h2><h3><span class="status green"></span>online</h3></div>');
});
$('#nam').on('click',function(){
  $('#kim').html('<img src="/images/man/02.jpg" alt=""><div><h2>남주혁</h2><h3><span class="status orange"></span>offline</h3></div>');
});
$('#su').on('click',function(){
  $('#kim').html('<img src="/images/man/05.jpg" alt=""><div><h2>김수현</h2><h3><span class="status orange"></span>offline</h3></div>');
});
$('#go').on('click',function(){
  $('#kim').html('<img src="/images/man/10.jpg" alt=""><div><h2>고수</h2><h3><span class="status green"></span>online</h3></div>');
});
$('#do').on('click',function(){
  $('#kim').html('<img src="/images/man/16.jpg" alt=""><div><h2>이도현</h2><h3><span class="status orange"></span>offline</h3></div>');
});
$('#woo').on('click',function(){
  $('#kim').html('<img src="/images/man/13.jpg" alt=""><div><h2>우도환</h2><h3><span class="status green"></span>online</h3></div>');
});
$('#jin').on('click',function(){
  $('#kim').html('<img src="/images/man/11.jpg" alt=""><div><h2>이진욱</h2><h3><span class="status green"></span>online</h3></div>');
});
$('#jun').on('click',function(){
  $('#kim').html('<img src="/images/man/04.jpg" alt=""><div><h2>이준혁</h2><h3><span class="status green"></span>online</h3></div>');
});



// 서치하는기능
function search(){
  var sc,ml,name,i;

  sc = document.getElementById('sc').value.toUpperCase();
  ml = document.getElementsByClassName('ml');

  for(i = 0; i < ml.length; i++){
    name = ml[i].getElementsByClassName('name');
    if(name[0].innerHTML.toUpperCase().indexOf(sc) > -1){
      ml[i].style.display = "flex";
    }else{
      ml[i].style.display = "none";
    }
  }
}

function getGender(event) {
  document.getElementById('radiovalue').innerText =
      event.target.value;
}