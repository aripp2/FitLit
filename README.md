# FitLit

By [Amy Rippeto](https://github.com/aripp2) and [Katherine Williams](https://github.com/kawilliams8)

## Description

FitLit is a web-based data visualization app designed to analyze and display a user's fitness and activity history in a useful and engaging format. We were challenged to manipulate multiple local datasets and create an attractive display from scratch. With the principles of OOP and TDD in mind, we designed a thoughtful class structure, created sample datasets, implemented a full Mocha/Chai testing suite, and kept tidy code using eslint. We opted to track project goals and iterations with Trello.

All data charts were created with [Chart.js](https://www.chartjs.org/), HTML5 and JavaScript.

Fit Lit is a Front-End MOD 2 project at the Turing School of Software & Design.

## Splashscreen User Selection
![Screenshot](https://github.com/aripp2/FitLit/blob/master/1.png)
## Coach Role / Coach Names
![Screenshot](https://github.com/aripp2/FitLit/blob/master/2.png)
## Coach Dashboard
![Screenshot](https://github.com/aripp2/FitLit/blob/master/3.png)
## Athlete Role / Athlete Names
![Screenshot](https://github.com/aripp2/FitLit/blob/master/4.png)
## Athlete Dashboard
![Screenshot](https://github.com/aripp2/FitLit/blob/master/5.png)
## Athlete Data Visualization
![Screenshot](https://github.com/aripp2/FitLit/blob/master/6.png)

## Installation

To view FitLit in action:

1. Clone down the Repo
2. Run `npm install` in your terminal
3. Open the index.html file in a browser

## Data Model

Students were provided four data files for FitLit.

**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```
