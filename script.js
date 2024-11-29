// ENGLISH
function obt_eng(){
    let value1 = document.getElementById("obt-english").value
    document.getElementById("obt-mark1").innerText = value1
}
function tot_eng(){
    let value11 = document.getElementById("tot-english").value
    document.getElementById("tot-mark11").innerText = value11
}
// URDU
function obt_urdu(){
    let value2 = document.getElementById("obt-urdu").value
    document.getElementById("obt-mark2").innerText = value2
}
function tot_urdu(){
    let value22 = document.getElementById("tot-urdu").value
    document.getElementById("tot-mark22").innerText = value22
}
// MATH
function obt_Math(){
    let value3 = document.getElementById("obt-Math").value
    document.getElementById("obt-mark3").innerText = value3
}
function tot_Math(){
    let value33 = document.getElementById("tot-Math").value
    document.getElementById("tot-mark33").innerText = value33
}
// TOTAL
function obt_total(){
    let value1 = document.getElementById("obt-english").value
    let value2 = document.getElementById("obt-urdu").value
    let value3 = document.getElementById("obt-Math").value
    
    let total = value1 + value2 + value3
    document.getElementById("obt-total").innerText = total
}
function tot_total(){
    let value1 = document.getElementById("tot-english").value
    let value2 = document.getElementById("tot-urdu").value
    let value3 = document.getElementById("tot-Math").value
    
    let total = value1 + value2 + value3
    document.getElementById("tot-total").innerText = total
}