function contador() {
    // declação de variavel
    var num = document.getElementById("num").value;

    // repita... ate
    do {
        alert(num);
        num--;
    } 
    while(num >= -10);
}