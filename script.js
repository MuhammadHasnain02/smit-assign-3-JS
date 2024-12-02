function check(){

        // GET VALUES
    let totenglishmark = Number(document.getElementById("totenglish").value)
    let obtenglishmark = Number(document.getElementById("obtenglish").value)

    let toturdumark = Number(document.getElementById("toturdu").value)
    let obturdumark = Number(document.getElementById("obturdu").value)

    let totmathmark = Number(document.getElementById("totMath").value)
    let obtmathmark = Number(document.getElementById("obtMath").value)

    let totislamark = Number(document.getElementById("totMath").value)
    let obtislamark = Number(document.getElementById("obtMath").value)

        // PRINT VALUES
    document.getElementById("obtmark1").innerText = obtenglishmark
    document.getElementById("totmark11").innerText = totenglishmark

    document.getElementById("obtmark2").innerText = obturdumark
    document.getElementById("totmark22").innerText = toturdumark

    document.getElementById("obtmark3").innerText = obtmathmark
    document.getElementById("totmark33").innerText = totmathmark

    document.getElementById("obtmark4").innerText = obtislamark
    document.getElementById("totmark44").innerText = totislamark

    
    // TOTAL VALUES
    let total = obtenglishmark + obturdumark + obtmathmark + obtislamark
    document.getElementById("obttotal").innerText = total
    
    let totall = totenglishmark + toturdumark + totmathmark + totislamark
    document.getElementById("tottotal").innerText = totall
    
    //  PERCENTAGE CALCULATE
    let perc = (total / totall) * 100
    document.getElementById("prtperc").innerText = perc
    
    //  GRADE CALCULATE
    if(perc > 90){
        document.getElementById("prtgrad").innerText = "A+1"
    }
    else if(perc >= 80){
        document.getElementById("prtgrad").innerText = "A+"
    }
    else if(perc >= 70){
        document.getElementById("prtgrad").innerText = "A"
    }
    else if(perc >= 60){
        document.getElementById("prtgrad").innerText = "B"
    }
    else if(perc >= 50){
        document.getElementById("prtgrad").innerText = "C"
    }
    else{
        document.getElementById("prtgrad").innerText = "Failed"
    }

    //  REMARKS

    if(obtenglishmark < 20){
        document.getElementById("remark111").innerText = "Fail"
    }
    else if(obtenglishmark >= 20){
        document.getElementById("remark111").innerText = "Pass"
    }
    if(obturdumark < 20){
        document.getElementById("remark222").innerText = "Fail"
    }
    else if(obturdumark >= 20){
        document.getElementById("remark222").innerText = "Pass"
    }
    if(obtmathmark < 20){
        document.getElementById("remark333").innerText = "Fail"
    }
    else if(obtmathmark >= 20){
        document.getElementById("remark333").innerText = "Pass"
    }
    if(obtislamark < 20){
        document.getElementById("remark444").innerText = "Fail"
    }
    else if(obtislamark >= 20){
        document.getElementById("remark444").innerText = "Pass"
    }
}