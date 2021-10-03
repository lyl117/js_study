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

const membersSubmit = function(form) {
  const inputTextObject = form['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  // window.location.reload();
  return members;
};

const membersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  tagPre.innerHTML = '';
  for (let index in members) {
    tagPre.innerHTML += '<input type="text" name="members-name" value="' + members[index] + '">';
    tagPre.innerHTML += '<button onclick="membersDelete(' + index + ')">Delete</button>';
    tagPre.innerHTML += '\n';
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

const membersUpdate = function(index, member) {
  members[index] = member;
  membersSet();
  // window.location.reload();
  return members;
};

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();

