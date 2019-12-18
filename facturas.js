var date = new Date(); // M-D-YYYY
        var d = date.getDate();
		var m = date.getMonth() + 1;
		var y = date.getFullYear();

		var t= (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
document.getElementById("p1").innerHTML =t;
function guardar(){
   
    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("cantidad").value;
    var cantidad = document.getElementById("precio-unitario").value;
    var total=precio*cantidad;
    let fila="<tr><td>"+producto+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+total+"</td></tr>";
      var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
 
    }

}
