let countImg = 1;  
let countTime = 0;  
const bg1Container = document.getElementById("bg1");  
const bg2Container = document.getElementById("bg2");  

setInterval(function() {  
    countTime += 1;  
    if (countTime % 10 === 7) {  
        countImg += 1;  
        bg1Container.style.backgroundImage = `url(tcimg.php?img=meinv&${countImg})`;  
    } else if ((countTime + 5) % 10 === 7) {  
        countImg += 1;  
        bg2Container.style.backgroundImage = `url(tcimg.php?img=erciyuan&${countImg})`;  
    }  
}, 1000);
