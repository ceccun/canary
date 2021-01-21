flsestrings["o8zmSfP7yK"]={
        "default": "<input id='BG8dt1y1iW' placeholder='Search'></input><flsemobilehide><div onclick='openServices()'><image src='/images/hexagon.svg'></image></div></flsemobilehide>",
        "ja": "<input id='BG8dt1y1iW' placeholder='探す'></input><flsemobilehide><div onclick='openServices()'><image src='/images/hexagon.svg'></image></div></flsemobilehide>"
    }
flsestrings["wJpGijhQgX"]={
    "default": "<p>You're currently using an early-access version of Stella.</p>",
    "ja": "<p>現在、早期アクセスバージョンのStellaを使用しています。</p>"
}
flsestrings["UTQ1eptGx9"]={
    "default": "<p>Connect your Stella ID account to get Pickup activity from other devices.</p>"
}
function flseLoadcall(){
document.getElementById('BG8dt1y1iW').addEventListener("keyup",(e)=>{
        if (e.keyCode == 13){
            if (document.getElementById('BG8dt1y1iW').value != '')
            window.location = "/search?q=" + encodeURIComponent(document.getElementById('BG8dt1y1iW').value);
        }
    });
}

function openServices(){

}