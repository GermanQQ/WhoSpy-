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
var btnStop = document.querySelector('.btn-stop');
btnStop.disabled = true;

var btnAddSpy1 = document.querySelector('.firstBtn');
var btnAddSpy2 = document.querySelector('.secondBtn');

var timer = document.getElementById('timer');

let activeOneSpy = true;
let activeTwoSpy = false;


var players = prompt(`Число игроков:`);
while(players < 3 ||players >= 10 || !Number(players)){
  alert('Ошибка: Введите число от 3 до 10');
  players = prompt('Число игроков:');
}

var arrPlayers = [];

for (var i = 1; i <= players; i++) {
  arrPlayers.push(i);
}


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
  stopTimer = false;
  btnStart.disabled = true;
  btnStop.disabled = false;
  btnStop.style.opacity = '1';

  document.getElementById('spy-win').innerHTML = `Игра началась!`;

  min = 4;
  sec = 59;

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

  countdown(); // вызов функции
   
  if(locations.length == 0){
    alert('Words Over!')
  }
  
 
  locations.splice(randomLoc, 1);
})


let stopTimer = false;

btnStop.addEventListener('click' , function(){


  stopTimer = true;

  btnStart.disabled = false;
  btnStop.disabled = true;
  btnStop.style.opacity = '0.3';

})

var timer; // пока пустая переменная
var sec = 59; // стартовое значение обратного отсчета
var min = 4; // стартовое значение обратного отсчета


function countdown(){  // функция обратного отсчета

  if(!stopTimer){

  document.getElementById('timer').innerHTML = `${min} : ${sec}`;
  sec--; // уменьшаем число на единицу
  if (sec < 1){ 
    min--;
    timer = setTimeout(countdown, 1000);
    sec = 59;

    if(min < 0){
      document.getElementById('spy-win').innerHTML = `Шпион Победил!`;
      btnStart.disabled = false;
      clearTimeout(timer); // таймер остановится на нуле
    } 
  }else {
    timer = setTimeout(countdown, 1000);
    }

  }else clearTimeout(timer);

}



  


