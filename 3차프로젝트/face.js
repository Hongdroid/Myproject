
/*var s = document.createElement('script');
s.src = 'jquery-3.5.1.js';
s.onload = function(e){};
document.head.appendChild(s);*/

//const { data } = require("jquery");

// var temp = [];
/*$.ajax({
  url : 'tournament',
  dataType : 'JSON',
  type : 'POST',
  success : function(data){
    console.log(data);
    temp.push(data);
    //받아오는 결과값을 data에 담는다!
  },
  error : function error(data){
    console.error(data)
  }
})*/

// _O.Ctrl = {
//   getLists() {
//     let retList=[];
//     testValue.forEach(function(element){
//       retList.push({
//         name:element['userName'],
//         imgSrc: element['userTel'],
//         imgSrc: element['userSmoke'],
//         imgSrc: element['userDrink'],
//         imgSrc: element['userLoc'],
//         imgSrc: element['userHobby'],
//         imgSrc: element['userReligion'],
//         imgSrc: element['userIntd'],
//         imgSrc: element['userHobby'],
//         imgSrc: element['userType'],
//         selected: false
//       });
//     });
//     return retList;
//   },



if(!window['lezh.in']) {
  lezhin = {};
  ( function (_O) {
    _O.init = () => {
      const v = _O.Vars;
      v.curRound = 8;
      v.curStage = 0;
      v.gameHistory = {
        '8': [],
        '4': [],
        '2': [],
        '1': []
      };
      v.lists = _O.Ctrl.getLists();
      _O.Ctrl.prevCancelOnOff();
    };
    _O.start = () => {
      _O.init();
      _O.Ctrl.gameNewStart.bind(_O.Ctrl)();
    };
    _O.Vars = {
      lists:null,
      curRound: 0,
      curStage: 0,
      maxRound: 8,
      gameHistory: null
    };
    _O.Ctrl = {
      getLists() {
        let retList=[];
        testValue.forEach(function(element){
          retList.push({
            id:element['userId'],
            name:element['userName'],
            age:element['userAge'],
            location:element['userLoc'],
            hobby: element['userHobby'],
            smoke: element['userSmoke'],
            drink: element['userDrink'],
            religion: element['userLoc'],

            imgSrc: "/images/human/" +element['userImg'],

            selected: false
          });
        });
        return retList;
      },
      rndLists(arr) { //배열 랜덤 섞음
        return arr.map((n) => { return [Math.random(), n] }).sort().map((n) => {  return n[1] });//n[1].selected = false;
      },
      selectedLists(arr) {
        return arr.filter((n) => n.selected === true);
      },
      gameNewStart() {
        const v = _O.Vars;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        _O.Html.set.bind(_O.Html)();
      },
      copyObj(obj) { //Deep Copy
        let copy = {};
        for (let attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
          }
        }
        copy.selected = false;
        return copy;
      },
      nextRound() {
        const v = _O.Vars;
        if(v.curRound <= 1) return;
        v.lists = _O.Ctrl.selectedLists(v.gameHistory[v.curRound.toString()]).map((n) => _O.Ctrl.copyObj(n));
        if(v.curRound > 1) v.curRound /= 2;
        v.curStage = 0;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        // console.log('v.lists::',v.lists, 'v.gameHistory::',v.gameHistory);
        _O.Html.setRoundTitle();
      },
      prevCancelOnOff() {
        const footerObj = document.getElementById('footer');
        if(_O.Vars.curRound === _O.Vars.maxRound) {
          if(_O.Vars.curRound > 1 && _O.Vars.curStage > 0) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        } else {
          if(_O.Vars.curRound > 1) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        }
      }
    };
    _O.Event = {
      clickItem(obj) {
        const v = _O.Vars;
        if(v.curRound === 2){
          let otherId = obj.querySelector('.userId').innerText;
          console.log("들어옴...")
          $.ajax({
            type: "post",
            //traditional: true,
            url: "getAccessOtherId",
            dataType : "json",
            data: {"userId":otherId},
            success: function (result) {
            },
            error: function (result) {
              console.log(result);

            }
          });

        }
        const idx = obj.id.split('_')[1];
        v.gameHistory[v.curRound.toString()][idx].selected = true;
        if(v.curStage < v.curRound/2) v.curStage++;
        if(v.curStage === v.curRound/2) _O.Ctrl.nextRound();
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      },
      overItem(obj) {
        const objs = document.querySelectorAll('#list_ideal li a[hover="true"]');
        objs.forEach((itm) => itm.setAttribute('hover', 'false'));
        if(obj.getAttribute('hover') === 'true') return;
        obj.setAttribute('hover', 'true');
      },
      outItem(obj) {
        if(obj.getAttribute('hover') === 'false') return;
        obj.setAttribute('hover', 'false');
      },
      clickCancel() {
        _O.start();
      },
      clickPrev() {
        const v = _O.Vars;
        if(v.curStage > 0) v.curStage--;
        else {
          v.gameHistory[v.curRound.toString()] = [];
          if(v.curRound < _O.Vars.maxRound) {
            v.curRound *= 2;
            v.curStage = v.curRound / 2 - 1;
          }
          _O.Html.setRoundTitle();
          v.lists = v.gameHistory[v.curRound.toString()];
        }

        v.lists[v.curStage * 2].selected = false;
        v.lists[v.curStage * 2 + 1].selected = false;
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      }
    };
    _O.Html = {
      set() {
        this.setRoundTitle();
        this.setContent();
      },
      setRoundTitle() {
        if(_O.Vars.curRound == 1)  document.getElementById('roundTitle').innerText = `하트 보내기♥`;

      },
      setItem() {
        const s = _O.Html.getItem();
        const tObj = document.getElementById('list_ideal');
        if(!tObj) return;
        tObj.innerHTML = s;
        if(_O.Vars.curRound === 1) _O.Html.setHistory();
      },
      getItem() {
        let s = '', i = _O.Vars.curStage * 2, length = i + (_O.Vars.curRound > 1 ? 2 : _O.Vars.curRound);
        for(i; i < length && length <= _O.Vars.curRound; i++) {
          s += `
          <li>
            <a class="item ${_O.Vars.curRound === 1 ? 'final' : ''}" id="item_${i}" hover="false" href="javascript:void(0);" onclick="lezhin.Event.clickItem(this);" onmouseover="lezhin.Event.overItem(this);" onmouseout="lezhin.Event.outItem(this);">
              <span class="thumb"><img src="${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['imgSrc']}" alt="남자 연예인 사진"></span>
              <strong style="display:none" class="userId">${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['id']}</strong>
              <strong> ${"이름 : "+_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['name']}</strong>
              <strong> ${"나이 : "+_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['age']}</strong>
              <strong> ${"지역 : "+_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['location']}</strong>
              <strong> ${"취미 : "+_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['hobby']}</strong>
              <strong> ${"흡연유무 : "+_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['smoke']}</strong>
              <strong> ${"음주여부 : "+_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['drink']}</strong>

                          
            </a>
          </li>
          `;
          /*
          if(_O.Vars.curRound === 1) {
            s += `
            <li id="history">
              <a class="modal final" id="modal" href="javascript:void(0);"></a>
            </li>
            `;
          }
          */
        }
        return s;
      },
      setContent() {
        const tObj = document.getElementById('content');
        tObj.className = 'content in_game';
        let s = `
          <ul class="list_ideal" id="list_ideal">
          ${this.getItem()}
          </ul>
        `;
        tObj.innerHTML = s;
      }
    }
  }) (lezhin);
}