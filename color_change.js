let redColor = document.querySelector(".red");
        let greenColor = document.querySelector(".green");
        let blueColor = document.querySelector(".blue");
        redColor.addEventListener("click", function () {
            tool.strokeStyle = "lightpink";
        })
        greenColor.addEventListener("click", function () {
            tool.strokeStyle = "lightgreen";
        })
        blueColor.addEventListener("click", function () {
            tool.strokeStyle = "lightblue";
        })