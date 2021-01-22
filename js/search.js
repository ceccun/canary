window["query"] = new URL(window.location).searchParams.get("q");
window["firstItems"] = 0;

flsestrings["wJpGijhQgX"]={
"default": "<p>You're currently using an early-access version of Stella.</p>",
"ja": "<p>現在、早期アクセスバージョンのStellaを使用しています。</p>"
}
flsestrings["UTQ1eptGx9"]={
"default": "<p>Connect your Stella ID account to get Pickup activity from other devices.</p>"
}
function flseLoadcall(){

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