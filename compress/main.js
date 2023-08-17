const CODEPAGE = [161, 162, 163, 164, 165, 166, 169, 172, 174, 181, 189, 191, 8364, 198, 199, 208, 209, 215, 216, 338, 222, 223, 230, 231, 240, 305, 567, 241, 247, 248, 339, 254, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 182, 176, 185, 178, 179, 8308, 8309, 8310, 8311, 8312, 8313, 8314, 8315, 8316, 8317, 8318, 385, 391, 394, 401, 403, 408, 11374, 413, 420, 428, 434, 548, 595, 392, 599, 402, 608, 614, 409, 625, 626, 421, 672, 636, 642, 429, 651, 549, 7840, 7684, 7692, 7864, 7716, 7882, 7730, 7734, 7746, 7750, 7884, 7770, 7778, 7788, 7908, 7806, 7816, 7924, 7826, 550, 7682, 266, 7690, 278, 7710, 288, 7714, 304, 319, 7744, 7748, 558, 7766, 7768, 7776, 7786, 7814, 7818, 7822, 379, 7841, 7685, 7693, 7865, 7717, 7883, 7731, 7735, 7747, 7751, 7885, 7771, 7779, 7789, 167, 196, 7817, 7925, 7827, 551, 7683, 267, 7691, 279, 7711, 289, 7715, 320, 7745, 7749, 559, 7767, 7769, 7777, 7787, 7815, 7819, 7823, 380, 171, 187, 8216, 8217, 8220, 8221];

function to_base(n, b) {
    n = BigInt(n)
    b = BigInt(b)
    r = [];
    while (n > 0n) {
        r.push(Number(n % b));
        n /= b;
    }
    return r.reverse();
}

function from_base(l, b) {
    r = 0n;
    for (i = 0n; i < l.length; i++) {
        r += b**i * l[i];
    }
    return r;
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) && // ...and ensure strings of whitespace fail...
         (str === str.replaceAll(".", "")) // ...and make sure it isn't a float
}

function integer_compression(n) {
    if (n == -1) {
        return "u";
    }
    const CONSTANTS = {
        10: 'T',
        16: 403,
        100: 614,
        128: 'kl',
        256: 608,
        512: 'kn',
        1000: 'k1',
        1024: 'ko',
        2048: 'kp',
        4096: 'kq',
        8192: 'kr',
        10000: 'k2',
        16384: 'ks',
        32768: 'kt',
        65536: 'ku',
        100000: 'k3',
        1000000: 'k4',
        10000000: 'k5',
        100000000: 'k6',
        1000000000: 'k7',
        10000000000: 'k8',
        100000000000: 'k9',
        1000000000000: 'k0',
    };
    if (Object.keys(CONSTANTS).includes(n + "")) {
        let r = CONSTANTS[n + ""];
        if (r !== r + "") {
            r = String.fromCharCode(r);
        }
        return r;
    }
    if (n < 0) {
        return integer_compression(-n) + String.fromCharCode(7748);
    }
    if (n < 100) {
        return n + "";
    }
    if (n < 357) {
        return String.fromCharCode(7751) + String.fromCharCode(CODEPAGE[Number(n) - 101]);
    }
    if (n < 65536) {
        return String.fromCharCode(171) + to_base(n, 256).map(i => String.fromCharCode(CODEPAGE[i])).join("");
    }
    return String.fromCharCode(187) + to_base(n, 255).map(i => String.fromCharCode(CODEPAGE[i + (i > 250)])).join("") + String.fromCharCode(187);
}

function string_compression(s) {
    const STRING = " abcdefghijklmnopqrstuvwxyz";
    if (s === "") {
        return '""';
    }
    if (s.length === 1) {
        return "'" + s;
    }
    if (s.length === 2) {
        return "`" + s;
    }
    if (s.length === 3) {
        return String.fromCharCode(651) + s;
    }
    if (/^[a-z ]*$/.test(s)) { // Lowercase
        let a = [...s].reverse().map(c => BigInt(STRING.indexOf(c)));
        let b = to_base(from_base(a, 27n), 255n);
        return String.fromCharCode(8220) + b.map(i => String.fromCharCode(CODEPAGE[i + (i > 253)])).join("") + String.fromCharCode(8220);
    }
    if (/^(?:[A-Z][a-z]* )*$/.test(s + " ")) { // Title case
        let a = [...s.toLowerCase()].reverse().map(c => BigInt(STRING.indexOf(c)));
        let b = to_base(from_base(a, 27n), 255n);
        return String.fromCharCode(8221) + b.map(i => String.fromCharCode(CODEPAGE[i + (i > 253)])).join("") + String.fromCharCode(8221);
    }
    return '"' + s + '"'
}

function integer_change() {
  var textarea = document.getElementById('integer');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
  let out = document.getElementById("int-out");
  if (isNumeric(textarea.value)) {
      out.innerText = integer_compression(eval(textarea.value + "n"));
  } else {
      out.innerText = "";
  }
}

function string_change() {
  var textarea = document.getElementById('string');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
  let out = document.getElementById("str-out");
  out.innerText = string_compression(textarea.value);
}

document.getElementById("integer").addEventListener("input", integer_change);
document.getElementById("string").addEventListener("input", string_change);