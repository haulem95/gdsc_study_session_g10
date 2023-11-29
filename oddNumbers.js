function OddPattern(num) {

  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      let pattern = '';
      for (let j = 1; j <= i; j += 2) {
        pattern += j + ' ';
      }
      console.log(pattern);
    }
  }
}
OddPattern(9);
