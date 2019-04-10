{
  let btns = document.getElementsByTagName("button");
  let css = document.getElementById("different_css");
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      css.setAttribute("href", btns[i].innerHTML);
    };
  }
}