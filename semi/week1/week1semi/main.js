const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")
const choice3 = document.getElementById("choice3")
const feedback = document.getElementById("feedback")

choice1.onclick = function() {
  feedback.textContent = "不正解。どうみてもはんぺんじゃないじゃん。"
}
choice2.onclick = function() {
  feedback.textContent = "不正解。作者は蒲鉾の方が好みだったりする。"
}
choice3.onclick = function() {
  feedback.textContent = "正解！ちくわといえばこれだよね～"
}
