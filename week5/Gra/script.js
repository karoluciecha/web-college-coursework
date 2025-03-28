function ltn(letter) {
	let numLetter = 0;
	switch (letter) {
		case 'A':
		case 'a':
			numLetter = 1;
			break;
		case 'B':
		case 'b':
			numLetter = 2;
			break;
		case 'C':
		case 'c':
			numLetter = 3;
			break;
		case 'D':
		case 'd':
			numLetter = 4;
			break;
		case 'E':
	    case 'e':
			numLetter = 5;
			break;
		case 'F':
		case 'f':
			numLetter = 6;
			break;
		case 'G':
		case 'g':
			numLetter = 7;
			break;
		case 'H':
		case 'h':
			numLetter = 8;
			break;
		case 'I':
		case 'i':
			numLetter = 9;
			break;
		case 'J':
		case 'j':
			numLetter = 10;
			break;
		case 'K':
		case 'k':
			numLetter = 11;
			break;
		case 'L':
		case 'l':
			numLetter = 12;
			break;
		case 'M':
		case 'm':
			numLetter = 13;
			break;
		case 'N':
		case 'n':
			numLetter = 14;
			break;
		case 'O':
		case 'o':
			numLetter = 15;
			break;
		case 'P':
		case 'p':
			numLetter = 16;
			break;
		case 'Q':
		case 'q':
			numLetter = 17;
			break;
		case 'R':
		case 'r':
			numLetter = 18;
			break;
		case 'S':
		case 's':
			numLetter = 19;
			break;
		case 'T':
		case 't':
			numLetter = 20;
			break;
		case 'U':
		case 'u':
			numLetter = 21;
			break;
		case 'V':
		case 'v':
			numLetter = 22;
			break;
		case 'W':
		case 'w':
			numLetter = 23;
			break;
		case 'X':
		case 'x':
			numLetter = 24;
			break;
		case 'Y':
		case 'y':
			numLetter = 25;
			break;
		case 'Z':
		case 'z':
			numLetter = 26;
			break;
		default:
			numLetter = 0;
			break;
	}
	return numLetter;
}

function ntl(code) {
	let letterNum;
	switch(code) {
		case 1:
			letterNum = "a";
			break;
		case 2:
			letterNum = "b";
			break;
		case 3:
			letterNum = "c";
			break;
		case 4:
			letterNum = "d";
			break;
		case 5:
			letterNum = "e";
			break;
		case 6:
			letterNum = "f";
			break;
		case 7:
			letterNum = "g";
			break;
		case 8:
			letterNum = "h";
			break;
		case 9:
			letterNum = "i";
			break;
		case 10:
			letterNum = "j";
			break;
		case 11:
			letterNum = "k";
			break;
		case 12:
			letterNum = "l";
			break;
		case 13:
			letterNum = "m";
			break;
		case 14:
			letterNum = "n";
			break;
		case 15:
			letterNum = "o";
			break;
		case 16:
			letterNum = "p";
			break;
		case 17:
			letterNum = "q";
			break;
		case 18:
			letterNum = "r";
			break;
		case 19:
			letterNum = "s";
			break;
		case 20:
			letterNum = "t";
			break;
		case 21:
			letterNum = "u";
			break;
		case 22:
			letterNum = "v";
			break;
		case 23:
			letterNum = "w";
			break;
		case 24:
			letterNum = "x";
			break;
		case 25:
			letterNum = "y";
			break;
		case 26:
			letterNum = "z";
			break;
		default:
			break;
	}
	return letterNum;
}
function encrypt(txt, keyword) {
	document.getElementById("rest").innerHTML = "";
	i = 0;
	j = 0;
	document.getElementById("resh").innerHTML = "ENCRYPTION RESULT:";
	lengthTxt = txt.length;
	lengthKwd = keyword.length;
	while (i < lengthTxt) {
		if (txt[i]  === txt[i].toUpperCase()) {
			tf = true;
		} else {
			tf = false;
		}
		if(ltn(txt[i]) === 0) {
			document.getElementById("rest").innerHTML += txt[i];
			i++;
			code = 0;
			continue;
		} else {
			code = (ltn(txt[i]) + ltn(keyword[j]));
			while (code > 26) {
				code -= 26;
			}
			resultTxt = ntl(code);
			if (tf) {
				document.getElementById("rest").innerHTML += resultTxt.toUpperCase();
			}
			else {
				document.getElementById("rest").innerHTML += resultTxt;				
			}
		}
		if (j > (lengthKwd - 2)) {
			j = 0;
		} else {
			j++;
		}
		i++;
		code = 0;
	}
	document.getElementById('copyt').style.display = "inline-block";
}
function decrypt(txt, keyword) {
	document.getElementById("rest").innerHTML = "";
	i = 0;
	j = 0;
	document.getElementById("resh").innerHTML = "DECRYPTION RESULT:";
	lengthTxt = txt.length;
	lengthKwd = keyword.length;
	while (i < lengthTxt) {
		if (txt[i]  === txt[i].toUpperCase()) {
			tf = true;
		} else {
			tf = false;
		}
		if(ltn(txt[i]) === 0) {
			document.getElementById("rest").innerHTML += txt[i];
			i++;
			code = 0;
			continue;
		} else {
			code = (ltn(txt[i]) - ltn(keyword[j]));
			while (code < 1) {
				code += 26;
			}
			resultTxt = ntl(code);
			if (tf) {
				document.getElementById("rest").innerHTML += resultTxt.toUpperCase();
			}
			else {
				document.getElementById("rest").innerHTML += resultTxt;
			}
		}
		if (j > (lengthKwd - 2)) {
			j = 0;
		} else {
			j++;
		}
		i++;
		code = 0;
	}
	document.getElementById('copyt').style.display = "inline-block";
}
function copy() {
	let text = document.getElementById('rest').innerHTML;
	navigator.clipboard.writeText(text);
}
function mainFunction() {
	let txt = document.getElementById('texts').value;
	let keyword = document.getElementById('keyword').value;
	if ((txt === "") || (keyword === "")) {
		document.getElementById('copyt').style.display = "none";
		document.getElementById("resh").innerHTML = "FILL OUT ALL FIELDS!";
		document.getElementById("rest").innerHTML = "";
	}
	 else if (document.getElementById('encrypt').checked) {
		encrypt(txt, keyword);
	} else if (document.getElementById('decrypt').checked) {
		decrypt(txt, keyword);
	} else {
		location.reload();
	}
	
}
let lengthTxt = 0, i = 0, lengthKwd = 0, j = 0, code = 0;
let resultTxt;
let tf;
const form = document.getElementById('formularz');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
document.getElementById('formularz').onsubmit = function () { mainFunction() };