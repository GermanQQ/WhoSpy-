var locations = [
  "База террористов",
  "Банк",
  "Больница",
  "Воинская часть",
  "Выставка  настольных игр",
  "Войско крестоносцев",
  "Зоопарк",
  "Казино",
  "Карнавал",
  "Киностудия",
  "Корпоративная вечеринка",
  "Лунапарк",
  "Ночной клуб",
  "Овощебаза",
  "Океанский лайнер",
  "Орбитальная станция",
  "Отель",
  "Партизанский отряд",
  "Пассажирский поезд",
  "Пиратский корабль",
  "Пляж",
  "Подводная лодка",
  "Полицейский участок",
  "Полярная станция",
  "Посольство",
  "База террористов",
  "Банк",
  "Спа-салон",
  "Станция техобслуживания",
  "Супермаркет",
  "Театр",
  "Хоккейная арена",
  "Университет",
  "Церковь",
  "Цирк-шапито",
  "Школа",
  "Лес"
];

var btnStart = document.querySelector('.btn-start');
var btnAddSpy1 = document.querySelector('.firstBtn');
var btnAddSpy2 = document.querySelector('.secondBtn');


var players = prompt(`Число игроков:`);
while(players < 3 ||players >= 10 || !Number(players)){
  alert('Ошибка: Введите число от 3 до 10');
  players = prompt('Число игроков:');
}

var arrPlayers = [];

for (var i = 1; i <= players; i++) {
  arrPlayers.push(i);
}

let activeOneSpy = true;
let activeTwoSpy = false;

btnAddSpy1.addEventListener('click' , function(){
  activeOneSpy = true;
  activeTwoSpy = false;
  
    btnAddSpy1.style.backgroundColor = '#2d6eaa';
    btnAddSpy1.style.opacity = '1';
    btnAddSpy2.style.opacity = '0.5';
    btnAddSpy2.style.backgroundColor = '#4e4c4c';
  
})
btnAddSpy2.addEventListener('click' , function(){
  activeOneSpy = false;
  activeTwoSpy = true;

    btnAddSpy2.style.backgroundColor = '#2d6eaa';
    btnAddSpy2.style.opacity = '1';
    btnAddSpy1.style.opacity = '0.5';
    btnAddSpy1.style.backgroundColor = '#4e4c4c';
})

btnStart.addEventListener('click' , function(){

  if(activeOneSpy){
    var randomLoc = Math.floor(Math.random() * locations.length);
    var randomSpy = Math.floor(Math.random() * arrPlayers.length);

    if(locations.length > 0){
      for (var i = 1; i <= players; i++) {
        if (i == arrPlayers[randomSpy]){
          alert(`Игрок ${i} ---- ШПИОН`);
          alert('Next');
        }
        else {
          alert(`Игрок ${i} ---- ${locations[randomLoc]}`);
          alert('Next');
        };
      }
    }
  }

  if(activeTwoSpy){
    var randomLoc = Math.floor(Math.random() * locations.length);
    var randomSpy = Math.floor(Math.random() * arrPlayers.length);
    var randomSpy2 = Math.floor(Math.random() * arrPlayers.length);
    while(randomSpy == randomSpy2) randomSpy2 = Math.floor(Math.random() * arrPlayers.length);

    if(locations.length > 0){
      for (var i = 1; i <= players; i++) {
        if (i == arrPlayers[randomSpy] || i == arrPlayers[randomSpy2]){
          alert(`Игрок ${i} ---- ШПИОН`);
          alert('Next');
        }
        else {
          alert(`Игрок ${i} ---- ${locations[randomLoc]}`);
          alert('Next');
        };
      }
    }

  }

   
  if(locations.length == 0){
    alert('Words Over!')
  }
  
 
  locations.splice(randomLoc, 1);
})






