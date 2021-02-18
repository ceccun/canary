window["query"] = new URL(window.location).searchParams.get("q");
window["initquery"] = new URL(window.location).searchParams.get("q");
window["firstItems"] = 0;

flsestrings["text"]={
    "default": "Text",
    "ja": "ウェブ",
    "zh": "互联网"
};
flsestrings["images"]={
    "default": "Images",
    "ja": "写真",
    "zh": "相片"
};
flsestrings["tab"]={
    "default": "Tab"
},
flsestrings["tabbed"]={
    "default": "Tabbed",
    "ja": "保存しました",
    "zh": "已保存"
}

function flseLoadcall(){
    const uri = document.URL;
    const currenturi = uri.split("#gsc.tab=")[1].split("&")[0];
    if(currenturi == "0"){
        document.getElementById("imgbtn").setAttribute("class","");
        document.getElementById("txtbtn").setAttribute("class","active");
    } else{
        document.getElementById("txtbtn").setAttribute("class","");
        document.getElementById("imgbtn").setAttribute("class","active");
    }
    var s = window.localStorage;
    if (s.getItem("tabs") == null){
        const data = JSON.parse(s.getItem("tabs"))
        data.forEach((item, index) => {
            if (item["name"] == window["query"]){
                document.getElementById("tabbtn").setAttribute("class","active");
                document.getElementById("tabbtn2").setAttribute("class","active");
                window["tabindex"] = index
            }
        });
    }
}

function flseUpdate(){
    console.log("ok");
    if (window["firstItems"] != 5){
        try{
            document.getElementById('BG8dt1y1iW').addEventListener("keyup",(e)=>{
                if (e.keyCode == 13){
                    if (document.getElementById('BG8dt1y1iW').value != '')
                    window.location = "/search?q=" + encodeURIComponent(document.getElementById('BG8dt1y1iW').value);
                }
                window["query"] = document.getElementById('BG8dt1y1iW').value;
            });
            window["firstItems"] += 1;
        } catch(error){ console.log(error); }
    }
        document.getElementById('BG8dt1y1iW').value = window["query"];
}

document.getElementById("txtbtn").addEventListener("click", ()=>{
    window.location = 'search.html?q=' + encodeURIComponent(window["initquery"]) + '#gsc.tab=0&gsc.q=' + encodeURIComponent(window["initquery"]) +'&gsc.page=1';
    document.getElementById("imgbtn").setAttribute("class","");
    document.getElementById("txtbtn").setAttribute("class","active");
});
document.getElementById("imgbtn").addEventListener("click", ()=>{
    window.location = 'search.html?q=' + encodeURIComponent(window["initquery"]) + '#gsc.tab=1&gsc.q=' + encodeURIComponent(window["initquery"]) +'&gsc.page=1';
    document.getElementById("txtbtn").setAttribute("class","");
    document.getElementById("imgbtn").setAttribute("class","active");
});

function loadcall(){
    document.getElementById("loadingcon").setAttribute("style","display:none;")
}