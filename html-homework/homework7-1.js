const queryString = new URLSearchParams(window.location.search);
// const nameText = queryString.get('input-text');
const q1 = queryString.get('queryString1');
const q2 = queryString.get('queryString2');

const inputTextObjects = document.getElementsByName('input-child');
const inputTextObject1 = inputTextObjects[0];
const inputTextObject2 = inputTextObjects[1];

inputTextObject1.value = q1;
inputTextObject2.value = q2;