			countImg = 1;
			countTime = 0;
			bg1Container = document.getElementById("bg1");
			bg2Container = document.getElementById("bg2");
			
			setInterval(function(){
				countTime += 1;
				if(countTime % 10 == 7){
					countImg += 1;
					bg1Container.style = `background-image: url(http://yurun.ueuo.com/api/bdimg.php?img=美女&${countImg})`;
				}else if((countTime + 5) % 10 == 7){
					countImg += 1;
					bg2Container.style = `background-image: url(http://yurun.ueuo.com/api/bdimg.php?img=二次元&${countImg})`;
				}
			}, 1000);