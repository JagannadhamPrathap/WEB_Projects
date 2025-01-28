const x = document.getElementById("input");
const y = document.getElementById("opt1");
const z = document.getElementById("opt2");
const r = document.getElementById("result");
let t;
function convert(){
    if (y.checked){
        t = Number(x.value);
        t = t*(9/5) + 32
        r.textContent = t+"°F";
    }else if(z.checked){
        t = Number(x.value);
        t = (t-32)*(5/9);
        r.textContent = t+"°C"
    }else{
        r.textContent = "Select unit";
    }
}