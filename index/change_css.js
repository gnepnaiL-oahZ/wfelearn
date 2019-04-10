{
  let btns = document.getElementById("change_css").getElementsByTagName("button");
  let css = document.createElement("link");
  css.rel="stylesheet";
  css.href="";
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      css.setAttribute("href", btns[i].innerHTML);
    };
  }
  document.getElementsByTagName("head")[0].appendChild(css);
}