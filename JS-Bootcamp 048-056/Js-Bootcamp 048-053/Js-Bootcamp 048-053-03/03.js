let start = 1;
let end = 6;
let breaker = 2;

for (i = 0; i < end; ) {
  i++;
  console.log(i);
  for(j=breaker;j<end;){
  console.log(`--${[j]}`)
  j+= breaker;
  }
}
