const USER_MAIN_DATA = [
  {
    id: 10,
    userInfos: {
      firstName: 'Thomas',
      lastName: 'Dovineau',
      age: 31
    },
    todayScore: .31,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    }
  }
]

const USER_ACTIVITY = [
  {
    userId: 10,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 69.5,
        calories: 165
      },
      {
        day: '2020-07-02',
        kilogram: 70.06,
        calories: 216
      },
      {
        day: '2020-07-03',
        kilogram: 69.86,
        calories: 257
      },
      {
        day: '2020-07-04',
        kilogram: 69.73,
        calories: 165
      },
      {
        day: '2020-07-05',
        kilogram: 69.86,
        calories: 155
      },
      {
        day: '2020-07-06',
        kilogram: 69.86,
        calories: 118
      },
      {
        day: '2020-07-07',
        kilogram: 69,
        calories: 145
      },
      {
        day: '2020-07-08',
        kilogram: 70.25,
        calories: 236
      },
      {
        day: '2020-07-09',
        kilogram: 69.70,
        calories: 185
      },
      {
        day: '2020-07-10',
        kilogram: 69,
        calories: 216
      }
    ]
  }
]


const USER_AVERAGE_SESSIONS = [
  {
    userId: 10,
    sessions: [
      {
        day: 1,
        sessionLength: 0
      },
      {
        day: 2,
        sessionLength: 180
      },
      {
        day: 3,
        sessionLength: 180
      },
      {
        day: 4,
        sessionLength: 1
      },
      {
        day: 5,
        sessionLength: 1
      },
      {
        day: 6,
        sessionLength: 1
      },
      {
        day: 7,
        sessionLength: 0
      }
    ]
  }
]


const USER_PERFORMANCE = [
  {
    userId: 10,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 170,
        kind: 1
      },
      {
        value: 225,
        kind: 2
      },
      {
        value: 225,
        kind: 3
      },
      {
        value: 180,
        kind: 4
      },
      {
        value: 235,
        kind: 5
      },
      {
        value: 110,
        kind: 6
      }
    ]
  }
]


export default {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
}
