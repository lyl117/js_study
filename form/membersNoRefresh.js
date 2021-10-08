const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');

// const inputTextObjects = document.getElementsByName('input-text');
// const inputTextObject = inputTextObjects[0];
const inputTextObject = document.getElementsByName('input-text')[0]; 

inputTextObject.value = nameText;


const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

inputTextObject.focus();
inputTextObject.blur();

// 문제 풀기

// const membersSubmit = function(form) {
//   const inputTextObject = form['input-text'];
//   try {
//     const evalReturn = eval(inputTextObject.value);
//     console.log(evalReturn);
//   } catch(error) {
//     console.error(error);
//     alert(error);
//     return false;
//   }
// }

// const membersCreate = function(member) {
//   members.push(member);
//   membersSet();
//   // window.location.reload();
//   return members;
// };

const membersCreate = function(form) {
  const inputTextObject = form['input-text'];
  members.push(inputTextObject.value);
  membersSet();
  inputTextObject.value = '';
  return membersRead();
  
};

const membersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  const tagDivChild = document.getElementById('tag-div-child');
  tagDivParent.innerHTML = '';
  for (let index in members) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
  }
  console.log('Readed', members);
  return members;
};


const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  // window.location.reload();
  return membersRead();
};

// const membersUpdate = function(index, member) {
//   members[index] = member;
//   membersSet();
//   // window.location.reload();
//   return members;
// };
const membersUpdate = function(index) {
  const test = document.getElementsByName('members-name')[index];
  console.log(test.value);
  const name = test.value;
  members[index] = name;
  membersSet();
  return membersRead();
};


const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();

