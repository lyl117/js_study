// input.value CRUD
// create
inputTextibject.value = 'abc';
// read
inputTextibject.a1 = inputTextibject.value;
inputTextibject.a2 = inputTextibject.value;
// update 
inputTextibject.value = 'membersDelete';
//delete
delete inputTextibject.value;
inputTextibject.value = '';

// Pre.innerHTML CRUD
const tagPre = document.getElementsById('tag-pre');
// tag-pre를 찾을거라고 선언
// pre 객체 create 
tagPre.innerHTML = 'abc';
// pre 객체 read
tagPre.a1 = tagPre.innerHTML;
tagPre.a2 = tagPre.innerHTML;
// pre객체 update 
tagPre.innerHTML= 'membersDelete(0)';
// pre 객체 delete 
delete tagPre.innerHTML;
tagPre.innerHTML='';

const queryString = new URLSearchParams(window.location.search);
// new는 클래스 앞에 붙으며, window.location.search 값을 queryString에 넘김을 의미함
const nameText = queryString.get('input-text');
// 쿼리 스트링의 값을 nameText에 넘긴다. 

class Class1 {
  // 클래스는 무조건 대문자로 시작한다.
    v1 = '멤버 변수';
    m1 = function() {
      return '멤버 메소드';
    };
  // 클래스는 무조건 { 대괄호열고 } 대괄호 닫는다.
  }
  const class1 = new Class1();
  // 이렇게 선언을 해줘야 값이 남는다.
  const c1 = class1.v1;
  const c2 = class1.m1();
  // 하지만 v1,m1은 값이 선언되지 않아 에러가 뜬다.

  const inputTextObjects = document.getElementsByName('input-text');
  // input-text를 선언함
  const inputTextObject = inputTextObjects[0];
  // 0번째 값을 넘김

  const inputTextObject = document.getElementsByName('input-text')[0];
  // 위의 두줄을 한줄로 줄인 것

const inputHiddens = queryString.getAll('input-hidden');
// get all은 무조건 배열로 나타나며, 복수일 떄 사용, 
// 즉 document.getElementsByName 과 비슷하다.
const inputHidden = inputHiddens[0];
// input-hidden의 값의 0번째 값을 넘김을 의미

inputTextObject.focus();
// 구글과 같은 검색창에 '|' 이 깜박거릴는것을 볼 수 있다. 
// 짝대기를 만드는 것이 focus이다.
inputTextObject.blur();
// 깜박거리는 짝대기를 사라지게 하는 것이 blur이다.