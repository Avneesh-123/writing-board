 // canavas board -> left  point kitna aage  hai 
 let boardLeft = canvasBoard.getBoundingClientRect().left;//basically its the left margin in the html page
 let boardTop = canvasBoard.getBoundingClientRect().top;//canavas board -> top point kitna aage  hai 
 let iX, iY, fX, fY;
 let drawingMode = false;
 //start
 body.addEventListener("mousedown", function (e) {//for pencil
     iX = e.clientX - boardLeft
     iY = e.clientY - boardTop
     //tool helps to draw 
     if (cTool == "pencil" || cTool=="eraser") {
         drawingMode = true;
         tool.beginPath();
         tool.moveTo(iX, iY);
     }
 })
 //finish
 body.addEventListener("mouseup", function (e) {
     //basically as soon as we release the mouse up its the finish point so we had to make drawing mode as false
     if (cTool == "pencil" || cTool=="eraser") {
         drawingMode = false;

     } else if (cTool == "rect" || cTool == "line") {
         // rect, line
         fX = e.clientX + boardLeft;;
         fY = e.clientY - boardTop;
         let width = fX - iX;
         let height = fY - iY;
         if (cTool == "rect") {
             tool.strokeRect(iX, iY, width, height);
         } else if (cTool == "line") {
             tool.beginPath();
             tool.moveTo(iX, iY);
             tool.lineTo(fX, fY);
             tool.stroke();
             //console.log("line tool is pending")
         }
     }

 })
 body.addEventListener("mousemove", function (e) {
     if (drawingMode == false){
         return;
 }else
    
         fX = e.clientX - boardLeft;
         fY = e.clientY - boardTop;
         tool.lineTo(fX, fY);
         tool.stroke();
         iX = fX;
         iY = fY;


 })
