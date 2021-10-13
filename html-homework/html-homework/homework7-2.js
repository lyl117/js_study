const copy = function() {
  console.log('copy');
  // 여기에 프로그램을 작성 해주세요.
  const tagDivParent = document.getElementById('div-parent');
  const tagDivChilds = document.getElementsByName('input-child');
  const tagDivChild = tagDivChilds[0];
  const newDivChild = tagDivChild.cloneNode(true);
  tagDivParent.appendChild(newDivChild);
  
}
