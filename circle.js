//finding equation of a circle using three points lying on it.

function getcir(x1,  y1,  x2,  y2, x3, y3)
{
        var x1 = document.getElementById('x1').value;
        var y1 = document.getElementById('y1').value;
        var x2 = document.getElementById('x2').value;
        var y2 = document.getElementById('y2').value;
        var x3 = document.getElementById('x3').value;
        var y3 = document.getElementById('y3').value;
       
        alert ("Ready to see the result?");
    var x12 = (x1 - x2);
    var x13 = (x1 - x3);
 
    var y12 =( y1 - y2);
    var y13 = (y1 - y3);
 
    var y31 = (y3 - y1);
    var y21 = (y2 - y1);
 
    var x31 = (x3 - x1);
    var x21 = (x2 - x1);
 
    //x1^2 - x3^2
    var sx13 = Math.pow(x1, 2) - Math.pow(x3, 2);
 
    // y1^2 - y3^2
    var sy13 = Math.pow(y1, 2) - Math.pow(y3, 2);
 
    var sx21 = Math.pow(x2, 2) - Math.pow(x1, 2);
    var sy21 = Math.pow(y2, 2) - Math.pow(y1, 2);
 
    var f = ((sx13) * (x12)
            + (sy13) * (x12)
            + (sx21) * (x13)
            + (sy21) * (x13))
            / (2 * ((y31) * (x12) - (y21) * (x13)));
    var g = ((sx13) * (y12)
            + (sy13) * (y12)
            + (sx21) * (y13)
            + (sy21) * (y13))
            / (2 * ((x31) * (y12) - (x21) * (y13)));
 
    var c = -(Math.pow(x1, 2)) -
    Math.pow(y1, 2) - 2 * g * x1 - 2 * f * y1;
 
    // Equation of circle is
    // x^2 + y^2 + 2*g*x + 2*f*y + c = 0
    // where centre is (h = -g, k = -f) and radius r
    // as r^2 = h^2 + k^2 - c
    var h = -g;
    var k = -f;
    var sqr_of_r = h * h + k * k - c;
 
    // r is the radius
    var r = Math.sqrt(sqr_of_r);
 
   var res="";
   res = "Center is ("+ h + ", "+ k +")" + "<br>";
   res+= "Radius = " + r.toFixed(5);

   document.getElementById('tresult').innerHTML = res;
}

function called() {

        getcir(x1, y1, x2, y2, x3, y3);
}

 