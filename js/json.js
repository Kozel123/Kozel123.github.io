let tests = [
    {
      "testNameRus": "Кто ты из Genshin Impact?",
      "testNameEng": "Who are you from Genshin Impact?",
      "blockName": "genshinTest",
      "types": "games-category",
      "lineColor": "#5ec0e7",
      "questionNumber": "21",
      "backgroundImg": "img/genshinMain.png",
      "like": "genshinLike",
      "passed": localStorage.genshinPassed,
      "liked": localStorage.genshinLike
    },
    {
      "testNameRus": "Кто ты из Замка Хаула?",
      "testNameEng": "Who are you from Howl Castle?",
      "blockName": "zamonkHaulaTest",
      "types": "anime-category",
      "lineColor": "#fa586f",
      "questionNumber": "?",
      "backgroundImg": "img/zamonkHaula.png",
      "like": "zamonkHaulaLike",
      "passed": localStorage.zamonkHaulaPassed,
      "liked": localStorage.zamonkHaulaLike
    },
    {
      "testNameRus": "Кто ты из Клинока рассекающего демонов?",
      "testNameEng": "Who are you from the Demon Cleaver Blade?",
      "blockName": "klinokDemonovTest",
      "types": "anime-category",
      "lineColor": "#714a7f",
      "questionNumber": "?",
      "backgroundImg": "img/klinokDemonov.png",
      "like": "klinokDemonovLike",
      "passed": localStorage.klinokDemonovPassed,
      "liked": localStorage.klinokDemonovLike
    },
    {
      "testNameRus": "Кто ты из 'Metal Family'?",
      "testNameEng": "Who are you from 'Metal Family'?",
      "blockName": "metalfamilyTest",
      "types": "sundry-category",
      "lineColor": "#f36630",
      "questionNumber": "?",
      "backgroundImg": "img/metalfamily.png",
      "like": "metalfamilyLike",
      "passed": localStorage.metalfamilyPassed,
      "liked": localStorage.metalfamilyLike
    },
    {
      "testNameRus": "Кто ты из 'Overlord'?",
      "testNameEng": "Who are you from 'Overlord'?",
      "blockName": "overlordTest",
      "types": "anime-category",
      "lineColor": "#fa586f",
      "questionNumber": "?",
      "backgroundImg": "img/overlord.png",
      "like": "overlordLike",
      "passed": localStorage.overlordPassed,
      "liked": localStorage.overlordLike
    },
    {
      "testNameRus": "Какая твоя стихия?",
      "testNameEng": "What is your element?",
      "blockName": "elementTest",
      "types": "sundry-category",
      "lineColor": "#58fa99",
      "questionNumber": "?",
      "backgroundImg": "img/element.png",
      "like": "elementLike",
      "passed": localStorage.elementPassed,
      "liked": localStorage.elementLike
    },
    {
      "testNameRus": "Ты демон или ангел?",
      "testNameEng": "Are you a demon or an angel?",
      "blockName": "angelOrDemonTest",
      "types": "sundry-category",
      "lineColor": "#5ec0e7",
      "questionNumber": "?",
      "backgroundImg": "img/angelOrDemonTest.png",
      "like": "angelOrDemonTestLike",
      "passed": localStorage.angelOrDemonTestPassed,
      "liked": localStorage.angelOrDemonTestLike
    },
    {
      "testNameRus": "Какой ты демон?",
      "testNameEng": "What kind of demon are you?",
      "blockName": "demonTest",
      "types": "sundry-category",
      "lineColor": "#714a7f",
      "questionNumber": "?",
      "backgroundImg": "img/demon.png",
      "like": "demonLike",
      "passed": localStorage.demonPassed,
      "liked": localStorage.demonLike
    },
    {
      "testNameRus": "Какой ты ангел?",
      "testNameEng": "What kind of angel are you?",
      "blockName": "angelTest",
      "types": "sundry-category",
      "lineColor": "#fa586f",
      "questionNumber": "?",
      "backgroundImg": "img/angel.png",
      "like": "angelLike",
      "passed": localStorage.angelPassed,
      "liked": localStorage.angelLike
    },
    {
      "testNameRus": "Какой ты зелье?",
      "testNameEng": "What kind of potion are you?",
      "blockName": "potionTest",
      "types": "sundry-category",
      "lineColor": "#f36630",
      "questionNumber": "?",
      "backgroundImg": "img/potion.png",
      "like": "potionLike",
      "passed": localStorage.potionPassed,
      "liked": localStorage.potionLike
    },
    {
      "testNameRus": "Какая у тебя ханахаки?",
      "testNameEng": "What is your hanahaki?",
      "blockName": "hanahakiTest", 
      "types": "sundry-category",
      "lineColor": "#5ec0e7",
      "questionNumber": "?",
      "backgroundImg": "img/hanahaki.png",
      "like": "hanahakiLike",
      "passed": localStorage.hanahakiPassed,
      "liked": localStorage.hanahakiLike
    },
    {
      "testNameRus": "Какое ты пиво?",
      "testNameEng": "What kind of beer are you?",
      "blockName": "beerTest",
      "types": "sundry-category",
      "lineColor": "#58fa99",
      "questionNumber": "?",
      "backgroundImg": "img/beer.png",
      "like": "beerLike",
      "passed": localStorage.beerPassed,
      "liked": localStorage.beerLike
    },
    {
      "testNameRus": "Какой ты чай?",
      "testNameEng": "What kind of tea are you?",
      "blockName": "teaTest",
      "types": "sundry-category",
      "lineColor": "#fa586f",
      "questionNumber": "?",
      "backgroundImg": "img/tea.png",
      "like": "teaLike",
      "passed": localStorage.teaPassed,
      "liked": localStorage.teaLike
    },
    {
      "testNameRus": "Какой ты дождь?",
      "testNameEng": "What kind of rain are you?",
      "blockName": "rainTest",
      "types": "sundry-category",
      "lineColor": "#5ec0e7",
      "testName": "Какой ты дождь?",
      "questionNumber": "?",
      "backgroundImg": "img/rain.png",
      "like": "rainLike",
      "passed": localStorage.rainPassed,
      "liked": localStorage.rainLike
    },
    {
      "testNameRus": "Какой ты хлеб?",
      "testNameEng": "What kind of bread are you?",
      "blockName": "breadTest",
      "types": "sundry-category",
      "lineColor": "#f36630",
      "questionNumber": "?",
      "backgroundImg": "img/bread.png",
      "like": "breadLike",
      "passed": localStorage.breadPassed,
      "liked": localStorage.breadLike
    },
    {
      "testNameRus": "Какой ты гриб?",
      "testNameEng": "What kind of mushroom are you?",
      "blockName": "mushroomTest",
      "types": "sundry-category",
      "lineColor": "#714a7f",
      "questionNumber": "?",
      "backgroundImg": "img/mushroomMain.png",
      "like": "mushroomLike",
      "passed": localStorage.mushroomPassed,
      "liked": localStorage.mushroomLike
    },
    {
      "testNameRus": "Какой ты мэм?",
      "testNameEng": "What meme are you?",
      "blockName": "memTest",
      "types": "sundry-category",
      "lineColor": "#5ec0e7",
      "questionNumber": "?",
      "backgroundImg": "img/mem.png",
      "like": "memLike",
      "passed": localStorage.memPassed,
      "liked": localStorage.memLike
    },
    {
      "testNameRus": "На сколько ты испорчен?",
      "testNameEng": "How spoiled are you?",
      "blockName": "spoiledTest",
      "types": "sundry-category",
      "lineColor": "#f36630",
      "questionNumber": "?",
      "backgroundImg": "img/spoiled.png",
      "like": "spoiledLike",
      "passed": localStorage.spoiledPassed,
      "liked": localStorage.spoiledLike
    },
    {
      "testNameRus": "Какой ты овощ?",
      "testNameEng": "What kind of vegetable are you?",
      "blockName": "vegetableTest",
      "types": "sundry-category",
      "lineColor": "#714a7f",
      "questionNumber": "?",
      "backgroundImg": "img/vegetable.png",
      "like": "vegetableLike",
      "passed": localStorage.vegetablePassed,
      "liked": localStorage.vegetableLike
    },
    {
      "testNameRus": "Какая ты кружка?",
      "testNameEng": "What a mug are you?",
      "blockName": "cupTest",
      "types": "sundry-category",
      "lineColor": "#fa586f",
      "questionNumber": "?",
      "backgroundImg": "img/cup.png",
      "like": "cupLike",
      "passed": localStorage.cupPassed,
      "liked": localStorage.cupLike
    },
    {
      "testNameRus": "Ты убийца или жертва?",
      "testNameEng": "Are you a murderer or a victim?",
      "blockName": "murdererOrVictimTest", 
      "types": "sundry-category",
      "lineColor": "#58fa99",
      "questionNumber": "?",
      "backgroundImg": "img/murdererOrVictim.png",
      "like": "murdererOrVictimLike",
      "passed": localStorage.murdererOrVictimPassed,
      "liked": localStorage.murdererOrVictimLike
    }
]

testsjson(tests);
function testsjson(data){
     let testsGeneration = document.getElementById('main');
     for(var i = 0; i < data.length; i++){
        let testRow = `		
        <div part="${data[i].types}" class="test-block" id="${data[i].blockName}" style="background: url(${data[i].backgroundImg}) no-repeat center; background-size: cover;">
			<div class="line" style="background: ${data[i].lineColor};"></div>
			<h2>${data[i].testNameRus}</h2>
			<h4>Вопросов: <b class="questions-num-color">${data[i].questionNumber}</b></h4>
			<div class="test-block-active-buttons">
				<p class="play" title="${data[i].passed}" part="${data[i].lineColor}">▶</p>
				<div class="like" id="${data[i].like}" title="${data[i].liked}"></div>
			</div>
		</div>`
  
        testsGeneration.innerHTML += testRow; 
     }};




	let likedTests = document.getElementById('liked-tests');
	let completedTests = document.getElementById('completed-tests');
	let allTests = document.getElementById('all-tests');
	let testBlocks = [].slice.call(document.getElementsByClassName('test-block'));
	let playCollection = [].slice.call(document.getElementsByClassName('play'));
	let likeCollection = [].slice.call(document.getElementsByClassName('like'));

	let categoriesList = [].slice.call(document.getElementsByClassName('categories-list-li'));
	let animeCategory = document.getElementById('anime-category');
	let horoscopeCategory = document.getElementById('horoscope-category');
	let gamesCategory = document.getElementById('games-category');
	let differentCategory = document.getElementById('different-category');
	let allCategory = document.getElementById('all-category');

likeCollection.forEach((e)=>{if(e.title == 1){
	e.classList.toggle("like-active");
}
});

likedTests.addEventListener('click', ()=>{
	allTests.classList.remove("current-burger-button");	
	completedTests.classList.remove("current-burger-button");

	likedTests.classList.add("current-burger-button");	
	likeCollection.forEach((e)=>{if(e.classList.contains("like-active")){
	e.parentElement.parentElement.style.display = 'flex';
		}else{
	e.parentElement.parentElement.style.display = 'none';
		}
	});
})

completedTests.addEventListener('click', ()=>{
	likedTests.classList.remove("current-burger-button");
	allTests.classList.remove("current-burger-button");

	completedTests.classList.add("current-burger-button");	
	playCollection.forEach((e)=>{if(e.title == 1){
	e.parentElement.parentElement.style.display = 'flex';
		}else{
	e.parentElement.parentElement.style.display = 'none';
		}
	});
})

allTests.addEventListener('click', ()=>{
	likedTests.classList.remove("current-burger-button");
	completedTests.classList.remove ("current-burger-button");

	allTests.classList.add("current-burger-button");	
	playCollection.forEach(e => e.parentElement.parentElement.style.display = 'flex');
});

playCollection.forEach((e)=>{if(e.title == 1){
	e.style.color = e.part;
}
});

likeCollection.forEach(e => e.addEventListener('click', ()=>{
	e.classList.toggle('like-active');
	if(localStorage[e.id] == 0){
		localStorage[e.id] = 1;
	}else{
		localStorage[e.id] = 0;
	}
}));

categoryActiveId="all-category";
categoriesList.forEach(e => e.addEventListener('click', ()=>{
	categoriesList.forEach(e => e.classList.remove("categories-list-li-active"));
	e.classList.add("categories-list-li-active");
	categoryActiveId = e.id;
	testBlocks.forEach((element) => {
		if (element.part != categoryActiveId) {
			if (categoryActiveId != 'all-category'){
				element.style.display = 'none';
			}else{
				element.style.display = 'flex';
			}
		}else{
			element.style.display = 'flex';
		}
	});
}));