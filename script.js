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
let gameStart = false;

var arrPlayers = [];



  var players = prompt(`Число игроков:`); //Число игроков
  while(players < 3 ||players >= 10 || !Number(players)){//Число игроков должно быть числом в диапазоне от 3 до 10
    alert('Ошибка: Введите число от 3 до 10');//В противном случаии будет постояно вылезать алерт не дающий запустить игру
    players = prompt('Число игроков:');
  }
  
  
  for (var i = 1; i <= players; i++) { //Добавляем число игроков в масив начиная с 1,2,3..n
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
  gameStart = true;
  stopTimer = false; //Переключатель остановки таймера
  btnStart.disabled = true; //Делаем кнопку Старт не активной
  btnStop.disabled = false; //Делаем кнопку Стоп активной
  btnStop.style.opacity = '1'; //Меняем прозрачность кнопки Стоп
  
  document.getElementById('spy-win').innerHTML = `Игра началась!`;

  min = min; // Задаем начальные значения минут для таймера
  sec = 59; // Задаем начальные значения секунд для таймера

  if(activeOneSpy){ //Если выбран режим одного шпиона
    var randomLoc = Math.floor(Math.random() * locations.length); //Ищем рандомный индекс из локаций
    var randomSpy = Math.floor(Math.random() * arrPlayers.length); //Ищем рандомного шпиона

    if(locations.length > 0){//Если масив имеет хоть 1 локацию
      for (var i = 1; i <= players; i++) { //Делаем нумерацию игроков от 1 до n
        if (i == arrPlayers[randomSpy]){ //Если игрок == рандомному числу шпиона, то он шпион
          alert(`Игрок ${i} ---- ШПИОН`);
          alert('Next');
        }
        else {
          alert(`Игрок ${i} ---- ${locations[randomLoc]}`); //Тут выводим локацию обычным игрокам
          alert('Next');
        };
      }
    }
  }

  if(activeTwoSpy){ //Если выбран режим двух шпионов
    var randomLoc = Math.floor(Math.random() * locations.length); //Ищем рандомный индекс из локаций
    var randomSpy = Math.floor(Math.random() * arrPlayers.length); //Ищем рандомного шпиона
    var randomSpy2 = Math.floor(Math.random() * arrPlayers.length); //Ищем второго рандомного шпиона
    while(randomSpy == randomSpy2) randomSpy2 = Math.floor(Math.random() * arrPlayers.length);//Если 1 шпион == 2 шпиону, тогда еще раз вычислить рандомного 2 шпиона, пока он не будет отличатся от 1 шпиона

    if(locations.length > 0){
      for (var i = 1; i <= players; i++) {
        if (i == arrPlayers[randomSpy] || i == arrPlayers[randomSpy2]){//Если игрок == рандомному числу  1 шпиона или шпиона 2, то он шпион
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

 

  if(locations.length == 0){ //Если слова закончились
    alert('Words Over!')
  }

  countdown(); // вызов функции таймера
 
  locations.splice(randomLoc, 1); //Удаляем локацию из массива что-бы за игру она повторно не попалась
})


let stopTimer = false; //Переключатель что бы понять, была нажата кнопка стоп или нет

btnStop.addEventListener('click' , function(){ //Кнопка стоп, при нажатии
  stopTimer = true; //Переводи переключатель в активное положение
  gameStart = false;
  btnStart.disabled = false; //Делаем кнопку старт активной
  btnStop.disabled = true; //Делаем кнопку стоп не активной
  btnStop.style.opacity = '0.3'; //Меняе прозрачность кнопке стоп

})

var timer; // пока пустая переменная
var sec = 59; // стартовое значение обратного отсчета
var min = 4; // стартовое значение обратного отсчета


function countdown(){  // функция обратного отсчета

  if(!stopTimer){ //Функция запускается только когда переключатель активен
    //При нажатии на кнопку старт переключатель активен
    //При нажатии на кнопку стоп, переключатель не активен

  document.getElementById('timer').innerHTML = `${min} : ${sec}`;// Каждую секунду обновлям данные на странице
  sec--; // уменьшаем число на единицу
  if (sec < 0){ //Если значение секунт стало меньше 0
    min--; //Уменьшаем значения минуты на 1 единицу
    timer = setTimeout(countdown, 1000);//Рекурсивно вызываем эту же функцию, пока значения минут не будет меньше 0
    sec = 59; //Обновляем значения секунд

    if(min < 0){ //Если значение минут стало меньше 0
      document.getElementById('spy-win').innerHTML = `Шпион Победил!`;//Виводим надпись что Шпион победил
      btnStart.disabled = false; //Делаем кнопку старта активной
      btnStop.disabled = true; //Делаем кнопку стоп неактивной
      clearTimeout(timer); // таймер остановится на нуле
    } 
  }else {
    timer = setTimeout(countdown, 1000); //Рекурсивно вызываем функцию до момента пока значения секунд не будет меньше 0
    }

  }else clearTimeout(timer); //Если переключатель не активен то остановить функцию, очистить timeout

}



  document.querySelector('.btn-rules').addEventListener('click' , function(){
    document.querySelector('.rules-wrap').style.transform = 'translateY(-50%)';
    document.querySelector('.settings-box').style.transform = 'translateY(-200%)';
  })

  document.querySelector('.btn-close-rules').addEventListener('click' , function(){
    document.querySelector('.rules-wrap').style.transform = 'translateY(-200%)';
  })

  document.querySelector('.settings-icon').addEventListener('click' , function(){
    if(!gameStart){
      document.querySelector('.settings-box').style.transform = 'translateY(-50%)';
      document.querySelector('.settings-icon').style.transform = 'rotate(90deg)';
      document.querySelector('.rules-wrap').style.transform = 'translateY(-200%)';
    }else alert('Закончите текущую игру!')
  })

  document.querySelector('.btn-close-settings').addEventListener('click' , function(){
    document.querySelector('.settings-box').style.transform = 'translateY(-200%)';
    document.querySelector('.settings-icon').style.transform = 'rotate(0deg)';
  })

  document.querySelector('.firstBtnTime').addEventListener('click' , function(){
    min = 2;
    document.querySelector('.firstBtnTime').style.backgroundColor = '#2d6eaa';
    document.querySelector('.firstBtnTime').style.opacity = '1';
    document.querySelector('.secondBtnTime').style.backgroundColor = '#4e4c4c';
    document.querySelector('.secondBtnTime').style.opacity = '0.7';
    document.querySelector('.thirdBtnTime').style.backgroundColor = '#4e4c4c';
    document.querySelector('.thirdBtnTime').style.opacity = '0.7';
  })

  document.querySelector('.secondBtnTime').addEventListener('click' , function(){
    min = 4;
    document.querySelector('.firstBtnTime').style.backgroundColor = '#4e4c4c';
    document.querySelector('.firstBtnTime').style.opacity = '0.7';
    document.querySelector('.secondBtnTime').style.backgroundColor = '#2d6eaa';
    document.querySelector('.secondBtnTime').style.opacity = '1';
    document.querySelector('.thirdBtnTime').style.backgroundColor = '#4e4c4c';
    document.querySelector('.thirdBtnTime').style.opacity = '0.7';
  })

  document.querySelector('.thirdBtnTime').addEventListener('click' , function(){
    min = 9;
    document.querySelector('.firstBtnTime').style.backgroundColor = '#4e4c4c';
    document.querySelector('.firstBtnTime').style.opacity = '0.7';
    document.querySelector('.secondBtnTime').style.backgroundColor = '#4e4c4c';
    document.querySelector('.secondBtnTime').style.opacity = '0.7';
    document.querySelector('.thirdBtnTime').style.backgroundColor = '#2d6eaa';
    document.querySelector('.thirdBtnTime').style.opacity = '1';
  })

  document.querySelector('.btn-count-player').addEventListener('click' , function(){
    arrPlayers.length = 0;
    players = prompt(`Число игроков:`); //Число игроков
    while(players < 3 ||players >= 10 || !Number(players)){//Число игроков должно быть числом в диапазоне от 3 до 10
      alert('Ошибка: Введите число от 3 до 10');//В противном случаии будет постояно вылезать алерт не дающий запустить игру
      players = prompt('Число игроков:');
    }

    for (var i = 1; i <= players; i++) { //Добавляем число игроков в масив начиная с 1,2,3..n
      arrPlayers.push(i);
    }
  })






new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
})