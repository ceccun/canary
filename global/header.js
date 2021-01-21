fetch('/global/header.html')
.then((response)=>{
    if (response.status == 200){
    response.text().then((data)=>{
        var newt = document.createElement('div');
        newt.innerHTML = data;
        document.getElementById("ha1").appendChild(newt);
    })
}});