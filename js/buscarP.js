function buscarP() {

    var cedula = document.getElementById("txtCedula").value;

    if (cedula != ""){ 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //alert("llegue cedula");
                document.getElementById("informacion").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../../controladores/admin/buscarP.php?cedula="+cedula,true);
        xmlhttp.send();

    }
    return false; 
}