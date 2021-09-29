
const copy = function() {
  console.log('copy');
  // 여기에 프로그램을 작성 해주세요.
  const inputOriginal = document.getElementById("input-original");
  const inputCopy1 = document.getElementById("input-copy1");
  const inputCopy2 = document.getElementById("input-copy2");
  console.log(inputOriginal.value);
  inputCopy1.value = inputOriginal.value;
  inputCopy2.value = inputOriginal.value;

 

}