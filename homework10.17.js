const queryString = new URLSearchParams(window.location.search);
const q1 = queryString.get('queryString1');
const q2 = queryString.get('queryString2');
// URLSearchParams에서 쿼리스트링을 쉽게 빼낼 수 있게 해주는 애가 queryString.get임.
// queryString.get과 queryString1과 2에 연결시켜주는 구간.
// url주소에 있는 쿼리스트링1,2 값을 q1과 q2에 넣어줌. 

const inputTextObjects = document.getElementsByName('input-child');
// input-child에 값을 접근한다. input 태그 및 박스에 접근한다.
const inputTextObject1 = inputTextObjects[0];
const inputTextObject2 = inputTextObjects[1];
// inputTextObjects[0]과 inputTextObjects[1]번째에 있는 값을 inputTextObect1과 2에 넣어준다.

inputTextObject1.value = q1;
inputTextObject2.value = q2;
// q1과 q2의 값을 inputTextObject1과 2에 넣어준다.
// 결국 input박스를 가리킨다는 말이다.
// 쿼리스트링으로 받은 값을 value에 넣어주는 구간.