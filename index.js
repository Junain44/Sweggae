
function calc(){
    let bulkF = document.getElementById("BulkF").value;
    let bulkM = document.getElementById("BulkM").value;
    let gt = 0;

    let fp = 150.95*bulkF;
    let mp = 180.95*bulkM;

    gt = fp+mp;
    document.getElementById("TotboxF").innerHTML = fp.toFixed(2);
    document.getElementById("TotboxM").innerHTML = mp.toFixed(2);
    document.getElementById("grandtotal").innerHTML = gt.toFixed(2);
}

