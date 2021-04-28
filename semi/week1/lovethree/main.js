const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    let ans = 0

    for (let i = n; i > 0; ) {
      if (i % 10 === 3) {
        ans = 1
      }
      i = (i - (i % 10)) / 10
    }
    if (ans === 1) {
      console.log(n + "!")
    } else {
      console.log(n)
    }
  }
}
