const usersGet = sessionStorage.getItem('users');
const usersLogical = usersGet || '[]';
const users = JSON.parse(usersLogical);

const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

const inputTextObjects = document.getElementsByName('input-text');
const inputTextObject = inputTextObjects[0];

// 문제 풀기

const usersSubmit = function(form) {
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

const usersCreate = function(user) {
  users.push(user);
  usersSet();
  // window.location.reload();
  return users;
};

const usersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  for (let index in users) {
    // let innerHTML = tagPre.innerHTML + users[index];
    // innerHTML += '\n';
    // tagPre.innerHTML = innerHTML;
    tagPre.innerHTML = tagPre.innerHTML+ users[index]+'\n';
  }
  return users;
};

const usersDelete = function(index) {
  users.splice(index, 1);
  usersSet();
  // window.location.reload();
  return users;
};

const usersUpdate = function(index, user) {
  users[index] = user;
  usersSet();
  // window.location.reload();
  return users;
};

const usersSet = function() {
  const usersSet = JSON.stringify(users);
  sessionStorage.setItem('users', usersSet);
};

usersRead();
