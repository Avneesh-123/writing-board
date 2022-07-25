let pencilSize=5;
let eraserSize=5;
let rectSize=5;
let lineSize=5;
let sizeBoxArr=document.querySelector(".size-box");
sizeBoxArr[0].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];

    console.log(e.target);
    let allclass=e.target.classList;
    let firstclass=allclass[0];
    let test = elem.include(firstclass);
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
    let test = elem.include(firstclass);
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
    let test = elem.include(firstclass);
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
    let test = elem.include(firstclass);
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