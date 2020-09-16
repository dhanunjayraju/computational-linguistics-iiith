function isPresent(array,element){
    for(i=0;i<array.length;i++){
        if(array[i]+" "==element){
            return true;
        }
    }
    return false;
}
function showContentEng(){
    //buttons2.splice(0,buttons2.length);
    var corpusEng=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
            ["some students like to study in the night","at night some students like to study"],
            ["John and Mary went to church","Mary and John went to church"],
            ["John went to church after eating","after eating John went to church","John after eating went to church"],
            ["did he go to market","he did go to market"],
            ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
            ["John goes to the library and studies","John studies and goes to the library"],
            ["John ate an apple so did she","she ate an apple so did John"],
            ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
            ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
    var ranInd=Math.floor(Math.random()*10);
    var list=corpusEng[ranInd][0].split(" "),ranList=[],ind,size,count=0;
        var crct=corpusEng[ranInd];
        size=list.length;
        for(i=0;i<size;i++){
            ind=Math.floor(Math.random()*list.length);
            ranList.push(list[ind])
            list.splice(ind,1);
        }
        let buttons1=[];
        var d=document.getElementById("english_content");
        var h=document.createElement("h2");
        h.className="text-secondary";
        var sp=document.createElement("h1");
        sp.className="text-primary";
        var reForm=document.createElement("input");
        var checkSentence=document.createElement("input");
        var ans=document.createElement("h1");
        var show=document.createElement("input");
        var answers=document.createElement("pre");
        reForm.onclick=function(){
            for(i=0;i<size;i++)
                buttons1[i].style.display="inline";
            sp.innerHTML="";
            this.style.display="none";
            ans.innerHTML="";
            checkSentence.style.display="none";
            show.style.display="none";
            answers.innerHTML="";
            count=0;
        }
        reForm.type="button";
        reForm.value="Jubmble Sentence";
        reForm.className="btn btn-dark";
        checkSentence.type="button";
        checkSentence.className="btn btn-dark";
        checkSentence.value="Check";
        btnGroup=document.createElement("div");
        btnGroup.className="btn-group";
        d.append(btnGroup);
        for(i=0;i<ranList.length;i++)
            buttons1.push(0);
        for(i=0;i<ranList.length;i++){
            buttons1[i]=document.createElement("input");
            buttons1[i].type="button";
            buttons1[i].value=ranList[i];
            buttons1[i].className="btn btn-info";
            buttons1[i].onclick=function(){
                h.innerHTML="New Sentence(After Selecting words)";
                count+=1;
                d.append(h);
                var str=sp.innerHTML;
                str+=this.value;
                str+=" ";
                sp.innerHTML=str;
                d.append(sp);
                d.append(reForm);
                if(count==size){
                    d.append(checkSentence);
                    checkSentence.style.display="inline";
                }
                reForm.style.display="inline";
                this.style.display="none";
            }
            btnGroup.appendChild(buttons1[i]);
        }
        checkSentence.onclick=function(){
            var sentence=sp.innerHTML;
            show.type="button";
            show.value="Correct Sentence is(s)";
            show.className="btn btn-dark";
            if(isPresent(crct,sentence)){
                ans.innerHTML="Right Answer";
                ans.style.color="black";
            }
            else{
                ans.innerHTML="Wrong Answer!";
                d.append(show);
                show.style.display="inline";
                ans.style.color="yellow";
            }
            this.style.display="none";
            d.append(ans);
            ans.style.display="block";
        }
        show.onclick=function(){
            for(i=0;i<crct.length;i++){
                answers.innerHTML+=crct[i]+"<br>";
            }
            d.append(answers);
            answers.className="text is correct";
            answers.style.display="block";
            this.disabled="true";
        }
}
function showContentHin(){
    corpusHin=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
            ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
            ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
            ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
            ["क्या वो बाजार गया","वो क्या बाजार गया","क्या बाजार वो गया","वो बाजार क्या गया","बाजार क्या वो गया","बाजार वो क्या गया","क्या वो गया बाजार","वो क्या गया बाजार","क्या गया वो बाजार","वो गया क्या बाजार","गया क्या वो बाजार","गया वो क्या बाजार","गया क्या बाजार वो","क्या गया बाजार वो","गया बाजार क्या वो","क्या बाजार गया वो","बाजार गया क्या वो","बाजार गया क्या वो","वो बाजार गया क्या","बाजार वो गया क्या","बाजार गया वो क्या","वो गया बाजार क्या","गया वो बाजार क्या","गया बाजार वो क्या"],
            ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
            ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
            ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
    var ranInd=Math.floor(Math.random()*8);
    var list=corpusHin[ranInd][0].split(" "),ranList=[],ind,size,count=0;
    var crct=corpusHin[ranInd];
    size=list.length;
    for(i=0;i<size;i++){
        ind=Math.floor(Math.random()*list.length);
        ranList.push(list[ind])
        list.splice(ind,1);
    }
    let buttons2=[];
    var d=document.getElementById("hindi_content");
    var h=document.createElement("h2");
    h.className="text-secondary";
    var sp=document.createElement("h1");
    sp.className="text-primary";
    var reForm=document.createElement("input");
    var checkSentence=document.createElement("input");
    var ans=document.createElement("h1");
    var show=document.createElement("input");
    var answers=document.createElement("p");
    reForm.onclick=function(){
        for(i=0;i<size;i++)
            buttons2[i].style.display="inline";
        sp.innerHTML="";''
        this.style.display="none";
        ans.innerHTML="";
        checkSentence.style.display="none";
        show.style.display="none";
        answers.innerHTML="";
        count=0;
    }
    reForm.type="button";
    reForm.value="check Sentence";
    reForm.className="btn btn-dark";
    checkSentence.type="button";
    checkSentence.value="Check ";
    checkSentence.className="btn btn-dark";
    btnGroup=document.createElement("div");
    btnGroup.className="btn-group";
    d.append(btnGroup);
    for(i=0;i<ranList.length;i++)
        buttons2.push(0);
    for(i=0;i<ranList.length;i++){
        buttons2[i]=document.createElement("input");
        buttons2[i].type="button";
        buttons2[i].value=ranList[i];
        buttons2[i].className="btn btn-info";
        buttons2[i].onclick=function(){
            h.innerHTML="Formed Sentence(After Selecting words)";
            count+=1;
            d.append(h);
            var str=sp.innerHTML;
            str+=this.value;
            str+=" ";
            sp.innerHTML=str;
            d.append(sp);
            d.append(reForm);
            if(count==size){
                d.append(checkSentence);
                checkSentence.style.display="inline";
            }
            reForm.style.display="inline";
            this.style.display="none";
        }
        btnGroup.appendChild(buttons2[i]);
    }
    checkSentence.onclick=function(){
        var sentence=sp.innerHTML;
        show.type="button";
        show.value="Get Correct Sentence(s)";
        show.className="btn btn-dark";
        if(isPresent(crct,sentence)){
            ans.innerHTML="Correct Answer";
            ans.style.color="black";
        }
        else{
            ans.innerHTML="Wrong Answer!";
            d.append(show);
            show.style.display="inline";
            ans.style.color="yellow";
        }
        this.style.display="none";
        d.append(ans);
        ans.style.display="block";
    }
    show.onclick=function(){
        for(i=0;i<crct.length;i++){
            answers.innerHTML+=crct[i]+"<br>";
        }
        d.append(answers);
        answers.style.display="block";
        answers.className="text is correct";
        this.disabled="true";
    }
}
function genRandom(){
    var lan=document.getElementById("language").value;
    if(lan=="eng"){
        document.getElementById("hindi_content").style.display="none";
        document.getElementById("english_content").style.display="bold";
        showContentEng();
    }
    else if(lan=="hin"){
        document.getElementById("english_content").style.display="none";
        document.getElementById("hindi_content").style.display="bold";
        showContentHin();
    }
    else{
        document.getElementById("hindi_content").style.display="none";
        document.getElementById("english_content").style.display="none";
    }
}