function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function monthDays(){
    let daysList = document.getElementById('days');
    for(let index = 0; index < dezDaysList.length; index += 1){
      let day = dezDaysList[index];
      let createdDay = document.createElement('li');
      if(day === 24 || day === 31){
        createdDay.className = 'day holiday';
        createdDay.innerHTML = day;
        daysList.appendChild(createdDay);
      } else if(day === 4 || day === 11 || day === 18){
        createdDay.className = 'day friday';
        createdDay.innerHTML = day;
        daysList.appendChild(createdDay);
      } else if (day === 25){
        createdDay.className = 'day holiday friday';
        createdDay.innerHTML = day;
        daysList.appendChild(createdDay);
      } else{
        createdDay.className = 'day';
        createdDay.innerHTML = day;
        daysList.appendChild(createdDay);
      }
    }
  }

  monthDays();

  function holidayButton(string){
    let buttonDiv = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.innerHTML = string;
    let newButtonId = 'btn-holiday';
    newButton.id = newButtonId;
    buttonDiv.appendChild(newButton)
  }

  holidayButton('FERIADO!')
  
  function holidaySelect(){
    let holidaySelected = document.querySelector('#btn-holiday');
    let takeHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    holidaySelected.addEventListener('click', function(){
      for(let index = 0; index < takeHolidays.length; index += 1){
        if(takeHolidays[index].style.backgroundColor === setNewColor){
          takeHolidays[index].style.backgroundColor = backgroundColor
        } else{
          takeHolidays[index].style.backgroundColor = setNewColor
        }
      }
    })
  };

  holidaySelect();
  function fridayButton(text){
    let buttonDivFriday = document.querySelector('.buttons-container');
    let newButtonFriday = document.createElement('button');
    newButtonFriday.innerHTML = text;
    let newButtonFridayId = 'btn-friday';
    newButtonFriday.id = newButtonFridayId;
    buttonDivFriday.appendChild(newButtonFriday);
  }

  fridayButton('Sexta-Feira')
