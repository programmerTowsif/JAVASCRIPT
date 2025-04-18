let i1 = 10;
while (i1 >= 1) {
  console.log(i1);
  i1--;
}

 let i2 = 1;
 while (i2 <= 4) {
   let j = 1;
   let row = "";
   while (j <= i) {
     row += j + " ";
     console.log(row);
     j++;
   }
   //   console.log(row.trim())
   console.log(row);
   i2++;
 }

let i3 = 4;
while (i3 >= 1) {
  let j = 1;
  let row = "";
  while (j <= i3) {
    row += j + " ";
    j++;
  }
  console.log(row);
  i3--;
}

let i4 = 1;
while (i4 <= 5) {
  let j = 1;
  while (j <= 10) {
    console.log(`${i4} X ${j} = ${i4 * j}`);
    j++;
  }
  i4++;
}


let i5 = 1;
while (i5 <= 4) {
  let j = 1;
  let line = "";
  while (j <= i) {
    line += "* ";
    j++;
  }
  console.log(line);
  i5++;
}