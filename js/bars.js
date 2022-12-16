let chamoshla = () => {
    let headerheight = document.getElementById("header").style.height;
    console.log(headerheight);

    if(headerheight == ""){
        headerheight = document.getElementById("header").style.height = "300px";
    }else{
        headerheight = document.getElementById("header").style.height = "";
    }
} 