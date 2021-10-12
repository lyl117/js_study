const usersGet = sessionStorage.getItem('users');
const usersLogical = usersGet || '[]';
const users = JSON.parse(usersLogical);

const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');

// const inputTextObjects = document.getElementsByName('input-text');
// const inputTextObject = inputTextObjects[0];
const inputTextObject = document.getElementsByName('input-text')[0]; 

// inputTextObject.value = nameText;


// const inputHiddens = queryString.getAll('input-hidden');
// const inputHidden = inputHiddens[0];

// inputTextObject.focus();
// inputTextObject.blur();

// 문제 풀기

// const usersSubmit = function(form) {
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

// const usersCreate = function(user) {
//   users.push(user);
//   usersSet();
//   // window.location.reload();
//   return users;
// };

const usersCreate = function(form) {
  const userNameObject = form['user-name'];
  const userAgeObject = form['user-age'];
  users.push({
    name: userNameObject.value,
    age: userAgeObject.value
  });
  userNameObject.value = '';
  userAgeObject.value = '';
  usersSet();
  return usersRead();
  
};

const usersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  tagDivParent.innerHTML = '';
  const tagDivChild = document.getElementById('tag-div-child');
  for (let index in users) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
    const usersNameObject = document.getElementsByName('users-name')[index];
    const usersAgeObject = document.getElementsByName('users-age')[index];
    const usersUpdateObject = document.getElementsByName('users-update')[index];
    const usersDeleteObject = document.getElementsByName('users-delete')[index];
    // usersNameObject.value = users[index];
    usersNameObject.value = users[index].name;
    usersAgeObject.value = users[index].age;  
    usersUpdateObject.index = index;
    usersDeleteObject.index = index;

  }
  console.log('Readed', users);
  return users;
};


const usersDelete = function(index) {
  users.splice(index, 1);
  usersSet();
  // window.location.reload();
  return usersRead();
};

// const usersUpdate = function(index, user) {
//   users[index] = user;
//   usersSet();
//   // window.location.reload();
//   return users;
// };
const usersUpdate = function(index) {
  const userNameObject = document.getElementsByName('users-name')[index];
  const userAgeObject = document.getElementsByName('users-age')[index];
  console.log(userNameObject.value);
  const name = userNameObject.value;
  const age = userAgeObject.value;
  // users[index] = {
  //   name: userNameObject.value,
  //   age: userAgeObject.value
  // }
  users[index] = {
    name: name,
    age: age
  };
  usersSet();
  return usersRead();
};


const usersSet = function() {
  const usersSet = JSON.stringify(users);
  sessionStorage.setItem('users', usersSet);
};

usersRead();

