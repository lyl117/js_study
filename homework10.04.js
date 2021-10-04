const queryString = new URLSearchParams(window.location.search);
const inputText  = queryString.get('input-text');
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = inputText;
inputTextObject.focus();

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersCreate = function(member) {
  members.push(member);
  membersSet();
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
  return membersRead();
};

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

membersRead();