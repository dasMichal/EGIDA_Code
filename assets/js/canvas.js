//Get canvas by ID and set it to a variable
var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas_round");
//Set the canvas to a variable


//On Document ready
$(document).ready(function () 
{
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";

    //fillRect(ctx, 0, 0, $("#canvasCard").width(), $("#canvasCard").height());

    //get mouse canvas position
    /*
    canvas.addEventListener("mousemove", function (evt)
    {
        var mousePos = getMousePos(canvas, evt);
        var message = "Mouse position: " + mousePos.x + "," + mousePos.y;
        $("#mousePos").text(message);
        console.log(mousePos);
        console.log(PosXtoCenter(canvas, mousePos.x));
        console.log(PosYtoCenter(canvas, mousePos.y));
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
      //drawCircle(canvas, mousePos.x,mousePos.y, $("#circleSize_slider").val());
    }, false);
    */

    ctx.fillStyle = "red";

    drawAll(ctx);
    //drawCircle(canvas, PosXtoCenter(canvas, $("#circleX_slider").val()), PosYtoCenter(canvas, $("#circleY_slider").val()), $("#circleSize_slider").val());

    //detect if div changes size
    $(window).resize(function ()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resizeCanvas(canvas);

        //change slider max values to fit new canvas size
        $("#circleX_slider").attr("max", $(".card").width() / 2);
        $("#circleY_slider").attr("max", $(".card").height() / 2);
        $("#circleX_slider").attr("min", -($(".card").width() / 2));
        $("#circleY_slider").attr("min", -($(".card").height() / 2));

        drawAll(ctx);

    });

    //if slider changes
    $("#circleSize_slider").on("input", function () 
    {
        drawAll(ctx);
    });

    $("#circleX_slider").on("input", function () 
    {
        drawAll(ctx);
    });

    $("#circleY_slider").on("input", function ()  
    {
        drawAll(ctx);
    });


});



//get mouse position
function getMousePos(canvas, evt)
{
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


function drawAll(ctx)
{

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw Head
    ctx.fillStyle = "#fbd3b5";
    //drawCircle(canvas, findCenter(canvas)[0], findCenter(canvas)[1], $("#circle_slider").val());
    drawCircle(canvas, PosXtoCenter(canvas, $("#circleX_slider").val()), PosYtoCenter(canvas, $("#circleY_slider").val()), $("#circleSize_slider").val());
    //Draw Eyes 
    ctx.fillStyle = "white";
    drawCircle(canvas, PosXtoCenter(canvas, -20 + parseInt($("#circleX_slider").val()) ), PosYtoCenter(canvas, -20+ parseInt($("#circleY_slider").val()) ), parseInt($("#circleSize_slider").val() / 0.09) / 100);
    drawCircle(canvas, PosXtoCenter(canvas, 20 + parseInt($("#circleX_slider").val()) ), PosYtoCenter(canvas, -20+ parseInt($("#circleY_slider").val()) ), parseInt($("#circleSize_slider").val() / 0.09) / 100);
    //Draw Pupiles
    ctx.fillStyle = "green";
    drawCircle(canvas, PosXtoCenter(canvas, -20 + parseInt($("#circleX_slider").val()) ), PosYtoCenter(canvas, -20+ parseInt($("#circleY_slider").val()) ), parseInt($("#circleSize_slider").val() / 0.2) / 100);
    drawCircle(canvas, PosXtoCenter(canvas, 20 + parseInt($("#circleX_slider").val()) ), PosYtoCenter(canvas, -20+ parseInt($("#circleY_slider").val()) ), parseInt($("#circleSize_slider").val() / 0.2) / 100);
    
    
    //Draw Glasses
    ctx.fillStyle = "black";
    ctx.lineWidth = 1,7;
    //draw line between two points
    ctx.strokeStyle = "black";
    drawStrokeCircle(canvas, PosXtoCenter(canvas, -20 + parseInt($("#circleX_slider").val()) ), PosYtoCenter(canvas, -20+ parseInt($("#circleY_slider").val()) ), parseInt($("#circleSize_slider").val() / 0.050) / 100);
    drawStrokeCircle(canvas, PosXtoCenter(canvas, 20 + parseInt($("#circleX_slider").val()) ), PosYtoCenter(canvas, -20+ parseInt($("#circleY_slider").val()) ), parseInt($("#circleSize_slider").val() / 0.050) / 100);
    //draw line between two points

    //reset line width
    ctx.lineWidth = 1;


    var tmp3= getRadius(parseInt($("#circleSize_slider").val() / 0.050) / 100);


    ctx.beginPath();
    ctx.moveTo(PosXtoCenter(canvas, (-20 + tmp3)  + parseInt($("#circleX_slider").val())), PosYtoCenter(canvas, -20 + parseInt($("#circleY_slider").val())));
    ctx.lineTo(PosXtoCenter(canvas, 20-tmp3 + parseInt($("#circleX_slider").val())), PosYtoCenter(canvas, -20 + parseInt($("#circleY_slider").val())));
    ctx.stroke();



    //draw mouth
    //draw Arc between two points
    ctx.beginPath();
    ctx.arc(PosXtoCenter(canvas, 0 + parseInt($("#circleX_slider").val())), PosYtoCenter(canvas, 20 + parseInt($("#circleY_slider").val())), 22, 0, Math.PI);
    ctx.stroke();

    //draw Hair
    //stroke thickness in pixels
    ctx.lineWidth = 10;
    //blonde color in hex
    ctx.strokeStyle = "#844a2d";
    //draw inverse Arc between two points
    ctx.beginPath();
    ctx.arc(PosXtoCenter(canvas, 0 + parseInt($("#circleX_slider").val())),PosYtoCenter(canvas, 0 + parseInt($("#circleY_slider").val())),$("#circleSize_slider").val(),Math.PI,0);
    ctx.stroke();

    //reset line width
    ctx.lineWidth = 1;







}


//get diameter of circle 
function getDiameter(radius)
{
    var tmp = 2 * radius;
    return parseFloat(tmp);
}

//get radius of circle
function getRadius(diameter)
{
    var tmp = diameter / 2;
    return parseFloat(tmp);
}



//function to fill canvas rectangles
function fillRect(canvas, x, y, width, height)
{
    canvas.fillRect(x, y, width, height);
}

//Draw rectangle on canvas
function drawRect(canvas, x, y, width, height)
{
    var ctx = canvas.getContext("2d");
    ctx.strokeRect(x, y, width, height);
}


//draw a circle on the canvas 
function drawCircle(canvas, x, y, radius)
{
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

//draw a stroke circle on the canvas
function drawStrokeCircle(canvas, x, y, radius)
{
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}


//Jquery find center of canvas
function findCenter(canvas)
{
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    return [centerX, centerY];
}


//resize canvas to fit div
function resizeCanvas(canvas)
{
    canvas.width = $(".card").width();
    canvas.height = $(".card").height();
}

//position regarding to the center of the canvas
function positionToCenter(canvas, x, y)
{
    var centerX = findCenter(canvas)[0];
    var centerY = findCenter(canvas)[1];
    return [centerX + x, centerY + y];
}

function PosXtoCenter(canvas, x)
{
    
    var centerX = findCenter(canvas)[0];
    return parseInt(centerX) + parseInt(x);
}
function PosYtoCenter(canvas, y)
{
    var centerY = findCenter(canvas)[1];
    return parseInt(centerY) + parseInt(y);
}


//Size of circle percentage of other  circle size
function circleSizePercentage(canvas, size)
{
    var centerX = findCenter(canvas)[0];
    var centerY = findCenter(canvas)[1];
    return parseInt(size) * (canvas.width / 2) / 100;
}