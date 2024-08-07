			countImg = 1;
			countTime = 10;
			bg1Container = document.getElementById("bg1");
			bg2Container = document.getElementById("bg2");
			
			setInterval(function(){
				countTime += 1;
				if(countTime % 10 == 7){
					countImg += 1;
					bg1Container.style = `background-image: url(http://yurun.ueuo.com/api/bdimg.php?img=meinv&${countImg})`;
				}else if((countTime + 5) % 10 == 7){
					countImg += 1;
					bg2Container.style = `background-image: url(http://yurun.ueuo.com/api/bdimg.php?img=erciyuan&${countImg})`;
				}
			}, 1000);
