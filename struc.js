
function goMyCode(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentCode = arr[i];
      let my = i - 1;
  
      while (my >= 0 && arr[my] > currentCode) {
        arr[my + 1] = arr[my];
        my--;
      }
  
      arr[my + 1] = currentCode;
    }
  }
  
  let arr = [55, 67, 11, 13, 88, 99, 32, 54];
  goMyCode(arr);
  console.log("goMyCode:", arr);
  