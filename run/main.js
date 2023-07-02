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
}

function button_clicked() {
  const code = document.getElementById("code").value;
  const input = document.getElementById("input").value;
  const flags = document.getElementById("flags").value;
  run(code, input, flags);
}