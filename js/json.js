let tests = [
    {
      "blockName": "genshinTest",
      "lineColor": "#5ec0e7",
      "testName": "Кто ты из Genshin Impact",
      "questionNumber": "21",
      "backgroundImg": "img/genshinMain.png",
      "like": "genshinLike",
      "passed": localStorage.genshinPassed,
      "liked": localStorage.genshinLike
    },
    {
      "blockName": "zamonkHaulaTest",
      "lineColor": "#fa586f",
      "testName": "Кто ты из Замка Хаула",
      "questionNumber": "?",
      "backgroundImg": "img/zamonkHaula.png",
      "like": "zamonkHaulaLike",
      "passed": localStorage.zamonkHaulaPassed,
      "liked": localStorage.zamonkHaulaLike
    },
    {
      "blockName": "klinokDemonovTest",
      "lineColor": "#714a7f",
      "testName": "Кто ты из Клинока рассекающего демонов",
      "questionNumber": "?",
      "backgroundImg": "img/klinokDemonov.png",
      "like": "klinokDemonov",
      "passed": localStorage.klinokDemonovPassed,
      "liked": localStorage.klinokDemonovLike
    },
    {
      "blockName": "metalfamilyTest",
      "lineColor": "#f36630",
      "testName": "Кто ты из 'Metal Family'",
      "questionNumber": "?",
      "backgroundImg": "img/metalfamily.png",
      "like": "metalfamilyLike",
      "passed": localStorage.metalfamilyPassed,
      "liked": localStorage.metalfamilyLike
    },
    {
      "blockName": "overlordTest",
      "lineColor": "#fa586f",
      "testName": "Кто ты из 'Overlord'",
      "questionNumber": "?",
      "backgroundImg": "img/overlord.png",
      "like": "overlordLike",
      "passed": localStorage.overlordPassed,
      "liked": localStorage.overlordLike
    },
    {
      "blockName": "elementTest",
      "lineColor": "#58fa99",
      "testName": "Какая твоя стихия?",
      "questionNumber": "?",
      "backgroundImg": "img/element.png",
      "like": "elementLike",
      "passed": localStorage.elementPassed,
      "liked": localStorage.elementLike
    },
    {
      "blockName": "angelOrDemonTest",
      "lineColor": "#5ec0e7",
      "testName": "Ты демон или ангел?",
      "questionNumber": "?",
      "backgroundImg": "img/angelOrDemonTest.png",
      "like": "angelOrDemonTestLike",
      "passed": localStorage.angelOrDemonTestPassed,
      "liked": localStorage.angelOrDemonTestLike
    },
    {
      "blockName": "demonTest",
      "lineColor": "#714a7f",
      "testName": "Какой ты демон?",
      "questionNumber": "?",
      "backgroundImg": "img/demon.png",
      "like": "demonLike",
      "passed": localStorage.demonPassed,
      "liked": localStorage.demonLike
    },
    {
      "blockName": "angelTest",
      "lineColor": "#fa586f",
      "testName": "Какой ты ангел?",
      "questionNumber": "?",
      "backgroundImg": "img/angel.png",
      "like": "angelLike",
      "passed": localStorage.angelPassed,
      "liked": localStorage.angelLike
    },
    {
      "blockName": "potionTest",
      "lineColor": "#f36630",
      "testName": "Какой ты зелье?",
      "questionNumber": "?",
      "backgroundImg": "img/potion.png",
      "like": "potionLike",
      "passed": localStorage.potionPassed,
      "liked": localStorage.potionLike
    },
    {
      "blockName": "hanahakiTest", 
      "lineColor": "#5ec0e7",
      "testName": "Какая у тебя ханахаки?",
      "questionNumber": "?",
      "backgroundImg": "img/hanahaki.png",
      "like": "hanahakiLike",
      "passed": localStorage.hanahakiPassed,
      "liked": localStorage.hanahakiLike
    },
    {
      "blockName": "beerTest",
      "lineColor": "#58fa99",
      "testName": "Какое ты пиво?",
      "questionNumber": "?",
      "backgroundImg": "img/beer.png",
      "like": "beerLike",
      "passed": localStorage.beerPassed,
      "liked": localStorage.beerLike
    },
    {
      "blockName": "teaTest",
      "lineColor": "#fa586f",
      "testName": "Какой ты чай?",
      "questionNumber": "?",
      "backgroundImg": "img/tea.png",
      "like": "teaLike",
      "passed": localStorage.teaPassed,
      "liked": localStorage.teaLike
    },
    {
      "blockName": "rainTest",
      "lineColor": "#5ec0e7",
      "testName": "Какой ты дождь?",
      "questionNumber": "?",
      "backgroundImg": "img/rain.png",
      "like": "rainLike",
      "passed": localStorage.rainPassed,
      "liked": localStorage.rainLike
    },
    {
      "blockName": "breadTest",
      "lineColor": "#f36630",
      "testName": "Какой ты хлеб?",
      "questionNumber": "?",
      "backgroundImg": "img/bread.png",
      "like": "breadLike",
      "passed": localStorage.breadPassed,
      "liked": localStorage.breadLike
    },
    {
      "blockName": "mushroomTest",
      "lineColor": "#714a7f",
      "testName": "Какой ты гриб?",
      "questionNumber": "?",
      "backgroundImg": "img/mushroomMain.png",
      "like": "mushroomLike",
      "passed": localStorage.mushroomPassed,
      "liked": localStorage.mushroomLike
    },
    {
      "blockName": "memTest",
      "lineColor": "#5ec0e7",
      "testName": "Какой ты мэм?",
      "questionNumber": "?",
      "backgroundImg": "img/mem.png",
      "like": "memLike",
      "passed": localStorage.memPassed,
      "liked": localStorage.memLike
    },
    {
      "blockName": "spoiledTest",
      "lineColor": "#f36630",
      "testName": "На сколько ты испорчен?",
      "questionNumber": "?",
      "backgroundImg": "img/spoiled.png",
      "like": "spoiledLike",
      "passed": localStorage.spoiledPassed,
      "liked": localStorage.spoiledLike
    },
    {
      "blockName": "vegetableTest",
      "lineColor": "#714a7f",
      "testName": "Какой ты овощ?",
      "questionNumber": "?",
      "backgroundImg": "img/vegetable.png",
      "like": "vegetableLike",
      "passed": localStorage.vegetablePassed,
      "liked": localStorage.vegetableLike
    },
    {
      "blockName": "cupTest",
      "lineColor": "#fa586f",
      "testName": "Какая ты кружка?",
      "questionNumber": "?",
      "backgroundImg": "img/cup.png",
      "like": "cupLike",
      "passed": localStorage.cupPassed,
      "liked": localStorage.cupLike
    },
    {
      "blockName": "murdererOrVictimTest", 
      "lineColor": "#58fa99",
      "testName": "Ты убийца или жертва?",
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
        <div class="test-block" id="${data[i].blockName}" style="background: url(${data[i].backgroundImg}) no-repeat center; background-size: cover;">
			<div class="line" style="background: ${data[i].lineColor};"></div>
			<h2>${data[i].testName}</h2>
			<h4>Questions: <b class="questions-num-color">${data[i].questionNumber}</b></h4>
			<div class="test-block-active-buttons">
				<p class="play" title="${data[i].passed}" part="${data[i].lineColor}">▶</p>
				<div class="like" id="${data[i].like}" title="${data[i].liked}"></div>
			</div>
		</div>`
  
        testsGeneration.innerHTML += testRow; 
      	
     }};


	let playCollection = [].slice.call(document.getElementsByClassName('play'));
	let likeCollection = [].slice.call(document.getElementsByClassName('like'));

likeCollection.forEach((e)=>{if(e.title == 1){
	e.classList.toggle("like-active");
}
});

playCollection.forEach((e)=>{if(e.title == 1){
	e.style.color = e.part;
}
});