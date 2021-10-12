const copy = function() {
  console.log('copy');
  // 여기에 프로그램을 작성 해주세요.
  const membersRead = function() {
    const tagDivParent = document.getElementById('div-parent');
    const tagDivChild = document.getElementById('input-child');
    tagDivParent.innerHTML = '';
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
    }
    console.log('Readed', members);
    return members;
  };
  
}
