let left = document.getElementsByClassName('slider_btn_left')[0];
let right = document.getElementsByClassName('slider_btn_right')[0];
let clk = 0;
let main = document.getElementsByTagName('body')[0];
let img = document.getElementsByClassName('img')[0];
left.onclick = function() {
    clk--;
    if(clk<0) {
        clk=6;
    }
    numCLK(clk);
    
}
right.onclick = function() {
    clk++;
    if(clk>6) {
        clk=0;
    }
    numCLK(clk);
    
}
function numCLK(clk){
    if(clk==0){
        main.style.background = `url('/assets/Слой\ 1286\ копия\ 3@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой\ 1286\ копия\ 4@1X.png') no-repeat`;
        img.style.backgroundSize = '350%';
        img.style.backgroundPositionX = '50%';
    }
    if(clk==1){
        main.style.background = `url('/assets/Слой\ 1286\ копия\ 4@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой 1286 копия 5@1X.png') no-repeat`;
        img.style.backgroundSize = '350%';
        img.style.backgroundPositionX = '50%';
    }
        if(clk==2){
        main.style.background = `url('/assets/Слой 1286 копия 5@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой 1286@1X.png') no-repeat`;
        img.style.backgroundSize = '350%';
        img.style.backgroundPositionX = '50%';
    }
        if(clk==3){
        main.style.background = `url('/assets/Слой 1286@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой 2236@1X.png') no-repeat`;
        img.style.backgroundSize = '350%';
        img.style.backgroundPositionX = '50%';
    }
        if(clk==4){
        main.style.background = `url('/assets/Слой 2236@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой 2240@1X.png') no-repeat`;
        img.style.backgroundSize = '350%';
        img.style.backgroundPositionX = '50%';
    }
        if(clk==5){
        main.style.background = `url('/assets/Слой 2240@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой 2246@1X.png') no-repeat`;
        img.style.backgroundSize = '250%';
        img.style.backgroundPositionX = '50%';
    }
        if(clk==6){
        main.style.background = `url('/assets/Слой 2246@1X.png') no-repeat`;
        main.style.backgroundPositionX = '50%';
        img.style.background = `url('/assets/Слой\ 1286\ копия\ 3@1X.png') no-repeat`;
        img.style.backgroundSize = '250%';
        img.style.backgroundPositionX = '50%';
    }
           
}