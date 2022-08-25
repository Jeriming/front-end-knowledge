export default class Logger {
  constructor(domKey = "looger-preview") {
    this._initInstance(domKey);
  }

  _initInstance(key) {
    if(!document.body) {
      throw new EvalError("Please take this script on document body!")
    }
    let dom = document.getElementById(key);
    if (!dom) {
      dom = document.createElement("pre");
      dom.setAttribute("id", key);
      document.body.appendChild(dom);
    }
    this._instance = dom;
  }

  _scrollToBottom(target, height) {
    target.scrollTo({ top: height });
  }

  print() {
    if (!this._instance) throw new TypeError("No't init Dom Instance");
    for (let i = 0; i < arguments.length; i++) {
      this._instance.innerHTML += " " + (typeof arguments[i] === 'object' ? JSON.stringify(arguments[i]) : arguments[i]);
    }
    this._instance.innerHTML += '<br>';
    this._scrollToBottom(window, document.body.scrollHeight)
  }

  clear() {
    this._instance.innerHTML = "";
  }
}
