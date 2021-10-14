const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

// const queryString = new URLSearchParams(window.location.search);
// const nameText = queryString.get('input-text');

// // const inputTextObjects = document.getElementsByName('input-text');
// // const inputTextObject = inputTextObjects[0];
// const inputTextObject = document.getElementsByName('input-text')[0]; 

// inputTextObject.value = nameText;

// const url = new URL(window.location);
// const queryString = url.searchParams;
// const nameText = queryString.get('member-name');
// const nameText = queryString.get('member-age');
const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('member-name','member-age');
const inputTextObject = document.getElementsByName('member-name');
const inputTextObjects = document.getElementsByName('member-age');
const inputText = inputTextObject[0];


// const inputHiddens = queryString.getAll('input-hidden');
// const inputHidden = inputHiddens[0];

// inputTextObject.focus();
// inputTextObject.blur();

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
  const memberNameObject = form['member-name'];
  const memberAgeObject = form['member-age'];
  members.push({
    name: memberNameObject.value,
    age: memberAgeObject.value
  });
  memberNameObject.value = '';
  memberAgeObject.value = '';
  membersSet();
  return membersRead();
  
};

const membersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  tagDivParent.innerHTML = '';
  const tagDivChild = document.getElementById('tag-div-child');
  for (let index in members) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
    const membersNameObject = document.getElementsByName('members-name')[index];
    const membersAgeObject = document.getElementsByName('members-age')[index];
    const membersUpdateObject = document.getElementsByName('members-update')[index];
    const membersDeleteObject = document.getElementsByName('members-delete')[index];
    // membersNameObject.value = members[index];
    membersNameObject.value = members[index].name;
    membersAgeObject.value = members[index].age;  
    membersUpdateObject.index = index;
    membersDeleteObject.index = index;

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
  const memberNameObject = document.getElementsByName('members-name')[index];
  const memberAgeObject = document.getElementsByName('members-age')[index];
  console.log(memberNameObject.value);
  const name = memberNameObject.value;
  const age = memberAgeObject.value;
  // members[index] = {
  //   name: memberNameObject.value,
  //   age: memberAgeObject.value
  // }
  members[index] = {
    name: name,
    age: age
  };
  membersSet();
  return membersRead();
};


const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();

