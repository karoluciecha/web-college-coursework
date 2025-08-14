// Script file for the gameVigenere.html website

// Getting current date
let today = new Date();
let dayOfMonth = today.getDate() - 1;

// Arrays with keywords for the game
const easyEncryptText = ["broil", "chime", "decoy", "elbow", "fjord", "glyph", "hinge", "irony", "junto", "kneel", "lemon", "morph", "nylon", "oxide", "plume", "quart", "roast", "swoop", "truce", "usher", "vague", "waltz", "yield", "zesty", "amend", "bloom", "crane", "dutch", "exalt", "frost", "grind"];
const easyEncryptKey = ["abort", "blush", "creek", "droll", "ethos", "flair", "gauge", "hoist", "incur", "jaunt", "knoll", "lofty", "miner", "novel", "opera", "prong", "quire", "relay", "scout", "thorn", "unite", "vapor", "wharf", "xylem", "young", "zeal", "admit", "brisk", "chess", "dwelt", "equip"];

const easyDecryptText = ["cqjom", "edjbk", "gjjdu", "iosgx", "kshyj", "mxdep", "ocbhl", "qcdjl", "sibfx", "udmxz", "wibhy", "yrybb", "affct", "cwzmn", "exqts", "gmnwy", "ijgnb", "kcajh", "mmhdc", "ouaws", "qnngs", "sxrnr", "vxxht", "xtbpz", "zylwg", "bqwxg", "tdeln", "ammdj", "eeead", "wgrsn", "xmjeb"];
const easyDecryptKey = ["batch", "cliff", "drake", "error", "frame", "globe", "humor", "input", "jewel", "koala", "lumen", "mirth", "nerve", "onset", "pulse", "quest", "robin", "steep", "track", "ultra", "valor", "woven", "yodel", "zonal", "axiom", "bluff", "civic", "delay", "evoke", "flint", "grasp"];

const mediumEncryptText = ["silent echo", "crimson sky", "tangled yarn", "whispering wind", "ancient ruins", "glowing ember", "frozen lake", "golden hour", "endless ocean", "steamy jungle", "raging storm", "sacred temple", "busy marketplace", "dusty shelf", "bright star", "serene landscape", "mysterious path", "fluffy kitten", "cobbled street", "haunted mansion", "rustic cabin", "roaring river", "smoky mountain", "shimmering veil", "sudden downpour", "lively festival", "gentle breeze", "thorny rose", "melancholy tune", "vivid dream", "rapid heartbeat"];
const mediumEncryptKey = ["abroad", "beacon", "change", "damage", "effort", "flight", "garden", "happen", "impact", "jungle", "kernel", "legacy", "magnet", "nature", "option", "pillar", "quartz", "rescue", "spirit", "temple", "unique", "vision", "wallet", "xenial", "yellow", "zodiac", "arctic", "breeze", "circle", "donate", "empire"];

const mediumDecryptText = ["ejfe hgvogmj", "eznxd fxbzrg", "wcfkp emujghq", "qoaq pxfxwf", "jtfxx zugwxm", "zcjlq uvmwys", "exdv qwihl", "acqlv ymuax", "zjsx mfqqa", "nqjqw kvd", "hbnh gmefmh", "xnwf xffryzi", "ugwwg uoawlh", "lvlc wfpieuo", "jbfd imbfm", "sjmv ugfddw", "twlvzx etrc", "vrgn lmtj", "lquw owius", "neju qmditfl", "ytcp hzwis", "cajffm mjnrh", "fjolxd fnbff", "sbjri wuwsqcn", "goxb kxbtit", "hmry blcpn", "gzxj gbrol", "znrxy aqfct", "yhvsjv qrdt", "npfh owaiv", "zirzw jyqnth"];
const mediumDecryptKey = ["buffer", "cheese", "diesel", "ethics", "forest", "guitar", "horror", "invent", "jigsaw", "keeper", "launch", "mirror", "novice", "output", "patrol", "quarry", "record", "squash", "throne", "update", "vendor", "wrench", "yearly", "zealot", "afford", "blight", "custom", "devour", "echoed", "fondue", "glitch"];

const hardEncryptText = ["the sun rises in the east", "she sings beautifully", "leaves flutter in the breeze", "he runs very fast", "they play together", "light fills the room", "rain falls softly", "books cover the table", "cats sleep soundly", "water reflects the sky", "birds chirp at dawn", "flowers bloom brightly", "children laugh loudly", "the moon lights the path", "the wind whispers secrets", "stars twinkle in the night", "the river flows gently", "lemons taste sour", "the garden grows wild", "bells ring in the distance", "she reads in silence", "they walk side by side", "paint covers the canvas", "snow blankets the ground", "time passes slowly", "clouds gather overhead", "the dog wags its tail", "tea steams in the cup", "the door creaks open", "footsteps echo in the hall", "the key turns in the lock"];
const hardEncryptKey = ["notebooks", "adventure", "blueprint", "clockwise", "dynamical", "elephants", "framework", "governess", "household", "intricate", "juxtapose", "kilometer", "lighthouse", "mysterious", "nightfall", "overwhelm", "prototype", "quadratic", "resonance", "satellite", "turbulent", "umbrellas", "volunteer", "waterfall", "xylophone", "yesterday", "zeppelins", "thumbnail", "ecosystem", "fingerprint", "grapefruit"];

const hardDecryptText = ["yase cgumfgk yip cjgxqox", "pchlr rjfqv bwh pus", "ajwqh jmfll jhmxuny mln ttdyz", "yvh kmcwp xnqna pb", "ztf nydst ygxmf ofvb mnq uens", "sjpcwt hcraqt bfeuzevti", "bis xaxxf lzswznp asem", "okdst wadot ti zjaqi", "dmq ozz laicje fgk vhccj", "ssa lgya heecyul ecbw ysj", "eiohhzt tfzds sg wiu bmmzw", "gil vxlni lnmscym nansusm", "o hcipaz yznefqgn bb yjz ngzxnj", "hctcf lrhsh vwgn nqt qwyrffs", "jin qua gahft bixmsueo", "yz ybyb wwl jctxm", "lmm kjka tiar cutlkfme", "kykj txlme bd bmw yru", "u gmgr jxwlfje", "ovi ksa bdnig wqgjum", "bngl uuy hv pqg jiscvt", "obespwcwm bxq ks fms dcvaps", "rms exwcg wgsuh", "z qdfk gyxlr xi hox nwwd", "tmf eji lqss no fwz pqrt", "uny kjvs yrnvm mant", "uqt kjpfa gga zlqt", "dv pjq ttdhv iu ansmi", "lj rsmmcwx lni iscm", "f bpn hffupx pihdmhb yma xedvt", "yzf pqriuskk irw ypy"];
const hardDecryptKey = ["breakfast", "chocolate", "dialogues", "enchanted", "flamingos", "geography", "handiwork", "isolation", "jellyfish", "knighthood", "landscape", "magnitude", "nebulous", "operation", "paintings", "questions", "rehearsal", "spherical", "telescope", "undermine", "vibrating", "wavelength", "xenophobe", "youngster", "zealously", "afterglow", "biography", "chameleon", "departure", "evaporate", "framework"];

// Function to change letter to a number
function ltn(letter) {
	let numLetter = 0;
	switch (letter) {
		case "A":
		case "a":
			numLetter = 1;
			break;
		case "B":
		case "b":
			numLetter = 2;
			break;
		case "C":
		case "c":
			numLetter = 3;
			break;
		case "D":
		case "d":
			numLetter = 4;
			break;
		case "E":
	    case "e":
			numLetter = 5;
			break;
		case "F":
		case "f":
			numLetter = 6;
			break;
		case "G":
		case "g":
			numLetter = 7;
			break;
		case "H":
		case "h":
			numLetter = 8;
			break;
		case "I":
		case "i":
			numLetter = 9;
			break;
		case "J":
		case "j":
			numLetter = 10;
			break;
		case "K":
		case "k":
			numLetter = 11;
			break;
		case "L":
		case "l":
			numLetter = 12;
			break;
		case "M":
		case "m":
			numLetter = 13;
			break;
		case "N":
		case "n":
			numLetter = 14;
			break;
		case "O":
		case "o":
			numLetter = 15;
			break;
		case "P":
		case "p":
			numLetter = 16;
			break;
		case "Q":
		case "q":
			numLetter = 17;
			break;
		case "R":
		case "r":
			numLetter = 18;
			break;
		case "S":
		case "s":
			numLetter = 19;
			break;
		case "T":
		case "t":
			numLetter = 20;
			break;
		case "U":
		case "u":
			numLetter = 21;
			break;
		case "V":
		case "v":
			numLetter = 22;
			break;
		case "W":
		case "w":
			numLetter = 23;
			break;
		case "X":
		case "x":
			numLetter = 24;
			break;
		case "Y":
		case "y":
			numLetter = 25;
			break;
		case "Z":
		case "z":
			numLetter = 26;
			break;
		default:
			numLetter = 0;
			break;
	}
	return numLetter;
}

// Function to change number to a letter
function ntl(code) {
	let letterNum = 0;
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
	let encrypted = "", i = 0, j = 0, lengthTxt = txt.length, lengthKwd = keyword.length, code = 0, resultTxt, tf;
	while (i < lengthTxt) {
		if (txt[i]  === txt[i].toUpperCase()) {
			tf = true;
		} else {
			tf = false;
		}
		if(ltn(txt[i]) === 0) {
			encrypted += txt[i];
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
				encrypted += resultTxt.toUpperCase();
			}
			else {
				encrypted += resultTxt;				
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
    return encrypted;
}

function decrypt(txt, keyword) {
    let decrypted = "", i = 0, j = 0, lengthTxt = txt.length, lengthKwd = keyword.length, code = 0, resultTxt, tf;
	while (i < lengthTxt) {
		if (txt[i]  === txt[i].toUpperCase()) {
			tf = true;
		} else {
			tf = false;
		}
		if(ltn(txt[i]) === 0) {
			decrypted += txt[i];
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
				decrypted += resultTxt.toUpperCase();
			}
			else {
				decrypted += resultTxt;
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
	return decrypted;
}

// Function to set a cookie
function setCookie(name, value, expires) {
    today.setTime(expires);
    document.cookie = `${name}=${value};expires=${today.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

// Function to calculate the end of the current day in milliseconds
function endOfDay() {
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, -1).getTime();
}

// Function to check if a cookie exists
function cookieExists(cookieName) {
    const keyValue = document.cookie.split(";").some(item => {
        return item.trim().startsWith(cookieName + "=");
    });
    return keyValue;
}

// Prevent form from refreshing the page
const form = document.getElementById("formVigGame");
function handleForm(event) { event.preventDefault(); }
form.addEventListener("submit", handleForm);
document.getElementById("formVigGame").onsubmit = function () { mainFunction() };

document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll(".radioInput");
    
	if(!cookieExists("levelEncryption")) setCookie("levelEncryption", 1, endOfDay());
	if(!cookieExists("levelDecryption")) setCookie("levelDecryption", 1, endOfDay());
	if(!cookieExists("livesEncryption")) setCookie("livesEncryption", 3, endOfDay());
	if(!cookieExists("livesDecryption")) setCookie("livesDecryption", 3, endOfDay());

	let questionInput = document.getElementById("questionInput");
	let questionKey = document.getElementById("questionKey");


    // Check if there is a saved mode in cookies
    const savedMode = getCookie("gameMode");
    if (savedMode) {
        document.getElementById(savedMode).checked = true;
        updateText(savedMode);
    }

    radios.forEach(radio => {
        radio.addEventListener("change", function() {

            // Update text based on selection
            updateText(this.id);

            // Set a cookie that expires at the end of the day
            setCookie("gameMode", this.id, endOfDay());
        });
    });
});

// Function to update text on the page
function updateText(modeId) {
	const displayText = document.getElementById("lvlDesc");
	const feedback = document.getElementById("feedbackMessage");
	feedback.style.opacity = "0";
	if (modeId === "radioEncode") {
		document.getElementById("radioEncode").checked = true;

		if (getCookie("levelEncryption") === "1") {
			questionInput.innerHTML = easyEncryptText[dayOfMonth];
			questionKey.innerHTML = easyEncryptKey[dayOfMonth];
			displayText.textContent = `ENCODE - LEVEL ${getCookie("levelEncryption")}`;
			document.getElementById("questionWrapper").style.display = "block";
			document.getElementById("formVigGame").style.display = "block";
		}
		else if (getCookie("levelEncryption") === "2") {
			questionInput.innerHTML = mediumEncryptText[dayOfMonth];
			questionKey.innerHTML = mediumEncryptKey[dayOfMonth];
			displayText.textContent = `ENCODE - LEVEL ${getCookie("levelEncryption")}`;
			document.getElementById("questionWrapper").style.display = "block";
			document.getElementById("formVigGame").style.display = "block";
		}
		else if (getCookie("levelEncryption") === "3") {
			questionInput.innerHTML = hardEncryptText[dayOfMonth];
			questionKey.innerHTML = hardEncryptKey[dayOfMonth];
			displayText.textContent = `ENCODE - LEVEL ${getCookie("levelEncryption")}`;
			document.getElementById("questionWrapper").style.display = "block";
			document.getElementById("formVigGame").style.display = "block";
		}
		else if (getCookie("levelEncryption") === "4") {
			questionInput.innerHTML = "";
			questionKey.innerHTML = "";
			displayText.textContent = `ENCODE - COMPLETED!`;
			document.getElementById("questionWrapper").style.display = "none";
			document.getElementById("formVigGame").style.display = "none";
			feedback.style.opacity = "1";
			feedback.innerText = "ALL ENCRYPTION LEVELS COMPLETED!";
		}

	} else if (modeId === "radioDecode") {
		document.getElementById("radioDecode").checked = true;
		if (getCookie("levelDecryption") === "1") {
			questionInput.innerHTML = easyDecryptText[dayOfMonth];
			questionKey.innerHTML = easyDecryptKey[dayOfMonth];
			displayText.textContent = `DECODE - LEVEL ${getCookie("levelDecryption")}`;
			document.getElementById("questionWrapper").style.display = "block";
			document.getElementById("formVigGame").style.display = "block";
		}
		else if (getCookie("levelDecryption") === "2") {
			questionInput.innerHTML = mediumDecryptText[dayOfMonth];
			questionKey.innerHTML = mediumDecryptKey[dayOfMonth];
			displayText.textContent = `DECODE - LEVEL ${getCookie("levelDecryption")}`;
			document.getElementById("questionWrapper").style.display = "block";
			document.getElementById("formVigGame").style.display = "block";
		}
		else if (getCookie("levelDecryption") === "3") {
			questionInput.innerHTML = hardDecryptText[dayOfMonth];
			questionKey.innerHTML = hardDecryptKey[dayOfMonth];
			displayText.textContent = `DECODE - LEVEL ${getCookie("levelDecryption")}`;
			document.getElementById("questionWrapper").style.display = "block";
			document.getElementById("formVigGame").style.display = "block";
		}
		else if (getCookie("levelDecryption") === "4") {
			questionInput.innerHTML = "";
			questionKey.innerHTML = "";
			displayText.textContent = `DECODE - COMPLETED!`;
			document.getElementById("questionWrapper").style.display = "none";
			document.getElementById("formVigGame").style.display = "none";
			feedback.style.opacity = "1";
			feedback.innerText = "ALL DECRYPTION LEVELS COMPLETED!";
		}
	}
}

// Function to 
function timeoutClear(element, delay) {
    setTimeout(function() {
        element.style.opacity = "0";
    }, delay);
}

function mainFunction() {
	const feedback = document.getElementById("feedbackMessage");
	const answer = document.getElementById("keyword");
	feedback.style.opacity = "1";
	if (document.getElementById("radioEncode").checked) {
		if ((getCookie("levelEncryption") === "1") && (answer.value.toLowerCase() === encrypt(easyEncryptText[dayOfMonth], easyEncryptKey[dayOfMonth]))) {
			setCookie("levelEncryption", 2, endOfDay());
			updateText("radioEncode");
			feedback.innerText = "CORRECT! ENCODE LEVEL 1 COMPLETED!";
			timeoutClear(feedback, 2500);
			answer.value = "";
		}
		else if ((getCookie("levelEncryption") === "2") && (answer.value.toLowerCase() === encrypt(mediumEncryptText[dayOfMonth], mediumEncryptKey[dayOfMonth]))) {
			setCookie("levelEncryption", 3, endOfDay());
			updateText("radioEncode");
			feedback.innerText = "CORRECT! ENCODE LEVEL 2 COMPLETED!";
			timeoutClear(feedback, 2500);
			answer.value = "";
		}
		else if ((getCookie("levelEncryption") === "3") && (answer.value.toLowerCase() === encrypt(hardEncryptText[dayOfMonth], hardEncryptKey[dayOfMonth]))) {
			setCookie("levelEncryption", 4, endOfDay());
			updateText("radioEncode");
			feedback.innerText = "ALL ENCRYPTION LEVELS COMPLETED!";
			answer.value = "";
		}
		else {
			feedback.innerText = "INCORRECT! TRY AGAIN!";
			answer.value = "";
			timeoutClear(feedback, 2500);
		}
	}
	else if (document.getElementById("radioDecode").checked) {
		if ((getCookie("levelDecryption") === "1") && (answer.value.toLowerCase() === decrypt(easyDecryptText[dayOfMonth], easyDecryptKey[dayOfMonth]))) {
			setCookie("levelDecryption", 2, endOfDay());
			updateText("radioDecode");
			feedback.innerText = "CORRECT! DECODE LEVEL 1 COMPLETED!";
			timeoutClear(feedback, 2500);
			answer.value = "";
		}
		else if ((getCookie("levelDecryption") === "2") && (answer.value.toLowerCase() === decrypt(mediumDecryptText[dayOfMonth], mediumDecryptKey[dayOfMonth]))) {
			setCookie("levelDecryption", 3, endOfDay());
			updateText("radioDecode");
			feedback.innerText = "CORRECT! DECODE LEVEL 2 COMPLETED!";
			timeoutClear(feedback, 2500);
			answer.value = "";
		}
		else if ((getCookie("levelDecryption") === "3") && (answer.value.toLowerCase() === decrypt(hardDecryptText[dayOfMonth], hardDecryptKey[dayOfMonth]))) {
			setCookie("levelDecryption", 4, endOfDay());
			updateText("radioDecode");
			feedback.innerText = "ALL DECRYPTION LEVELS COMPLETED!";
			answer.value = "";
		}
		else {
			feedback.innerText = "INCORRECT! TRY AGAIN!";
			answer.value = "";
			timeoutClear(feedback, 2500);
		}
	}
	
}
