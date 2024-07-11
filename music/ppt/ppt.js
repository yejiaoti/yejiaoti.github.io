			countImg = 1;
			countTime = 0;
			bg1Container = document.getElementById("bg1");
			bg2Container = document.getElementById("bg2");
			
			setInterval(function(){
				countTime += 1;
				if(countTime % 10 == 7){
					countImg += 1;
					bg1Container.style = `background-image: url(https://www.dmoe.cc/random.php&${countImg})`;
				}else if((countTime + 5) % 10 == 7){
					countImg += 1;
					bg2Container.style = `background-image: url(https://api.r10086.com/樱道随机图片api接口.php?自适应图片系列=Fate&${countImg})`;
				}
			}, 1000);
