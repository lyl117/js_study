
// create
const membersCreate = function(form) {
  // form 태그에 함수를 이용한다.
    const memberNameObject = form['member-name'];
    const memberAgeObject = form['member-age'];
  // 이름과 나이 태그를 memberA,NameObject에 넣는다.
    const member = {
      name: memberNameObject.value,
      age: memberAgeObject.value
    };
  //오브젝트 형태로 넣어준다.
    const successFunction = function() {
  // 통신이 완료 후에 호출 될 함수이다.
      memberNameObject.value = '';
      memberAgeObject.value = '';
  // 한번 싹 다 지우기
      membersRead();
  // 지우고 난 후에 남은 것을 다시 보여준다.
    }
    const xhrObject = new XMLHttpRequest();
  // new와 클래스로 불러온다.
    xhrObject.onreadystatechange = function() {
      if (xhrObject.readyState !== 4) return;
  // 4가 아니면 끝난다.
      if (xhrObject.status === 200) {
  //200으로 정상 작동시킨다.
        successFunction();
  // successFunction을 호출한다.
      } else {
        const error = {
          status: xhrObject.status,
          statusText: xhrObject.statusText,
          responseText: xhrObject.responseText
        }
        console.error(error);
      }
    };
    xhrObject.open('POST', 'http://localhost:3100/api/v1/members');
  // post 메소드로 이런 주소로 통신하겠다.
    xhrObject.setRequestHeader('Content-Type', 'application/json');
  // 제이슨형식으로 할 거다.
    xhrObject.send(JSON.stringify(member));
  // 중요 !!! 새로 추가 될 내용을 제이슨 스트링파이로 감쌌다.
  // 통신은 무조건 문자로 주고 문자로 받는다. 
  };
  // 백엔드 통신 
router.post('/', function(request, response) {
  members.push(request.body);
// 바디로 넘긴다.
  console.log('Done members post', members);
  response.status(200).send({
    result: 'Created'
  });
}); 

// read
// - const membersGet = sessionStorage.getItem('members');
// - const membersLogical = membersGet || '[]';
// - const members = JSON.parse(membersLogical);
// + let members;
// 백엔드에서 회원정보를 받아와 스크립트 변수 멤버스에다 넣는다. 
// 멤버스함수를 다른 곳에서도 쓸 수 있게끔. 
// 값이 달라져서 const 보다 let을 사용.


const membersRead = function() {
  const successFunction = function(xhrObject) {
    const membersLogical = JSON.parse(xhrObject.responseText);
// resposeText의 문자를 오브젝트로 바꾸겠다. 
    members = membersLogical.members;
// 회원 6명을 불러오겠다.
    const tagDivParent = document.getElementById('tag-div-parent');
// 부모객체를 선택한다.
    tagDivParent.innerHTML = '';
// 싹다 지운다.
    const tagDivChild = document.getElementById('tag-div-child');
// 복사 당할 템플릿을 선택한다.
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
// 복사한다.
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
// 하나하나씩 선택한다.
      membersNameObject.value = members[index].name;
// 이름 인풋태그에 값을 넣겠다.
      membersAgeObject.value = members[index].age;
// 나이 인풋태그에 인덱스 값을 넣겠다.중요 ***
      membersUpdateObject.index = index;
      membersDeleteObject.index = index;
// 버튼객체는 원래 인덱스 값이 없다. 하지만 인덱스 값에 0을 넣어서 호출하겠다. 
// 속성을 하나 만든 다음에 0을 넣어준다.
    }
    console.log('Readed', members);
  };
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      successFunction(xhrObject);
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', 'http://localhost:3100/api/v1/members');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};

// body로 넘기고 싶으면, create로 넘겨야한다.넘기고 싶으면 쿼리스트링으로 url주소에 추가해야함.
// read와 delete는 바디로 넘길 수 없다.

// 백엔드 통신 
outer.get('/', function(request, response) {
  console.log('Done members get', members);
  response.status(200).send({
    result: 'Read',
// 결과적으로 완료된 상태 
    members: members
  });
});


//delete
const membersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
// 지우고 싶은 인덱스를 넣어야한다. 
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      membersRead();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('DELETE', url);
// 메쏘드는 delete 주소는 url
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};

// 백엔드 통신 
router.delete('/:index', function(request, response) {
  const index = Number(request.params.index);
// 끝에 index라서 위에 '/:index'가 인덱스이다.
  members.splice(index, 1);
// index 한개만 지우겠다.
// 동작을 하는 기능이 백엔드로 왔다라고 생각하면 쉬움.
// 프론트는 그냥 확인하는 정도 ! 
  console.log('Done members delete', members);
  response.status(200).send({
// 정상통신하겠다. 
    result: 'Deleted'
  });
});

// update
const membersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  const member = {
    name: name,
    age: age
  };
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      membersRead();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('PATCH', url);
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send(JSON.stringify(member));
};

//백엔드 통신 
router.patch('/:index', function(request, response) {
  const index = Number(request.params.index);
  members[index] = request.body;
// 바디로 넘긴다.
  console.log('Done members patch', members);
  response.status(200).send({
    result: 'Updated'
  });
});

// delete의 인덱스와 create 바디와 혼합된 유형 

