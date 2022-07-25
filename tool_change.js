let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");
let pencilSize=5;
let eraserSize=5;
let rectSize=5;
let lineSize=5;
let sizeBoxArr=document.querySelectorAll(".size-box");
// identify -> click  -> again click
pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        // second click
        // options show 
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {

            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "pencil";
        tool.strokeStyle="purple";
        tool.lineWidth=pencilSize;
    }
})
eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        // second click
        // options show 
        options[1].style.display = "flex";
    } else {
        // eraser.style.border = "1px solid red";
        // koi aur clicked aur usko options visible to wo remove ho jaaye 
        cTool = "eraser";
        tool.strokeStyle="white";
        tool.lineWidth=eraserSize;
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
    }
})
rect.addEventListener("click", function (e) {
    if (cTool == "rect") {
        // second click
        // options show 
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "rect";
        tool.strokeStyle="purple";
        tool.lineWidth=rectSize;
    }
})
line.addEventListener("click", function (e) {
    if (cTool == "line") {
        // second click
        // options show 
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        // eraser.style.border = "1px solid red";
        cTool = "line";
        tool.strokeStyle="purple";
        tool.lineWidth=lineSize;
    }
})


                                                                //SIZE CHANGE LOGIC

sizeBoxArr[0].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];

    console.log(e.target);
    let allclass=e.target.classList;
    
    let firstclass=allclass[0];
    let test = elem.includes(firstclass);
    if(test){
        if(firstclass=="size1"){
            pencilSize=5;
        }else if(firstclass=="size2"){
            pencilSize=10;
        }else if(firstclass=="size3"){
            pencilSize=15;
        }else if(firstclass=="size4"){
            pencilSize=20;
        }
    }
    tool.lineWidth=pencilSize;
    console.log("pencilSize"+pencilSize);
})
sizeBoxArr[1].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];

    console.log(e.target);
    let allclass=e.target.classList;
    let firstclass=allclass[0];
    let test = elem.includes(firstclass);
    if(test){
        if(firstclass=="size1"){
            eraserSize=5;
        }else if(firstclass=="size2"){
            eraserSize=10;
        }else if(firstclass=="size3"){
            eraserSize=15;
        }else if(firstclass=="size4"){
            eraserSize=20;
        }
    }
    tool.lineWidth=eraserSize;
})
sizeBoxArr[2].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];

    console.log(e.target);
    let allclass=e.target.classList;
    let firstclass=allclass[0];
    let test = elem.includes(firstclass);
    if(test){
        if(firstclass=="size1"){
                rectSize=5;
        }else if(firstclass=="size2"){
                rectSize=10;
        }else if(firstclass=="size3"){
            rectSize=15;
        }else if(firstclass=="size4"){
                rectSize=20;
        }
    }
    tool.lineWidth=rectSize;
})
sizeBoxArr[3].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];

    console.log(e.target);
    let allclass=e.target.classList;
    let firstclass=allclass[0];
    let test = elem.includes(firstclass);
    if(test){
        if(firstclass=="size1"){
            lineSize=5;
        }else if(firstclass=="size2"){
            lineSize=10;
        }else if(firstclass=="size3"){
            lineSize=15;
        }else if(firstclass=="size4"){
            lineSize=20;
        }
    }
    tool.lineWidth=lineSize;
})
