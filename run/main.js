var running = false;

const bytecount = document.getElementById("bytecount");

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

let flag = false;
if (Object.keys(params).includes("code")) {
  flag = true;
  document.getElementById("code").value = params["code"];
}
if (Object.keys(params).includes("input")) {
  flag = true;
  document.getElementById("input").value = params["input"];
}
if (Object.keys(params).includes("flags")) {
  flag = true;
  document.getElementById("flags").value = params["flags"];
}

if (flag === true) {
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

async function get_link() {
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
  old = '<input type="button" onclick="javascript:get_link()" value="     " class="link-button" />';
  svg.innerHTML = "<el style='font-size: 20px; vertical-align: middle;'>Copied!</el>"
  await new Promise(r => setTimeout(r, 1000));
  svg.innerHTML = old;
}

function getBytecount() {
  // TODO: make accurate
  bytecount.innerText = '' + document.getElementById("code").value.length;
}

function adjustTextareaHeight1() {
  var textarea = document.getElementById('input');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function adjustTextareaHeight2() {
  var textarea = document.getElementById('flags');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function adjustTextareaHeight3() {
  var textarea = document.getElementById('code');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
  getBytecount();
}

getBytecount();

document.getElementById("input").addEventListener("input", adjustTextareaHeight1);
document.getElementById("flags").addEventListener("input", adjustTextareaHeight2);
document.getElementById("code").addEventListener("input", adjustTextareaHeight3);