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
var btnAddCount = document.querySelector('.btn-spy-count');

var players = prompt(`Число игроков:`);
while(players < 3 ||players >= 10 || !Number(players)){
  alert('Ошибка: Введите число от 3 до 10');
  players = prompt('Число игроков:');
}

var arrPlayers = [];

for (var i = 1; i <= players; i++) {
  arrPlayers.push(i);
}

    

btnStart.addEventListener('click' , function(){
    var randomLoc = Math.floor(Math.random() * locations.length);
    var randomSpy = Math.floor(Math.random() * arrPlayers.length);
    var randomSpy2 = Math.floor(Math.random() * arrPlayers.length);
    
    while(randomSpy == randomSpy2) Math.floor(Math.random() * arrPlayers.length);
  if(locations.length == 0){
    alert('Words Over!')
  }
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
 
  locations.splice(randomLoc, 1);
})






