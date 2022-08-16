function leapYear(){
    var year=parseInt(document.getElementById('year').value);
    if((year%100===0)?(year%400 ===0):(year%4 ===0)){
        var result="leap year";
        window.alert(result);
        // document.getElementById("display").innerHTM=result;
    }else{
        var result1="Not leap year";
        window.alert(result1);

    }

    
}