let count = 0
const genkiFunction = function() {
  const countUp = function() {
    count += 1
    if (count % 3 === 0) {
      console.log(count + "!")
    } else {
      console.log(count)
    }
  }
  setInterval(countUp, 1000)
}
