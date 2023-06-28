// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: "Ivan | Education",
    lastname: "Ivanov",
  },
    position: "Junior Fullstack JS Developer",
    salary: "600 $ в месяц",
    address: "Ukraine, Dnipro",
}

var footer = {
      social:{
      email: {
      text: "ivanov@mail.com",
      herf: "mailto:ivanov@mail.com",
    },
      phone: { 
      text: "+38067000432",
      herf: "tel:+38067000432",
    },
      linkedin: {
      href: "https://www.linkedin.com/intiblablabla",
      text: "Linked",
    },
},
    }

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: "Resume | Summary",
    },
    header,
    main:{
      summary:{
        title: "Summary",
        text: "Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me."
      },
      experience: {
        title: "Other experience",
        text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc."
      },
    },
footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: "Resume | Skills",
    },
    header,
    main:{

      hobbies: [
        {
          name:"Playing guitar",
          isMain: true,
        },
        {
          name:"Exercise",
          isMain: true,
        },
        {
          name:"Keep track of food",
          isMain: false,
        },
        {
          name:"Run",
          isMain: false,
        },
      ],


      skills:[
        {
          name: "HTML",
          point: "10",
          isTop: true,
        },
        {
          name: "handlebars",
          point: "10",
          isTop: true,
        },
        {
          name: "VS Code",
          point: "10",
          isTop: true,
        },
        {
          name: "Git",
          point: "10",
          isTop: false,
        },
        {
          name: "Terminal",
          point: "10",
        },
        {
          name: "NPM",
          point: "10",
        },
        {
          name: "React.js",
          point: "0",
        },
        {
          name: "PHP",
          point: "null",
        },
      ],
    },
footer,
  })
})

// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page:{
      title: "Resume | Education",
    },

    header,

    main:{

      certificates: [
      {
        name: "certificates 1",
        id: "121",
      },
      {
        name: "certificates 2",
        id: "1212",
      },
      {
        name: "certificates 3",
        id: "223",
      },
    ],

      educations:[
        {
            name: "Киевский политехнический институт",
            isEnd: false,
        },
        {
          name: "Киевский национальный университет имени Тараса Шевченко, факультет компьютерных наук и кибернетики",
          isEnd: false,
      },
      {
        name: "Львовский национальный университет имени Ивана Франко, факультет компьютерных наук и информационных технологий",
        isEnd: true,
    },
    {
      name: "Одесский национальный политехнический университет, факультет информационных технологий и управления",
      isEnd: true,
  },
      ],
    },
    footer,
  })
})


router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: "big",
    page:{
      title: "Resume | Work",
    },

    header,
    main:{
      works:[{
        position: "Joinior Fullstack Developer",
        company:{
          name:"IT brains",
          url: "https://it-brains.com.ua/",
        },
        duration: {
          from: "10.10.2022",
          to: null
        },
        projectAmount: 3,

        projects: [
          {
           name:"Resume",
           url: "https://it-brains.com.ua/",
           about:"Airbnb competitor. High-load applocation for searching apartments",

           stacks: [
            {
              name: "React.js",
            },
            {
              name: "HTML / CSS",
            },
            {
              name:"Nodejs",
            },
           ],
            stackAmoGnt: "10",
            awardAmoGnt: "11",
           awards: [
            {
            name:"loremloremloremloremloremlorem",
           },
           {
            name: "loremloremloremloremloremloremloremlorem.",
           },

           ],
          }
        ],
      },
    ],
    },
    footer,
  })
})




// ================================================================

// router.get Створює нам один ентпоїнт

router.get('/facebook', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {

    layout: "basic",
    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',
                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description:
                  'A group for people who love their furry friends',
                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
