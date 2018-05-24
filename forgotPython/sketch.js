// Project Name
// Roger Lam
// Month Day, Year

function setup() {
  // put setup code here
  change(code);
  check(newThang);
}

function draw() {
  print(thing);
  // print(code.length);
}

let code;
code = "zkdxmxkhvgofoqvyeccuxokfimbtyhrbkpougnvzbhseotymydwbadenbzxrzfanxetkvyiczvoybearnqszydnwhrjamlpcqfxi";
let thing;
thing = 0;
let newThang;
newThang = [];

function change(bro) {
  for (let x = 0; x < code.length; x++) {
    if (code[x] === "h") {
      newThang.push("h");
    }
    if (code[x] === "s") {
      newThang.push("s");
    }
    if (code[x] === "c") {
      newThang.push("c");
    }
    if (code[x] === "t") {
      newThang.push("t");
    }
    if (code[x] === "f") {
      newThang.push("f");
    }
  }
}

function check(string) {
  for (let x = 0; x < string.length; x++) {
    if (string[x] === "h") {
      thing += 1;
    }
    else if (string[x] === "s") {
      thing += 1;
      thing = thing * 2;
    }
    else if (string[x] === "c") {
      thing += 1;
      thing = thing * 3;
    }
    else if (string[x] === "t") {
      thing += 1;
      thing = thing * 4;
    }
    else if (string[x] === "f") {
      thing += 1;
      thing = thing * 5;
    }
  }
}
