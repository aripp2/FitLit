# FitLit

goals, testing, installation, mocha/chai, eslint, chart.js

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
