const users = [
  {
    name: 'Bob',
    age: 27,
    address:{
      country:'USA',
      city:'LA'
    },
    marks:[2,3,5,4,2,3,1,5]
  },
  {
    name: 'July',
    age: 21,
    address:{
      country:'Ukraine',
      city:'Kiev'
    },
    marks:[4,4,5,4,3,4,3,5]
  },
  {
    name: 'Monya',
    age: 15,
    address:{
      country:'Ukraine',
      city:'Odessa'
    },
    marks:[5,1,5,1,5,1,5,1]
  },
  {
    name: 'Vsevolod',
    age: 19,
    address:{
      country:'Ukraine',
      city:'Lviv'
    },
    marks:[3,4,5,3,1,2,4,6]
  },
];

// 1. Cоздать переменную  isNotAdult и получить в неё обьект студента, который не совершенно летний
const isNotAdult = users.filter((user) => user.age <18);
console.log(isNotAdult);
 
// 2. Создать переменную foreignStudent  и получить туда массив иногородних студентов (не из Украины)
const foreignStudent = users.filter((user) => user.address.country != ['Ukraine']);
console.log(foreignStudent);

// 3. Получить новый массив с юзерами у каждого юзера должно появится новое проперти isAdult:true | false. так же должно появиться новое поле averageMark содержащее среднюю оценку пользователя.
const adultUsers = users.map(function(user) {
  let averageUserMark = user.marks.reduce((acc, element) => acc + element, 0);
    return {
  name: user.name,
  age: user.age,
  address: user.address,
  marks: user.marks,
  isAdult: user.age >=18,
  averageMark: averageUserMark/user.marks.length,
  };
})
console.log(adultUsers); 

// 4. Создать переменную averageMark и указать среднюю оценку по всем пользователям
const averageMark = adultUsers.reduce((acc, element) => acc + element.averageMark, 0)
console.log(averageMark/adultUsers.length)

// 5. Создать новую переменную adresses из массива пользователей вернуть в неё новый обьект который будет в себе содержать два поля 1 . countries - массив стран пользователей и 2 citys  массив городов пользователей
const placement = users.map(function(user) {
  return {
    address: user.address
  };
});
// console.log(placement);

const countries = placement.reduce(function(acc, element) {
  if(!Object.keys(acc).length) {
    acc['countries'] = []
    acc.countries.push(element.address.country);
    return acc;
  }else {
    acc.countries.push(element.address.country);
    return acc;
  };
  }, {});
  // console.log(countries);

const citys = placement.reduce(function(acc, element,) {
  if(!Object.keys(acc).length) {
    acc['citys'] = []
    acc.citys.push(element.address.city);
    return acc;
  }else {
    acc.citys.push(element.address.city);
    return acc;
  };
  }, {});
  // console.log(citys);
   
const result = Object.assign({}, countries, citys);
console.log(result)