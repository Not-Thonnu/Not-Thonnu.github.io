var running = false;

async function run(code, inputs, flags) {
  old_log = console.log;
  const output = document.getElementById("output");
  output.innerText = "Running...";
  let i = 0
  window.console.log = function(msg) {
      i += 1;
      if (i == 2) {
        output.innerText = "";
      }
      if (i > 2) {
        output.innerText += msg + "\n";
      }
  };
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  await micropip.install("thunno2", keepgoing=true);
  await pyodide.runPython("code = " + JSON.stringify(code) + "; inputs = " + JSON.stringify(inputs) + "; flags = " + JSON.stringify(flags) + `
from thunno2.flags import run
from thunno2.lexer import tokenise
run(flags, tokenise(code)[1], inputs)`);
  running = false;
}

let params = {};
location.search
  .slice(1)
  .split("&")
  .forEach(function (pair) {
    pair = pair.split("=");
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  });

if (params !== {}) {
  if (Object.keys(params).includes("code")) {
    document.getElementById("code").value = params["code"];
  }
  if (Object.keys(params).includes("input")) {
    document.getElementById("input").value = params["input"];
  }
  if (Object.keys(params).includes("flags")) {
    document.getElementById("flags").value = params["flags"];
  }
  button_clicked();
}

function button_clicked() {
  if (running === false) {
    running = true;
    const code = document.getElementById("code").value;
    const input = document.getElementById("input").value;
    const flags = document.getElementById("flags").value;
    run(code, input, flags);
  }
}

async function copy_link() {
  const code = document.getElementById("code").value;
  const input = document.getElementById("input").value;
  const flags = document.getElementById("flags").value;
  let url =
    "https://Not-Thonnu.github.io/run?code=" +
    encodeURIComponent(code) + "&input=" + 
    encodeURIComponent(input) + "&flags=" +
    encodeURIComponent(flags);
  navigator.clipboard.writeText(url);
  const svg = document.getElementById("svg");
  old = '<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 640 512" onclick="javascript:get_link()"><style>svg{fill:#dddddd}</style><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>';
  svg.innerHTML = "<el style='font-size: 20px; vertical-align: middle;'>Copied!</el>"
  await new Promise(r => setTimeout(r, 1000));
  svg.innerHTML = old;
}

function get_link() {
    copy_link();
}

function adjustTextareaHeight() {
  var textarea = document.getElementById('input');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

document.getElementById("input").addEventListener("input", adjustTextareaHeight);