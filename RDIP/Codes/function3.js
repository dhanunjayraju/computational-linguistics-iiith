function selection() {
    if (document.getElementById("corpuses").selectedIndex == 0) {
        alert("Select a Corpus")
        location.reload()
    }
    if (document.getElementById("corpuses").selectedIndex == 1) {
        document.getElementById("text1").innerHTML = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. " How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."';
        document.getElementById("line1").innerHTML = "Enter the number of tokens and types for the above corpus:"
        createButton1()
    }
    if (document.getElementById("corpuses").selectedIndex == 2) {
        document.getElementById("text1").innerHTML = 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
        document.getElementById("line1").innerHTML = "Enter the number of tokens and types for the above corpus:"
        createButton2()
    }
    if (document.getElementById("corpuses").selectedIndex == 3) {
        document.getElementById("text1").innerHTML = "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair.\""
        document.getElementById("line1").innerHTML = "Enter the number of tokens and types for the above corpus:"
        createButton3()
    }

}

function createButton1() {
    document.getElementById("placeButton1").innerHTML = ""
    document.getElementById("correct1").innerHTML = ""
    document.getElementById("wrong").innerHTML = ""
    document.getElementById("placeButton2").innerHTML = ""
    document.getElementById("placeButton2").innerHTML = ""
    document.getElementById("finalText").innerHTML = ""
    document.getElementById("finalT").innerHTML = ""
    document.getElementById('finall').innerHTML = '';
    document.getElementById("placeButton3").innerHTML = ""
    document.getElementById("noOfTokens").value = ""
    document.getElementById("noOfTypes").value = ""
    document.getElementById("correct2").innerHTML = ""
    document.getElementById("wrong2").innerHTML = ""
    document.getElementById("noOfTokens").style.background = "white";
    document.getElementById("noOfTypes").style.background = "white"
    var T = document.getElementById("table1");
    T.style.display = "block";
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Submit");
    x.id = "button1"
    x.appendChild(t);
    document.getElementById("placeButton1").appendChild(x);
    x.onclick = calAnswer1;

}


corpus1 = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."';
corpus1WithoutSC = corpus1.replace(/[^a-zA-Z ]/g, "")
corpus1WithoutSC = corpus1WithoutSC.toLowerCase()
corpus1Tokens = corpus1WithoutSC.split(" ")


var outputcorpus1Tokens = [];
var count = 0;
var start = false;


function calAnswer1() {

    var outputcorpus1Tokens = [];
    var count = 0;
    var start = false;

    for (j = 0; j < corpus1Tokens.length; j++) {
        for (k = 0; k < outputcorpus1Tokens.length; k++) {
            if (corpus1Tokens[j] == outputcorpus1Tokens[k]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            outputcorpus1Tokens.push(corpus1Tokens[j]);
        }
        start = false;
        count = 0;
    }

    noOfTokens = document.getElementById("noOfTokens").value
    noOfTypes = document.getElementById("noOfTypes").value
    if (noOfTokens == corpus1Tokens.length && noOfTypes == outputcorpus1Tokens.length) {
        document.getElementById("correct1").innerHTML = "Right Answer"
        document.getElementById("noOfTokens").style.background = "blue";
        document.getElementById("noOfTypes").style.background = "blue"
        document.getElementById("placeButton1").innerHTML = ""
        document.getElementById("wrong").innerHTML = ""
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Submit");
        x.id = "button1"
        x.appendChild(t);
        document.getElementById("placeButton1").appendChild(x);
        var x1 = document.createElement("BUTTON");
        var t1 = document.createTextNode("Continue");
        x1.id = "button1"
        x1.appendChild(t1);
        document.getElementById("placeButton2").appendChild(x1);
        x1.onclick = calc;
    }
    else {
        document.getElementById("correct1").innerHTML = ""
        document.getElementById("wrong").innerHTML = "Wrong Answer"
        document.getElementById("noOfTokens").style.background = "orange";
        document.getElementById("noOfTypes").style.background = "orange"
    }
}

function calc() {

    document.getElementById('finalText').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById('finalT').innerHTML = "#new types:"
    document.getElementById('correct1').innerHTML = '';
    document.getElementById('placeButton1').innerHTML = '';
    document.getElementById('placeButton2').innerHTML = '';
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("size", 4);
    x.id = "finalv"
    document.getElementById("finall").appendChild(x);
    var x1 = document.createElement("BUTTON");
    var t1 = document.createTextNode("Submit");
    x1.id = "button5"
    x1.appendChild(t1);
    document.getElementById("placeButton3").appendChild(x1);
    x1.onclick = finalFun;

}

function finalFun() {
    var maxx = []
    var stemmer = new Snowball('English');
    for (i in corpus1Tokens) {
        stemmer.setCurrent(corpus1Tokens[i]);
        stemmer.stem();
        maxx.push((stemmer.getCurrent(corpus1Tokens[i])))


    }

    var outputcorpus1Tokens = [];
    var count = 0;
    var start = false;

    for (j = 0; j < maxx.length; j++) {
        for (k = 0; k < outputcorpus1Tokens.length; k++) {
            if (maxx[j] == outputcorpus1Tokens[k]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            outputcorpus1Tokens.push(maxx[j]);

        }
        start = false;
        count = 0;
    }

    finalvalue = document.getElementById("finalv").value
    if (finalvalue == outputcorpus1Tokens.length) {
        document.getElementById("wrong2").innerHTML = ""
        document.getElementById("correct2").innerHTML = "Right Answer"
        document.getElementById("finalv").style.background = "blue";
    }
    else {
        document.getElementById("correct2").innerHTML = ""
        document.getElementById("wrong2").innerHTML = "Wrong Answer"
        document.getElementById("finalv").style.background = "orange";
    }
}



function createButton2() {
    document.getElementById("placeButton1").innerHTML = ""
    document.getElementById("correct1").innerHTML = ""
    document.getElementById("wrong").innerHTML = ""
    document.getElementById("placeButton2").innerHTML = ""
    document.getElementById("placeButton2").innerHTML = ""
    document.getElementById("finalText").innerHTML = ""
    document.getElementById('finall').innerHTML = '';
    document.getElementById("finalT").innerHTML = ""
    document.getElementById("placeButton3").innerHTML = ""
    document.getElementById("noOfTokens").value = ""
    document.getElementById("noOfTypes").value = ""
    document.getElementById("correct2").innerHTML = ""
    document.getElementById("wrong2").innerHTML = ""
    document.getElementById("noOfTokens").style.background = "white";
    document.getElementById("noOfTypes").style.background = "white"
    var T = document.getElementById("table1");
    T.style.display = "block";
    var xa = document.createElement("BUTTON");
    var ta = document.createTextNode("Submit");
    xa.id = "button2"
    xa.appendChild(ta);
    document.getElementById("placeButton1").appendChild(xa);
    xa.onclick = calAnswer2;
}

corpus2 = 'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
corpus2WithoutSC = corpus2.replace(/[^a-zA-Z ]/g, "")
corpus2WithoutSC = corpus2WithoutSC.toLowerCase()
corpus2Tokens = corpus2WithoutSC.split(" ")

var outputcorpus2Tokens = [];


function calAnswer2() {

    var outputcorpus2Tokens = [];
    var count = 0;
    var start = false;

    for (j = 0; j < corpus2Tokens.length; j++) {
        for (k = 0; k < outputcorpus2Tokens.length; k++) {
            if (corpus2Tokens[j] == outputcorpus2Tokens[k]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            outputcorpus2Tokens.push(corpus2Tokens[j]);
        }
        start = false;
        count = 0;
    }

    noOfTokens = document.getElementById("noOfTokens").value
    noOfTypes = document.getElementById("noOfTypes").value
    if (noOfTokens == corpus2Tokens.length && noOfTypes == outputcorpus2Tokens.length) {
        document.getElementById("correct1").innerHTML = "Right Answer"
        document.getElementById("noOfTokens").style.background = "blue";
        document.getElementById("noOfTypes").style.background = "blue"
        document.getElementById("placeButton1").innerHTML = ""
        document.getElementById("wrong").innerHTML = ""
        var xt = document.createElement("BUTTON");
        var tt = document.createTextNode("Submit");
        xt.id = "button1"
        xt.appendChild(tt);
        document.getElementById("placeButton1").appendChild(xt);
        var x1t = document.createElement("BUTTON");
        var t1t = document.createTextNode("Continue");
        x1t.appendChild(t1t);
        document.getElementById("placeButton2").appendChild(x1t);
        x1t.onclick = calc2;
    }
    else {
        document.getElementById("correct1").innerHTML = ""
        document.getElementById("wrong").innerHTML = "Wrong Answer"
        document.getElementById("noOfTokens").style.background = "orange";
        document.getElementById("noOfTypes").style.background = "orange"
    }
}
function calc2() {

    document.getElementById('finalText').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById('finalT').innerHTML = "#new types:"
    document.getElementById('correct1').innerHTML = '';
    document.getElementById('placeButton1').innerHTML = '';
    document.getElementById('placeButton2').innerHTML = '';
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("size", 4);
    x.id = "finalv"
    document.getElementById("finall").appendChild(x);
    var x1 = document.createElement("BUTTON");
    var t1 = document.createTextNode("Submit");
    x1.id = "button5"
    x1.appendChild(t1);
    document.getElementById("placeButton3").appendChild(x1);
    x1.onclick = finalFun2;

}

function finalFun2() {
    var maxx = []
    var stemmer = new Snowball('English');
    for (i in corpus2Tokens) {
        stemmer.setCurrent(corpus2Tokens[i]);
        stemmer.stem();
        maxx.push((stemmer.getCurrent(corpus2Tokens[i])))


    }

    var outputcorpus2Tokens = [];
    var count = 0;
    var start = false;

    for (j = 0; j < maxx.length; j++) {
        for (k = 0; k < outputcorpus2Tokens.length; k++) {
            if (maxx[j] == outputcorpus2Tokens[k]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            outputcorpus2Tokens.push(maxx[j]);

        }
        start = false;
        count = 0;
    }

    finalvalue = document.getElementById("finalv").value
    if (finalvalue == outputcorpus2Tokens.length) {
        document.getElementById("wrong2").innerHTML = ""
        document.getElementById("correct2").innerHTML = "Right Answer"
        document.getElementById("finalv").style.background = "blue";
    }
    else {
        document.getElementById("correct2").innerHTML = ""
        document.getElementById("wrong2").innerHTML = "Wrong Answer"
        document.getElementById("finalv").style.background = "orange";
    }
}



function createButton3() {
    document.getElementById("placeButton1").innerHTML = ""
    document.getElementById("correct1").innerHTML = ""
    document.getElementById("wrong").innerHTML = ""
    document.getElementById("placeButton2").innerHTML = ""
    document.getElementById("placeButton2").innerHTML = ""
    document.getElementById("finalText").innerHTML = ""
    document.getElementById("finalT").innerHTML = ""
    document.getElementById('finall').innerHTML = '';
    document.getElementById("placeButton3").innerHTML = ""
    document.getElementById("noOfTokens").value = ""
    document.getElementById("noOfTypes").value = ""
    document.getElementById("correct2").innerHTML = ""
    document.getElementById("wrong2").innerHTML = ""
    document.getElementById("noOfTokens").style.background = "white";
    document.getElementById("noOfTypes").style.background = "white"
    var T = document.getElementById("table1");
    T.style.display = "block";
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Submit");
    x.id = "button3"
    x.appendChild(t);
    document.getElementById("placeButton1").appendChild(x);
    x.onclick = calAnswer3;

}


corpus3 = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair."'
corpus3WithoutSC = corpus3.replace(/[^a-zA-Z ]/g, "")
corpus3WithoutSC = corpus3WithoutSC.toLowerCase()
corpus3Tokens = corpus3WithoutSC.split(" ")

var outputcorpus3Tokens = [];

function calAnswer3() {

    var outputcorpus3Tokens = [];
    var count = 0;
    var start = false;

    for (j = 0; j < corpus3Tokens.length; j++) {
        for (k = 0; k < outputcorpus3Tokens.length; k++) {
            if (corpus3Tokens[j] == outputcorpus3Tokens[k]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            outputcorpus3Tokens.push(corpus3Tokens[j]);

        }
        start = false;
        count = 0;
    }

    noOfTokens = document.getElementById("noOfTokens").value
    noOfTypes = document.getElementById("noOfTypes").value
    if (noOfTokens == corpus3Tokens.length && noOfTypes == outputcorpus3Tokens.length) {
        document.getElementById("correct1").innerHTML = "Right Answer"
        document.getElementById("noOfTokens").style.background = "blue";
        document.getElementById("noOfTypes").style.background = "blue"
        document.getElementById("placeButton1").innerHTML = ""
        document.getElementById("wrong").innerHTML = ""
        var xt = document.createElement("BUTTON");
        var tt = document.createTextNode("Submit");
        xt.id = "button1"
        xt.appendChild(tt);
        document.getElementById("placeButton1").appendChild(xt);
        var x1t = document.createElement("BUTTON");
        var t1t = document.createTextNode("Continue");
        x1t.appendChild(t1t);
        document.getElementById("placeButton2").appendChild(x1t);
        x1t.onclick = calc3;
    }
    else {
        document.getElementById("correct1").innerHTML = ""
        document.getElementById("wrong").innerHTML = "Wrong Answer"
        document.getElementById("noOfTokens").style.background = "orange";
        document.getElementById("noOfTypes").style.background = "orange"
    }
}

function calc3() {

    document.getElementById('finalText').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById('finalT').innerHTML = "#new types:"
    document.getElementById('correct1').innerHTML = '';
    document.getElementById('placeButton1').innerHTML = '';
    document.getElementById('placeButton2').innerHTML = '';
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("size", 4);
    x.id = "finalv"
    document.getElementById("finall").appendChild(x);
    var x1 = document.createElement("BUTTON");
    var t1 = document.createTextNode("Submit");
    x1.id = "button5"
    x1.appendChild(t1);
    document.getElementById("placeButton3").appendChild(x1);
    x1.onclick = finalFun3;

}


function finalFun3() {
    var maxx = []
    var stemmer = new Snowball('English');
    for (i in corpus3Tokens) {
        stemmer.setCurrent(corpus3Tokens[i]);
        stemmer.stem();
        maxx.push((stemmer.getCurrent(corpus3Tokens[i])))


    }

    var outputcorpus3Tokens = [];
    var count = 0;
    var start = false;

    for (j = 0; j < maxx.length; j++) {
        for (k = 0; k < outputcorpus3Tokens.length; k++) {
            if (maxx[j] == outputcorpus3Tokens[k]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            outputcorpus3Tokens.push(maxx[j]);

        }
        start = false;
        count = 0;
    }

    finalvalue = document.getElementById("finalv").value
    if (finalvalue == outputcorpus3Tokens.length) {
        document.getElementById("wrong2").innerHTML = ""
        document.getElementById("correct2").innerHTML = "Right Answer"
        document.getElementById("finalv").style.background = "blue";
    }
    else {
        document.getElementById("correct2").innerHTML = ""
        document.getElementById("wrong2").innerHTML = "Wrong Answer"
        document.getElementById("finalv").style.background = "orange";
    }
}