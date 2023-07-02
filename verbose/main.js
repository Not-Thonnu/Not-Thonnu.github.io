const dictionary = {
  A: ["abs", "absolute", "isalpha", "is_alpha"],
  B: ["to_base", "from_decimal"],
  C: ["chr", "character", "ord", "ordinal"],
  D: ["dup", "duplicate"],
  E: ["even", "is_even", "eval"],
  F: ["factors", "substrings"],
  G: ["max", "maximum", "greatest"],
  H: ["from_hex", "from_hexadecimal"],
  I: ["inclusive_range", "slice", "interleave"],
  J: ["empty_join", "str"],
  L: ["lowered_range", "zero_range", "lower", "lowercase"],
  M: ["min", "minimum"],
  N: ["int", "integer"],
  O: ["two_power", "space_split"],
  P: ["prime", "is_prime", "swapcase"],
  Q: ["not_equal", "inequality"],
  R: ["one_range", "range", "upper", "uppercase"],
  S: ["sum"],
  T: ["ten"],
  U: ["uniquify"],
  V: ["where_truthy", "rot13"],
  W: ["wrap"],
  Z: ["zip"],
  a: ["append"],
  b: ["from_base", "to_decimal"],
  c: ["ncr", "count"],
  d: ["digits", "characters", "chars"],
  e: ["ten_power", "comma_split"],
  f: ["prime_factors", "case"],
  g: ["gcd", "greatest_common_divisor"],
  h: ["head", "first"],
  i: ["indexing", "zero_indexing"],
  j: ["join"],
  l: ["len", "length"],
  m: ["mean", "avg", "average"],
  o: ["rmv", "remove"],
  p: ["product", "prod"],
  r: ["reverse"],
  s: ["swap"],
  t: ["tail", "last"],
  u: ["negative_one"],
  v: ["replace"],
  w: ["factorial", "remove_whitespace"],
  z: ["uninterleave"],
  Ȧ: ["any", "is_alphanum", "is_alpha_num"],
  Ḃ: ["from_binary"],
  Ċ: ["codepage_chr", "codepage_character", "codepage_ord", "codepage_ordinal"],
  Ḋ: ["divisible", "is_divisible"],
  Ė: ["enumerate", "inclusive_zero_range"],
  Ḟ: ["flatten", "recursive_flatten"],
  Ġ: ["dyadic_gcd"],
  Ḣ: ["head_extract"],
  İ: ["one_indexing"],
  Ŀ: ["ljust", "left_justify"],
  Ṁ: ["mode", "most_common_element"],
  Ṅ: ["negate", "neg", "rle", "run_length_encode"],
  Ȯ: ["index_of", "find"],
  Ṗ: ["cartesian_product"],
  Ṙ: ["repr"],
  Ṡ: ["sort"],
  Ṫ: ["tail_extract"],
  Ẇ: ["chunk", "chunk_split"],
  Ż: ["zero_length_range"],
  ",": ["pair"],
  "⁺": ["increment", "incr", "plus_one"],
  "⁻": ["decrement", "decr", "minus_one"],
  "⁼": ["exactly_equal", "exactly_equals"],
  "+": ["add", "plus"],
  "-": ["subtract", "minus"],
  "×": ["multiply", "times"],
  "/": ["divide", "split"],
  "*": ["exponentiate", "power", "pow", "regex", "findall"],
  "%": ["modulo", "mod", "format"],
  "÷": ["floor_divide", "integer_divide"],
  _: ["swapped_subtract", "swapped_minus"],
  "@": [
    "swapped_exponentiate",
    "swapped_pow",
    "swapped_findall",
    "swapped_regex",
  ],
  Œ: ["swapped_modulo", "swapped_mod", "swapped_format"],
  "¦": ["swapped_floor_divide", "swapped_integer_divide"],
  "=": ["equal", "equals"],
  "<": ["less_than"],
  ">": ["greater_than"],
  "©": ["less_than_or_equal_to"],
  "®": ["greater_than_or_equal_to"],
  "&": ["and", "logical_and"],
  "|": ["or", "logical_or"],
  "^": ["uninterleave_dump"],
  "~": ["not", "logical_not"],
  ð: ["space"],
  Ð: ["triplicate"],
  ȧ: ["assign"],
  ḃ: ["bin", "binary", "to_binary"],
  ċ: ["combinations", "union"],
  ḋ: ["divmod", "from_digits"],
  ė: ["length_range", "exclusive_one_range"],
  ḟ: ["prime_factor_exponents", "title", "title_case"],
  ġ: ["group_consecutive"],
  ḣ: ["head_remove"],
  ŀ: ["lcm", "lowest_common_multiple"],
  ṁ: ["median"],
  ȯ: ["set_intersection", "round_dps"],
  ṗ: ["permutations", "set_difference"],
  ṙ: ["rjust", "right_justify"],
  ṡ: ["cumsum", "cumulative_sums"],
  ṫ: ["tail_remove"],
  ẇ: ["chunk_wrap", "split_chunk"],
  ż: ["length_range_no_pop"],
  Ạ: ["alphabet", "lowercase_alphabet"],
  Ḅ: ["to_base_string", "character_multiply", "regex_split"],
  Ḍ: ["double"],
  Ẹ: ["dump"],
  Ḥ: ["hex", "hexadecimal", "to_hexadecimal"],
  Ị: ["reciprocal", "inverse", "filter_isalpha", "only_alphabetic"],
  Ḳ: ["bifurcate"],
  Ḷ: ["dyadic_lcm"],
  Ṃ: ["mirror"],
  Ṇ: ["transliterate"],
  Ọ: ["dyadic_minimum"],
  Ṛ: ["combinations_with_replacement"],
  Ṣ: ["deltas", "forward_differences"],
  Ṭ: ["transpose"],
  Ụ: ["rotate_left_once"],
  Ṿ: ["rotate_right_once"],
  Ẉ: ["uninterleave_into_pieces"],
  Ỵ: ["rotate_left", "left_bit_shift"],
  Ẓ: ["rotate_right", "right_bit_shift"],
  Ä: ["num_to_alphabet", "alphabet_to_num"],
  "¶": ["newline"],
  Ç: ["pipe"],
  "¬": ["non_vectorised_not", "non_vectorised_logical_not"],
  "§": ["dyadic_maximum"],
  "½": ["halve"],
  Ƈ: ["npr", "contains"],
  Ɗ: ["drop_at_index", "remove_at_index"],
  Ƒ: ["unique_prime_factors", "sublists"],
  Ɠ: ["sixteen"],
  Ɱ: ["palindromise"],
  Ɲ: ["integer_partitions", "newline_join", "join_by_newlines"],
  Ƥ: ["prepend"],
  Ƭ: ["transpose_with_filler"],
  ɓ: ["boolify"],
  ƈ: ["counts"],
  ɗ: ["parity", "second_half"],
  ƒ: ["prefixes"],
  ɠ: ["two_fifty_six", "two_hundred_fifty_six"],
  ɦ: ["hundred", "one_hundred"],
  ƙ: ["grade_up", "increment_twice"],
  ɱ: ["head_slice"],
  ɲ: ["tail_slice"],
  ƥ: ["pop"],
  ʠ: ["powerset"],
  ɼ: ["random", "random_choice", "randint"],
  ʂ: ["sign", "sentence_case", "sum_each"],
  ƭ: ["square_root", "every_second_item"],
  "²": ["square"],
  "³": ["cube"],
  "⁴": ["fourth", "fourth_power"],
  "⁵": ["fifth", "fifth_power"],
  ạ: ["all_equal"],
  ḅ: ["equals_one"],
  ḍ: ["symmetric_set_difference"],
  ẹ: ["enclose"],
  ḥ: ["concatenate", "merge"],
  ị: ["corresponding_filter"],
  ḳ: ["sorted_uniquify"],
  ḷ: ["length_of_each", "complement", "is_lower"],
  ṃ: ["ceil", "is_vowel", "reverse_each"],
  ọ: ["repeat"],
  ṛ: ["absolute_difference", "zfill", "surround"],
  ṣ: ["suffixes", "spaces"],
  ṭ: ["triple_swap"],
  ẉ: ["cartesian_power"],
  ỵ: ["head_remove_many"],
  ẓ: ["tail_remove_many"],
  øB: ["balanced_brackets", "brackets_are_balanced"],
  øD: ["optimal_dictionary_compression"],
  øv: ["canvas", "draw", "canvas_draw"],
  øV: ["blank_canvas", "blank_draw", "blank_canvas_draw"],
  "ø^": ["clear_canvas"],
  "ø<": ["starts_with"],
  "ø>": ["starts_with"],
  ØC: ["center", "centre"],
  ØD: ["depth"],
  ØE: ["longest"],
  ØI: ["multidimensional_index"],
  ØM: ["shortest"],
  "Ø.": ["dot_product"],
  "Ø/": ["anti_diagonal"],
  "Ø“": ["all_diagonals"],
  "Ø”": ["all_anti_diagonals"],
  ÆC: ["cosine", "cos"],
  ÆD: ["degrees"],
  ÆE: ["exponent"],
  ÆF: ["nth_fibonacci_number"],
  ÆH: ["hypot", "hypotenuse"],
  ÆI: ["insignificant"],
  ÆL: ["log", "logarithm"],
  ÆN: ["natural_log", "natural_logarithm"],
  ÆP: ["nth_prime"],
  ÆR: ["radians"],
  ÆS: ["sine", "sin"],
  ÆT: ["tangent", "tan"],
  Æc: ["arc_cosine", "arccos"],
  Æl: ["log10", "common_log", "common_logarithm"],
  Æs: ["arc_sine", "arcsin"],
  Æt: ["arc_tangent", "arctan"],
  Æḷ: ["log2", "log_base_2"],
  "Æ&": ["bitwise_and"],
  "Æ|": ["bitwise_or"],
  "Æ^": ["bitwise_xor"],
  "Æ~": ["bitwise_not"],
  "Æ²": ["perfect_square"],
  "Æ³": ["perfect_cube"],
  "Æ⁴": ["perfect_fourth"],
  "Æ⁵": ["perfect_fifth"],
  µR: ["roman_numerals"],
  µT: ["type"],
  µU: ["connected_uniquify"],
  µr: ["random_shuffle"],
  µv: ["trim"],
  "µ<": ["left_trim"],
  "µ>": ["right_trim"],
  "µ&": ["non_vectorised_and", "non_vectorised_logical_and"],
  "µ|": ["non_vectorised_or", "non_vectorised_logical_or"],
  "µ^": ["non_vectorised_xor", "non_vectorised_logical_xor"],
  "µ/": ["split_on"],
  '"': ["string_literal"],
  "'": ["one_character"],
  "`": ["two_characters"],
  ʋ: ["three_characters"],
  "“": ["lowercase_string_compression"],
  "”": ["title_case_string_compression"],
  "‘": ["lowercase_dictionary_compression"],
  "’": ["title_case_dictionary_compression"],
  "»": ["integer_compression"],
  "«": ["small_integer_compression"],
  "¿": ["integer_list_compression"],
  "[": ["open_list_literal", "open_list", "list"],
  "]": ["close_list_literal", "close_list", "end_list"],
  "#": ["comment"],
  " ": ["nop"],
  "¡": ["get_veriable"],
  "!": ["set_variable"],
  ı: ["map"],
  "€": ["single_function_map"],
  æ: ["filter"],
  œ: ["single_function_filter"],
  Þ: ["sort_by"],
  þ: ["single_function_sort_by"],
  Ñ: ["group_by"],
  ñ: ["single_function_group_by"],
  ȷ: ["outer_product"],
  "¥": ["fixed_point"],
  "{": ["open_for_loop"],
  "}": ["close_for_loop"],
  "(": ["open_while_loop"],
  ")": ["close_while_loop"],
  "⁽": ["open_forever_loop"],
  "⁾": ["close_forever_loop"],
  "?": ["if_statement", "if"],
  ":": ["else_statement", "else"],
  ";": ["close_statement"],
  ç: ["pair_apply"],
  n: ["context_variable"],
  ṅ: ["iteration_index"],
  x: ["get_x"],
  y: ["get_y"],
  X: ["set_x"],
  Y: ["set_y"],
  Ẋ: ["set_x_without_popping"],
  Ẏ: ["set_y_without_popping"],
  ẋ: ["apply_to_x"],
  ẏ: ["apply_to_y"],
  Ȥ: ["get_global_array"],
  ȥ: ["add_to_global_array"],
  K: ["stack"],
  ṇ: ["codepage_compression"],
  q: ["quit"],
  $: ["next_input"],
  "¤": ["input_list"],
  "°": ["first_input"],
  "¹": ["second_input"],
  "⁶": ["third_input"],
  "⁷": ["third_last_input"],
  "⁸": ["second_last_input"],
  "⁹": ["last_input"],
  "£": ["print"],
  "¢": ["print_without_newline"],
  ß: ["print_without_popping"],
  Ƙ: ["first_n_integers"],
  Ʋ: ["cumulative_reduce_by"],
  Ɓ: ["execute_without_popping"],
  µµ: ["recursive_environment"],
  µƲ: ["single_function_reduce_by"],
  µɼ: ["single_function_right_reduce_by"],
  µƇ: ["single_function_right_cumulative_reduce_by"],
  µʋ: ["right_reduce_by"],
  "µ€": ["apply_to_every_nth_item"],
  "µ«": ["rotate_stack_left"],
  "µ»": ["rotate_stack_right"],
  "µ!": ["reverse_stack"],
  µÑ: ["adjacent_group_by"],
  µñ: ["single_function_adjacent_group_by"],
};

let keys = Object.keys(dictionary);

const textbox = document.getElementById("textbox");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

let params = {};
location.search
  .slice(1)
  .split("&")
  .forEach(function (pair) {
    pair = pair.split("=");
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  });

function change (s) {
  document.getElementById("copyButton").value = "Copy Link";

  let out1 = [];
  let out2 = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (word === "" && i < arr.length - 1) {
      out1.push(" ");
      continue;
    }

    if (!isNaN(word)) {
      out1.push(word);
      continue;
    }

    if (word[0] === "\\") {
      out1.push(word.slice(1));
      continue;
    }

    if (!/^[a-zA-Z_]+\d*$/.test(word)) {
      out1.push(word);
      continue;
    }

    let found = false;
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      let val = dictionary[key];

      if (val.includes(word.toLowerCase())) {
        out1.push(key);
        found = true;
        break;
      }
    }

    if (!found) {
      if (i < arr.length - 1) {
        out1.push(word);
      } else {
        out2 = word;
      }
    }
  }

  result1.innerText = out1.join("");
  result2.innerText = out2;

  let length = out1.join("").length;
  const explanation = document.getElementById("explanation");
  explanation.innerText = out1.join("") + "  # Implicit input\n";

  for (let x = 0; x < out1.length; x++) {
    if (out1[x] != "") {
      let before = out1.slice(0, x).join("").length;
      let after = out1.slice(x + 1).join("").length;
      explanation.innerText +=
        " ".repeat(before) +
        out1[x] +
        " ".repeat(after) +
        "  # " +
        uppercaseFirstLetter(arr[x].replace("_", " ")) +
        "\n";
    }
  }

  if (!arr.join(" ").includes("print")) {
    explanation.innerText += " ".repeat(length) + "  # Implicit output";
  }
};

inputHandler = e => change(e.target.value);

function uppercaseFirstLetter (s) {
  if (s != "") {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  } else {
    return "No-op";
  }
};

function copyLink () {
  let input = document.getElementById("textbox").value;
  let url =
    "https://Not-Thonnu.github.io/verbose/index.html?input=" +
    encodeURIComponent(input);
  navigator.clipboard.writeText(url);
  document.getElementById("copyButton").value = "Copied!";
};

if (Object.keys(params).includes("input")) {
  document.getElementById("textbox").value = params["input"];
  change(document.getElementById("textbox").value);
}

textbox.addEventListener("input", inputHandler);