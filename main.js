function poison()
{
 var x1 = document.getElementById("x1").value;
 var u1 = document.getElementById("u1").value;
 var e1 = Math.exp(-u1);
 var total= 1;
 for(var i= 1; i<=x1;i++)
 {
     var total= total*i;
 }
 var poison = (e1*Math.pow(u1,x1))/total;
 alert("La probabilidad de que lleguen exactamente 4 aviones pequeños durante un periodo de una hora es de " +poison);

}

document.getElementById("uno").onclick = function ()
{
poison();
}


function poison22()
{
 var x2 = document.getElementById("x2").value;
 var x3 = document.getElementById("x3").value;
 var x4 = document.getElementById("x4").value;
 var x5 = document.getElementById("x5").value;
 var u2 = document.getElementById("u2").value;
 var e2 = Math.exp(-u2);
 var total1= 1;

 for(var i= 1; i<=x2;i++)
 {
     var total1= total1*i;
 }
 var poison1 = (e2*Math.pow(u2,x2))/total1;

 //para segunda entrada de poison
 var total2= 1;

 for(var i= 1; i<=x3;i++)
 {
     var total2= total2*i;
 }
 var poison2 = (e2*Math.pow(u2,x3))/total2;

 //para tercer valor
 var total3= 1;

 for(var i= 1; i<=x4;i++)
 {
     var total3= total3*i;
 }
 var poison3 = (e2*Math.pow(u2,x4))/total3;

 //para cuarto valor
 var total4= 1;

 for(var i= 1; i<=x5;i++)
 {
     var total4= total4*i;
 }
 var poison4 = (e2*Math.pow(u2,x5))/total4;
 var poisonfin = poison1 + poison2 + poison3 + poison4;
 var poison22 = 1- poisonfin;
 alert("La probabilidad de que lleguen al menos 4 aviones pequeños durante un periodo de una hora es de " +poison22);

}

document.getElementById("dos").onclick = function ()
{
poison22();
}



function geo()
{
var p1 = document.getElementById("p1").value;
var x01 = document.getElementById("x01").value; 
var p11 = (1-p1);
var geo = (p1)*Math.pow(p11,(x01-1));
alert("la probabilidad de que una serie de 15 personas cruce sin problemas antes de que se atrape a una con un objeto cuestionable es de " +geo);
}

document.getElementById("tres").onclick = function ()
{
geo();
}



function geo1()
{
var p2 = document.getElementById("p2").value;
var geo1 = (1/p2) - 1;
alert("El numero esperado de personas que pasaran antes de que se detenga a una es de " +geo1);
}

document.getElementById("cuatro").onclick = function ()
{
geo1();
}








