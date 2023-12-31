const table = document.getElementById("table");

let d = new Map();

d.set('"', 'String literal');
d.set("'", 'One-character string literal');
d.set('ʋ', 'Three-character string literal');
d.set('“', 'Lowercase string compression');
d.set('”', 'Title case string compression');
d.set('‘', 'Lowercase dictionary string compression');
d.set('’', 'Title case dictionary string compression');
d.set('»', 'Integer compression');
d.set('«', 'Small integer compression');
d.set('¿', 'Integer list compression');
d.set('[', 'Open list literal');
d.set(']', 'Close list literal');
d.set('#', 'Single character comment');
d.set('#⎵', 'Single line comment');
d.set('#{', 'Block comment');
d.set('¡', 'Get variable');
d.set('!', 'Set variable');
d.set('ı', 'Map');
d.set('€', 'Single function map');
d.set('æ', 'Filter');
d.set('œ', 'Single function filter');
d.set('Þ', 'Sort by');
d.set('þ', 'Single function sort by');
d.set('Ñ', 'Group by');
d.set('ñ', 'Single function group by');
d.set('ȷ', 'Outer product');
d.set('¥', 'Fixed point');
d.set('{', 'Open FOR loop');
d.set('}', 'Close FOR loop');
d.set('(', 'Open WHILE loop');
d.set(')', 'Close WHILE loop');
d.set('⁽', 'Open FOREVER loop');
d.set('⁾', 'Close FOREVER loop');
d.set('?', 'IF statement');
d.set(':', 'ELSE statement');
d.set(';', 'Close statement');
d.set('ç', 'Pair apply');
d.set('Ð', 'Triplicate');
d.set('A', 'Absolute value / Is alpha');
d.set('B', 'Convert to base');
d.set('C', 'Chr / Ord');
d.set('D', 'Duplicate');
d.set('E', 'Is even / Eval');
d.set('F', 'Factors / Substrings');
d.set('G', 'Maximum');
d.set('H', 'Convert from hexadecimal');
d.set('I', 'Inclusive range / Slicing / Interleave');
d.set('J', 'Join');
d.set('K', 'Push the stack');
d.set('L', 'Lowered range / Lowercase');
d.set('M', 'Minimum');
d.set('N', 'Cast to integer');
d.set('O', 'Two power / Split by spaces');
d.set('P', 'Prime check / Swap case');
d.set('Q', 'Not equal to');
d.set('R', 'One-based range / Uppercase');
d.set('S', 'Sum');
d.set('T', 'Ten');
d.set('U', 'Uniquify');
d.set('V', 'Truthy indices / Round / ROT-13');
d.set('W', 'Wrap');
d.set('X', 'Store in x');
d.set('Y', 'Store in y');
d.set('Z', 'Zip');
d.set('a', 'Append');
d.set('b', 'From base');
d.set('c', 'Count / nCr');
d.set('d', 'Digits / Characters');
d.set('e', 'Ten power / Comma split');
d.set('f', 'Prime factors / Case');
d.set('g', 'GCD');
d.set('h', 'Head');
d.set('i', 'Indexing');
d.set('j', 'Join');
d.set('k', 'Constant digraphs');
d.set('l', 'Length');
d.set('m', 'Mean');
d.set('n', 'Loop variable');
d.set('o', 'Remove');
d.set('p', 'Product');
d.set('q', 'Quit');
d.set('r', 'Reverse');
d.set('s', 'Swap');
d.set('t', 'Tail');
d.set('u', 'Minus one');
d.set('v', 'Replace');
d.set('w', 'Factorial / Remove whitespace');
d.set('x', 'Push <code>x</code>');
d.set('y', 'Push <code>y</code>');
d.set('z', 'Uninterleave');
d.set('^', 'Uninterleave and dump');
d.set('0', 'Literal digit <code>0</code>');
d.set('1', 'Literal digit <code>1</code>');
d.set('2', 'Literal digit <code>2</code>');
d.set('3', 'Literal digit <code>3</code>');
d.set('4', 'Literal digit <code>4</code>');
d.set('5', 'Literal digit <code>5</code>');
d.set('6', 'Literal digit <code>6</code>');
d.set('7', 'Literal digit <code>7</code>');
d.set('8', 'Literal digit <code>8</code>');
d.set('9', 'Literal digit <code>9</code>');
d.set('.', 'One half');
d.set('Ȧ', 'Any / Is alpha-num');
d.set('Ḃ', 'Convert from binary');
d.set('Ċ', 'Codepage Chr / Ord');
d.set('Ḋ', 'Is divisible');
d.set('Ė', 'Enumerate / Inclusive zero range');
d.set('Ḟ', 'Flatten');
d.set('Ġ', 'Dyadic GCD');
d.set('Ḣ', 'Head extract');
d.set('İ', 'One-based indexing');
d.set('Ŀ', 'Left justify');
d.set('Ṁ', 'Mode');
d.set('Ṅ', 'Negate / Run length encoding');
d.set('Ȯ', 'Index of');
d.set('Ṗ', 'Cartesian product');
d.set('Ṙ', 'Repr');
d.set('Ṡ', 'Sort');
d.set('Ṫ', 'Tail extract');
d.set('Ẇ', 'Chunk');
d.set('Ẋ', 'Store in x without popping');
d.set('Ẏ', 'Store in y without popping');
d.set('Ż', 'Length range');
d.set(',', 'Pair');
d.set('£', 'Print');
d.set('⁺', 'Increment');
d.set('⁻', 'Decrement');
d.set('⁼', 'Exactly equal');
d.set('+', 'Addition');
d.set('-', 'Subtraction');
d.set('×', 'Multiplication');
d.set('/', 'Division');
d.set('*', 'Exponentiation');
d.set('%', 'Modulo');
d.set('÷', 'Integer division');
d.set('_', 'Swapped subtraction');
d.set('\\', 'Swapped division');
d.set('@', 'Swapped exponentiation');
d.set('Œ', 'Swapped modulo');
d.set('¦', 'Swapped integer division');
d.set('=', 'Equal to');
d.set('<', 'Less than');
d.set('>', 'Greater than');
d.set('©', 'Less than or equal to');
d.set('®', 'Greater than or equal to');
d.set('&', 'Logical AND');
d.set('|', 'Logical OR');
d.set('~', 'Logical NOT');
d.set('$', 'Next input');
d.set('¤', 'Input list');
d.set('ð', 'Space');
d.set('¢', 'Print without a newline');
d.set('ß', 'Print without popping');
d.set('¶', 'Newline');
d.set('Ç', 'Pipe character');
d.set('¬', 'Non-vectorised logical NOT');
d.set('§', 'Dyadic maximum');
d.set('½', 'Halve');
d.set('ȧ', 'Assign');
d.set('ḃ', 'Binary');
d.set('ċ', 'Combinations / Set union');
d.set('ḋ', 'Divmod / From list of digits');
d.set('ė', 'Exclusive one range / Length range');
d.set('ḟ', 'Prime factor exponents / Title case');
d.set('ġ', 'Group consecutive');
d.set('ḣ', 'Head remove');
d.set('ŀ', 'LCM');
d.set('ṁ', 'Median');
d.set('ṅ', 'Iteration index');
d.set('ȯ', 'Set intersection / Round');
d.set('ṗ', 'Permutations / Set difference');
d.set('ṙ', 'Right justify');
d.set('ṫ', 'Tail remove');
d.set('ṡ', 'Cumulative sums');
d.set('ẇ', 'Chunk wrap');
d.set('ẋ', 'Apply to x');
d.set('ẏ', 'Apply to y');
d.set('ż', 'Length range');
d.set('Ạ', 'Lowercase alphabet');
d.set('Ḅ', 'Base conversion / Character multiply / Regex split');
d.set('Ḍ', 'Double');
d.set('Ẹ', 'Dump onto stack');
d.set('Ḥ', 'Hexadecimal');
d.set('Ị', 'Reciprocal / Remove non-alphabets');
d.set('Ḳ', 'Bifurcate');
d.set('Ḷ', 'Dyadic LCM');
d.set('Ṃ', 'Mirror');
d.set('Ṇ', 'Transliterate');
d.set('Ọ', 'Dyadic minimum');
d.set('Ṛ', 'Combinations with replacement');
d.set('Ṣ', 'Forward differences');
d.set('Ṭ', 'Transpose');
d.set('Ụ', 'Rotate left once');
d.set('Ṿ', 'Rotate right once');
d.set('Ẉ', 'Uninterleave');
d.set('Ỵ', 'Rotate left / Left bit shift');
d.set('Ẓ', 'Rotate right / Right bit shift');
d.set('Ä', 'Number to alphabet / Alphabet to number');
d.set('°', 'First input');
d.set('¹', 'Second input');
d.set('²', 'Square');
d.set('³', 'Cube');
d.set('⁴', 'Fourth power');
d.set('⁵', 'Fifth power');
d.set('⁶', 'Third input');
d.set('⁷', 'Third last input');
d.set('⁸', 'Second last input');
d.set('⁹', 'Last input');
d.set('Ɓ', 'Execute without popping');
d.set('Ƈ', 'Contains / nPr');
d.set('Ɗ', 'Drop at index');
d.set('Ƒ', 'Unique prime factors / Substrings / Sublists');
d.set('Ɠ', 'Sixteen');
d.set('Ƙ', 'First n integers');
d.set('Ɱ', 'Palindromise');
d.set('Ɲ', 'Integer partitions / Join by newlines');
d.set('Ƥ', 'Prepend');
d.set('Ƭ', 'Transpose with filler');
d.set('Ʋ', 'Cumulative reduce by');
d.set('Ȥ', 'Push global array');
d.set('ɓ', 'Boolify');
d.set('ƈ', 'Counts');
d.set('ɗ', 'Parity / Second half');
d.set('ƒ', 'Prefixes');
d.set('ɠ', 'Two hundred and fifty-six');
d.set('ɦ', 'One hundred');
d.set('ƙ', 'Grade up / Increment twice');
d.set('ɱ', 'Head slice');
d.set('ɲ', 'Tail slice');
d.set('ƥ', 'Pop');
d.set('ʠ', 'Powerset');
d.set('ɼ', 'Random choice');
d.set('ʂ', 'Sum each / Sign / Sentence case');
d.set('ƭ', 'Square root');
d.set('ȥ', 'Add to global array');
d.set('ạ', 'All equal');
d.set('ḅ', 'Equals one');
d.set('ḍ', 'Symmetric set difference');
d.set('ẹ', 'Enclose');
d.set('ḥ', 'Concatenate');
d.set('ị', 'Corresponding filter');
d.set('ḳ', 'Sorted uniquify');
d.set('ḷ', 'Length of each / Complement / Is lower');
d.set('ṃ', 'Ceil / Is vowel / Reverse each');
d.set('ṇ', 'Codepage integer compression');
d.set('ọ', 'Repeat');
d.set('ṛ', 'Absolute difference / Zfill / Surround');
d.set('ṣ', 'Suffixes / Spaces');
d.set('ṭ', 'Triple swap');
d.set('ẉ', 'Cartesian power');
d.set('ỵ', 'Head remove');
d.set('ẓ', 'Tail remove');
d.set('øB', 'Brackets are balanced');
d.set('øD', 'Optimal dictionary compression');
d.set('øv', 'Global canvas draw');
d.set('øV', 'Blank canvas draw');
d.set('ø^', 'Clear global canvas');
d.set('ø<', 'Starts with');
d.set('ø>', 'Ends with');
d.set('ØC', 'Center');
d.set('ØD', 'Depth');
d.set('ØE', 'Extend/truncate to length');
d.set('ØG', 'Longest element');
d.set('ØI', 'Multidimensional index');
d.set('ØM', 'Shortest element');
d.set('Ø.', 'Dot product');
d.set('Ø/', 'Main anti-diagonal');
d.set('Ø“', 'All diagonals');
d.set('Ø”', 'All anti-diagonals');
d.set('ÆC', 'Cosine');
d.set('ÆD', 'Degrees');
d.set('ÆE', 'Exponent');
d.set('ÆF', 'nth Fibonacci number');
d.set('ÆH', 'Hypotenuse');
d.set('ÆI', 'Insignificant');
d.set('ÆL', 'Custom base logarithm');
d.set('ÆN', 'Natural logarithm');
d.set('ÆP', 'nth prime number');
d.set('ÆR', 'Radians');
d.set('ÆS', 'Sine');
d.set('ÆT', 'Tangent');
d.set('Æc', 'Inverse cosine');
d.set('Æl', 'Common logarithm');
d.set('Æs', 'Inverse sine');
d.set('Æt', 'Inverse tangent');
d.set('Æḷ', 'Base 2 logarithm');
d.set('Æ&', 'Bitwise AND');
d.set('Æ|', 'Bitwise OR');
d.set('Æ^', 'Bitwise XOR');
d.set('Æ~', 'Bitwise NOT');
d.set('Æ²', 'Perfect square');
d.set('Æ³', 'Perfect cube');
d.set('Æ⁴', 'Perfect fourth power');
d.set('Æ⁵', 'Perfect fifth power');
d.set('µR', 'To Roman numerals / From Roman numerals');
d.set('µT', 'Type');
d.set('µU', 'Connected uniquify');
d.set('µr', 'Random shuffle');
d.set('µv', 'Trim');
d.set('µ<', 'Left trim');
d.set('µ>', 'Right trim');
d.set('µµ', 'Recursive environment');
d.set('µ£', 'Print each');
d.set('µ&', 'Non-vectorised logical AND');
d.set('µ|', 'Non-vectorised logical OR');
d.set('µ^', 'Non-vectorised logical XOR');
d.set('µƲ', 'Single function reduce by');
d.set('µɼ', 'Single function right reduce by');
d.set('µƇ', 'Single function right cumulative reduce by');
d.set('µʋ', 'Right reduce by');
d.set('µ€', 'Apply to every nth item');
d.set('µ«', 'Rotate stack left');
d.set('µ»', 'Rotate stack right');
d.set('µ!', 'Reverse stack');
d.set('µÑ', 'Adjacent group by');
d.set('µñ', 'Single function adjacent group by');

let i = 1;

for (let [key, value] of d.entries()) {
    let row = table.insertRow(i);
    let el = row.insertCell(0);
    let desc = row.insertCell(1);
    el.innerHTML = "<code>" + key + "</code>";
    desc.innerHTML = value;
    i += 1;
}
