const display = document.getElementById("display")
const Buttonone = document.getElementById("one")
const Buttontwo = document.getElementById("two")
const Buttonthr = document.getElementById("three")
const Buttonfou = document.getElementById("four")
const Buttonfiv = document.getElementById("five")
const Buttonsix = document.getElementById("six")
const Buttonsev = document.getElementById("seven")
const Buttoneig = document.getElementById("eight")
const Buttonnin = document.getElementById("nine")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
Buttonone.onclick = function() {
  // count を更新
  count = count * 10 + 1
  // count を表示
  display.textContent = count
}

Buttontwo.onclick = function() {
  // count を更新
  count = count * 10 + 2
  // count を表示
  display.textContent = count
}

Buttonthr.onclick = function() {
  // count を更新
  count = count * 10 + 3
  // count を表示
  display.textContent = count
}

Buttonfou.onclick = function() {
  // count を更新
  count = count * 10 + 4
  // count を表示
  display.textContent = count
}

Buttonfiv.onclick = function() {
  // count を更新
  count = count * 10 + 5
  // count を表示
  display.textContent = count
}

doubleButton.onclick = function() {
  // count を更新
  count = count * 2
  // count を表示
  display.textContent = count
}
