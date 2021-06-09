let homeButton = document.getElementById('test-button');
let aboutButton = document.getElementById('about-button');
let settingsButton = document.getElementById('settings-button');
let homeBurger = document.getElementById('test-burger');
let aboutBurger = document.getElementById('about-burger');
let settingsBurger = document.getElementById('settings-burger');
	let lenguageButton = document.getElementById('lenguage-button');
	let modeButton = document.getElementById('mode-button');
	let accontSign = document.getElementById('accont-sign');
let modeColor = document.getElementById('modeColor');
let lenguageColor = document.getElementById('lenguage-color');

let like = [].slice.call(document.getElementsByClassName('like'));
let burgerPSetting = [].slice.call(document.getElementsByClassName('burger-p-settings'));
let burgerPTests = [].slice.call(document.getElementsByClassName('burger-p-tests'));

	//<LocalStore>
		//<GenshinTest>
		let genshinLike = localStorage.getItem("genshinLike");
		if(genshinLike == null){ genshinLike = 0;};
		localStorage.setItem("genshinLike", genshinLike);

		let genshinPassed = localStorage.getItem("genshinPassed");
		if(genshinPassed == null){ genshinPassed = 0;};
		localStorage.setItem("genshinPassed", genshinPassed);
		
		//<zamonkHaula>
		let zamonkHaulaPassed = localStorage.getItem("zamonkHaulaPassed");
		if(zamonkHaulaPassed == null){ zamonkHaulaPassed = 0;};
		localStorage.setItem("zamonkHaulaPassed", zamonkHaulaPassed);

		let zamonkHaulaLike = localStorage.getItem("zamonkHaulaLike");
		if(zamonkHaulaLike == null){ zamonkHaulaLike = 0;};
		localStorage.setItem("zamonkHaulaLike", zamonkHaulaLike);

		//<klinokDemonov>
		let klinokDemonovLike = localStorage.getItem("klinokDemonovLike");
		if(klinokDemonovLike == null){ klinokDemonovLike = 0;};
		localStorage.setItem("klinokDemonovLike", klinokDemonovLike);

		let klinokDemonovPassed = localStorage.getItem("klinokDemonovPassed");
		if(klinokDemonovPassed == null){ klinokDemonovPassed = 0;};
		localStorage.setItem("klinokDemonovPassed", klinokDemonovPassed);

		//<metalfamily>
		let metalfamilyLike = localStorage.getItem("metalfamilyLike");
		if(metalfamilyLike == null){ metalfamilyLike = 0;};
		localStorage.setItem("metalfamilyLike", metalfamilyLike);

		let metalfamilyPassed = localStorage.getItem("metalfamilyPassed");
		if(metalfamilyPassed == null){ metalfamilyPassed = 0;};
		localStorage.setItem("metalfamilyPassed", metalfamilyPassed);

		//<overlord>
		let overlordLike = localStorage.getItem("overlordLike");
		if(overlordLike == null){ overlordLike = 0;};
		localStorage.setItem("overlordLike", overlordLike);

		let overlordPassed = localStorage.getItem("overlordPassed");
		if(overlordPassed == null){ overlordPassed = 0;};
		localStorage.setItem("overlordPassed", overlordPassed);

		//<element>
		let elementLike = localStorage.getItem("elementLike");
		if(elementLike == null){ elementLike = 0;};
		localStorage.setItem("elementLike", elementLike);

		let elementPassed = localStorage.getItem("elementPassed");
		if(elementPassed == null){ elementPassed = 0;};
		localStorage.setItem("elementPassed", elementPassed);

		//<angelOrDemonTest>
		let angelOrDemonTestLike = localStorage.getItem("angelOrDemonTestLike");
		if(angelOrDemonTestLike == null){ angelOrDemonTestLike = 0;};
		localStorage.setItem("angelOrDemonTestLike", angelOrDemonTestLike);

		let angelOrDemonTestPassed = localStorage.getItem("angelOrDemonTestPassed");
		if(angelOrDemonTestPassed == null){ angelOrDemonTestPassed = 0;};
		localStorage.setItem("angelOrDemonTestPassed", angelOrDemonTestPassed);

		//<demon>
		let demonLike = localStorage.getItem("demonLike");
		if(demonLike == null){ demonLike = 0;};
		localStorage.setItem("demonLike", demonLike);

		let demonPassed = localStorage.getItem("demonPassed");
		if(demonPassed == null){ demonPassed = 0;};
		localStorage.setItem("demonPassed", demonPassed);

		//<angel>
		let angelLike = localStorage.getItem("angelLike");
		if(angelLike == null){ angelLike = 0;};
		localStorage.setItem("angelLike", angelLike);

		let angelPassed = localStorage.getItem("angelPassed");
		if(angelPassed == null){ angelPassed = 0;};
		localStorage.setItem("angelPassed", angelPassed);

		//<potion>
		let potionLike = localStorage.getItem("potionLike");
		if(potionLike == null){ potionLike = 0;};
		localStorage.setItem("potionLike", potionLike);

		let potionPassed = localStorage.getItem("potionPassed");
		if(potionPassed == null){ potionPassed = 0;};
		localStorage.setItem("potionPassed", potionPassed);

		//<hanahaki>
		let hanahakiLike = localStorage.getItem("hanahakiLike");
		if(hanahakiLike == null){ hanahakiLike = 0;};
		localStorage.setItem("hanahakiLike", hanahakiLike);

		let hanahakiPassed = localStorage.getItem("hanahakiPassed");
		if(hanahakiPassed == null){ hanahakiPassed = 0;};
		localStorage.setItem("hanahakiPassed", hanahakiPassed);

		//<beer>
		let beerLike = localStorage.getItem("beerLike");
		if(beerLike == null){ beerLike = 0;};
		localStorage.setItem("beerLike", beerLike);

		let beerPassed = localStorage.getItem("beerPassed");
		if(beerPassed == null){ beerPassed = 0;};
		localStorage.setItem("beerPassed", beerPassed);

		//<tea>
		let teaLike = localStorage.getItem("teaLike");
		if(teaLike == null){ teaLike = 0;};
		localStorage.setItem("teaLike", teaLike);

		let teaPassed = localStorage.getItem("teaPassed");
		if(teaPassed == null){ teaPassed = 0;};
		localStorage.setItem("teaPassed", teaPassed);

		//<rain>
		let rainLike = localStorage.getItem("rainLike");
		if(rainLike == null){ rainLike = 0;};
		localStorage.setItem("rainLike", rainLike);

		let rainPassed = localStorage.getItem("rainPassed");
		if(rainPassed == null){ rainPassed = 0;};
		localStorage.setItem("rainPassed", rainPassed);

		//<bread>
		let breadLike = localStorage.getItem("breadLike");
		if(breadLike == null){ breadLike = 0;};
		localStorage.setItem("breadLike", breadLike);

		let breadPassed = localStorage.getItem("breadPassed");
		if(breadPassed == null){ breadPassed = 0;};
		localStorage.setItem("breadPassed", breadPassed);

		//<mushroom>
		let mushroomLike = localStorage.getItem("mushroomLike");
		if(mushroomLike == null){ mushroomLike = 0;};
		localStorage.setItem("mushroomLike", mushroomLike);

		let mushroomPassed = localStorage.getItem("mushroomPassed");
		if(mushroomPassed == null){ mushroomPassed = 0;};
		localStorage.setItem("mushroomPassed", mushroomPassed);

		//<mem>
		let memLike = localStorage.getItem("memLike");
		if(memLike == null){ memLike = 0;};
		localStorage.setItem("memLike", memLike);

		let memPassed = localStorage.getItem("memPassed");
		if(memPassed == null){ memPassed = 0;};
		localStorage.setItem("memPassed", memPassed);

		//<spoiled>
		let spoiledPassed = localStorage.getItem("spoiledPassed");
		if(spoiledPassed == null){ spoiledPassed = 0;};
		localStorage.setItem("spoiledPassed", spoiledPassed);

		let spoiledLike = localStorage.getItem("spoiledLike");
		if(spoiledLike == null){ spoiledLike = 0;};
		localStorage.setItem("spoiledLike", spoiledLike);

		//<vegetable>
		let vegetableLike = localStorage.getItem("vegetableLike");
		if(vegetableLike == null){ vegetableLike = 0;};
		localStorage.setItem("vegetableLike", vegetableLike);

		let vegetablePassed = localStorage.getItem("vegetablePassed");
		if(vegetablePassed == null){ vegetablePassed = 0;};
		localStorage.setItem("vegetablePassed", vegetablePassed);

		//<cup>
		let cupLike = localStorage.getItem("cupLike");
		if(cupLike == null){ cupLike = 0;};
		localStorage.setItem("cupLike", cupLike);

		let cupPassed = localStorage.getItem("cupPassed");
		if(cupPassed == null){ cupPassed = 0;};
		localStorage.setItem("cupPassed", cupPassed);

		//<murdererOrVictim>
		let murdererOrVictimLike = localStorage.getItem("murdererOrVictimLike");
		if(murdererOrVictimLike == null){ murdererOrVictimLike = 0;};
		localStorage.setItem("murdererOrVictimLike", murdererOrVictimLike);

		let murdererOrVictimPassed = localStorage.getItem("murdererOrVictimPassed");
		if(murdererOrVictimPassed == null){ murdererOrVictimPassed = 0;};
		localStorage.setItem("murdererOrVictimPassed", murdererOrVictimPassed);

		//<MODEvue>

		let colorMode = localStorage.getItem("colorMode");
		if(colorMode == null){ colorMode = 0;};
		localStorage.setItem("colorMode", colorMode);
	//</LocalStore>

	if(localStorage.colorMode == 'darckMode'){
		darckMode()
	}
function buttonsHome() {
  	if(homeBurger.classList.contains("active-burger")){
		burgerPTests.forEach(e => e.classList.toggle("burger-p-active"));
		let burgersIntervalT = setInterval(() => {
			if(!homeBurger.classList.contains("active-burger")){
				burgerPTests.forEach(e => e.classList.remove("burger-p-active"));
				clearInterval(burgersIntervalT);
			}
		}, 30);
	}
}
function buttonsSettings() {
	
  	if(settingsBurger.classList.contains("active-burger")){
		burgerPSetting.forEach(e => e.classList.add("burger-p-active"));
		let burgersIntervalS = setInterval(() => {
			if(!settingsBurger.classList.contains("active-burger")){
				burgerPSetting.forEach(e => e.classList.remove("burger-p-active"));
				lenguageButton.style.background = 'none';
				modeButton.style.background = 'none';	
				accontSign.style.background = 'none';	
				modeColor.style.color = '#68b4d0';
				clearInterval(burgersIntervalS);
			}
		}, 30);
	}
}

homeButton.addEventListener('click', ()=>{
	homeBurger.classList.toggle("active-burger");
	homeButton.classList.toggle("active-button");
	buttonsHome();

	settingsButton.classList.remove("active-button");
	settingsBurger.classList.remove("active-burger");
	aboutButton.classList.remove("active-button");
	lenguageButton.children[1].classList.remove('lenguegesOpend');
	lenguageColor.classList.remove('l-color');
})
aboutButton.addEventListener('click', ()=>{
	aboutButton.classList.toggle("active-button");

	homeButton.classList.remove("active-button");
	homeBurger.classList.remove("active-burger");
	settingsButton.classList.remove("active-button");
	settingsBurger.classList.remove("active-burger");
	lenguageButton.children[1].classList.remove('lenguegesOpend');
	lenguageColor.classList.remove('l-color');
})
settingsButton.addEventListener('click', ()=>{
	settingsBurger.classList.toggle("active-burger");
	settingsButton.classList.toggle("active-button");
	buttonsSettings();


	homeButton.classList.remove("active-button");
	homeBurger.classList.remove("active-burger");
	aboutButton.classList.remove("active-button");
	lenguageButton.children[1].classList.remove('lenguegesOpend');
	lenguageColor.classList.remove('l-color');
})

/*like.forEach(e => e.addEventListener('click', ()=>{
	console.log(JSON.parse("localStorage."+ e.id));
}));*/

lenguageButton.addEventListener('click', function(click){
	click.stopPropagation();
	//lenguageButton.classList.toggle('lenguage-button-opend-closed');
	lenguageColor.classList.toggle('l-color');

	lenguageButton.children[1].classList.toggle('lenguegesOpend');
	lenguageButton.style.background = '#5ec0e7bf';	
	accontSign.style.background = 'none';
	modeButton.style.background = 'none';	
	modeColor.style.color = '#68b4d0';	
});
modeButton.addEventListener('click', function(click){
	click.stopPropagation();
	modeButton.style.background = '#5ec0e7bf';	
	modeColor.style.color = '#f4fcff';
	if(localStorage.colorMode == 'darckMode'){
		localStorage.colorMode = 'Standart';
		location.reload()
	}else{
		localStorage.colorMode = 'darckMode';
		darckMode()
	}	

	lenguageButton.children[1].classList.remove('lenguegesOpend');
	//lenguageButton.classList.remove('lenguage-button-opend-closed');
	lenguageColor.classList.remove('l-color');
	lenguageButton.style.background = 'none';
	accontSign.style.background = 'none';	
});
accontSign.addEventListener('click', function(click){
	click.stopPropagation();
	accontSign.style.background = '#5ec0e7bf';	

	lenguageButton.children[1].classList.remove('lenguegesOpend');
	//lenguageButton.classList.remove('lenguage-button-opend-closed');
	lenguageColor.classList.remove('l-color');
	lenguageButton.style.background = 'none';
	modeButton.style.background = 'none';	
	modeColor.style.color = '#68b4d0';	
});
//https://www.youtube.com/watch?v=qZXt1Aom3Cs

function darckMode(){
	modeColor.textContent = 'Dark';

	document.querySelector("html").style.filter = 'invert(1)';
	document.querySelectorAll(".line").forEach(e => e.style.filter = 'invert(2)');
	document.querySelectorAll(".test-block").forEach(e => e.style.filter = 'invert(2)');
	document.querySelectorAll(".test-block h2").forEach(e => e.style.filter = 'invert(1)');
	document.querySelectorAll(".test-block h4").forEach(e => e.style.filter = 'invert(1)');
	document.querySelectorAll(".test-block-active-buttons").forEach(e => e.style.filter = 'invert(1)');

}