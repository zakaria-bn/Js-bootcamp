let index = 10;
let jump = 2;
let end = 0;
i = index;

for (;;) {
  console.log(i);
  i -= jump;
  if (i === jump) break;
}
