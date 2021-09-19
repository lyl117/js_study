const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

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
  for(let index in members){
    document.writeln(members[index]);
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
