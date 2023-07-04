var running = false;

const bytecount = document.getElementById("bytecount");

var old_log;

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

async function get_cgcc_post() {
  const code = document.getElementById("code").value;
  const input = document.getElementById("input").value;
  const flags = document.getElementById("flags").value;
  const plural = document.getElementById("plural").innerText;
  let url =
    "https://Not-Thonnu.github.io/run?code=" +
    encodeURIComponent(code) + "&input=" + 
    encodeURIComponent(input) + "&flags=" +
    encodeURIComponent(flags);
  flags_md = flags !== "" ? " `" + flags + "`" : "";
  let cgcc_post =
    "# [Thunno 2](https://github.com/Thunno/Thunno2)" + flags_md +
    ", " + bytecount.innerText + " byte" + plural + "\n\n```\n" + code +
    "\n```\n\n[Try it online!](" + url + ")"
  navigator.clipboard.writeText(cgcc_post);
  const cgcc = document.getElementById("cgcc");
  old = '<input type="button" onclick="javascript:get_cgcc_post()" value="     " class="cgcc-button" />';
  cgcc.innerHTML = "<el style='font-size: 20px; vertical-align: middle;'>Copied!</el>"
  await new Promise(r => setTimeout(r, 1000));
  cgcc.innerHTML = old;
}

function getBytecount() {
  let code = document.getElementById("code");
  let utf8 = document.getElementById("utf8");
  let plural = document.getElementById("plural");
  const code_page = [161, 162, 163, 164, 165, 166, 169, 172, 174, 181, 189, 191, 8364, 198, 199, 208, 209, 215, 216, 338, 222, 223, 230, 231, 240, 305, 567, 241, 247, 248, 339, 254, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 182, 176, 185, 178, 179, 8308, 8309, 8310, 8311, 8312, 8313, 8314, 8315, 8316, 8317, 8318, 385, 391, 394, 401, 403, 408, 11374, 413, 420, 428, 434, 548, 595, 392, 599, 402, 608, 614, 409, 625, 626, 421, 672, 636, 642, 429, 651, 549, 7840, 7684, 7692, 7864, 7716, 7882, 7730, 7734, 7746, 7750, 7884, 7770, 7778, 7788, 7908, 7806, 7816, 7924, 7826, 550, 7682, 266, 7690, 278, 7710, 288, 7714, 304, 319, 7744, 7748, 558, 7766, 7768, 7776, 7786, 7814, 7818, 7822, 379, 7841, 7685, 7693, 7865, 7717, 7883, 7731, 7735, 7747, 7751, 7885, 7771, 7779, 7789, 167, 196, 7817, 7925, 7827, 551, 7683, 267, 7691, 279, 7711, 289, 7715, 320, 7745, 7749, 559, 7767, 7769, 7777, 7787, 7815, 7819, 7823, 380, 171, 187, 8216, 8217, 8220, 8221, 10];
  if ([...code.value].every(c => [...code_page].includes(c.charCodeAt(0)))) {
    utf8.innerText = '';
    bytecount.innerText = '' + code.value.length;
  } else {
    utf8.innerText = '(UTF-8)';
    bytecount.innerText = '' + (new TextEncoder().encode(code.value)).length;
  }
  if (+bytecount.innerText === 1) {
    plural.innerText = '';
  } else {
    plural.innerText = 's';
  }
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
