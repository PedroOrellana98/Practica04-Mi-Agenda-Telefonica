function editar() {
    let params = new URLSearchParams(location.search);
    var correo = params.get('correo');
    var contra = params.get('contrasena');

    if (correo != "" && contra != ""){ 
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
        xmlhttp.open("GET","../../controladores/admin/editar.php?correo="+correo+"&contrasena="+contra,true);
        xmlhttp.send();

    }
    return false;
}