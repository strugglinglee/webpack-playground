import _ from "lodash";
import printMe from "./print";

function component() {
  const element = document.createElement("div");

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const btn = document.createElement("button");
  btn.innerHTML = "print";
  btn.addEventListener("click", printMe);
  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());
