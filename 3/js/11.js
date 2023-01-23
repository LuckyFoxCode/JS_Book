'use strict';

// Дата и время

/*
Итого
- Дата и время в JavaScript представлены объектом Date. Нельзя создать «только дату» или «только время»: объекты Date всегда содержат и то, и другое.
- Счёт месяцев начинается с нуля (да, январь – это нулевой месяц).
- Дни недели в getDay() также отсчитываются с нуля, что соответствует воскресенью.
- Объект Date самостоятельно корректируется при введении значений, выходящих за рамки допустимых. Это полезно для сложения/вычитания дней/месяцев/недель.
- Даты можно вычитать, и разность возвращается в миллисекундах. Так происходит, потому что при преобразовании в число объект Date становится таймстампом.
- Используйте Date.now() для быстрого получения текущего времени в формате таймстампа.
*/

// Task 1

const date = new Date(2012, 1, 20, 3, 12);

console.log(date);

// Task 2

const getWeekDay = (day) => {
  const dayWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return dayWeek[day.getDay()];
};

getWeekDay(date); // Вт
getWeekDay(new Date(2023, 0, 23)); // Вт
