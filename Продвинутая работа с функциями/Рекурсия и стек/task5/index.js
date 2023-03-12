let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};


function printList(list) {
  let array = []
  let flag = list;
  while (flag) {
    array.unshift(flag.value)
    flag = flag.next;
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}


function printList(list) {  
  if (list.next) {
    printList(list.next); 
  } 
  console.log(list.value); 
}


printList(list); 