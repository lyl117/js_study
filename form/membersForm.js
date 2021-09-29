const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');

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
  for (let index in members) {
    // let innerHTML = tagPre.innerHTML + members[index];
    // innerHTML += '\n';
    // tagPre.innerHTML = innerHTML;
    tagPre.innerHTML = tagPre.innerHTML+ members[index]+'\n';
  }
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  // window.location.reload();
  return members;
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
