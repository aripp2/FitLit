class Activity {
  constructor(userData, userRepo) {
    this.userData = userData;
    this.userRepo = userRepo;
  }

  returnMilesWalkedForDate(date) {
    let stride = this.userRepo.strideLength;
    let steps = this.userData.find(record => record.date === date).numSteps;
    return +((stride * steps) / 5280).toFixed(2);
  }

  returnMinutesActiveGivenDate(date) {
    return this.userData.find(record => record.date === date).minutesActive;
  }

  returnAvgMinActiveGivenWeek(date) {
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven - 6;

    return +(this.userData.reduce((acc, record, index) => {
      if (index <= daySeven && index >= dayOne) {
        acc += record.minutesActive;
      }
      return acc;
    }, 0) / 7).toFixed(2);
  } 

  wasStepGoalAchieved(date) {
    let steps = this.userData.find(record => record.date === date).numSteps;
    if (steps >= this.userRepo.dailyStepGoal) {
      return 'Great Job! You reached your daily step goal!!!';
    } else {
      return 'You did not reach your step goal.';
    }
  }

  daysStepGoalExceeded() {
    let numDays = this.userData.filter(record => {
      return record.numSteps > this.userRepo.dailyStepGoal
    });
    return numDays.length;
  }

  stairClimbingRecord() {
    return this.userData.reduce((acc, record) => {
      if (record.flightsOfStairs > acc) {
        acc = record.flightsOfStairs;
      }
      return acc;
    }, 0);
  }

  returnUsersStepTotal() {
    return this.userData.reduce((acc, record) => {
      acc += record.numSteps;
      return acc;
    }, 0);
  }

  returnStepStreaks() {
    let streak = [];
    let streaks = this.userData.reduce((acc, record, index, array) => {
      if (streak.length === 0) {
        streak.push(record.date);
      } else if (index > 0 && record.numSteps > array[index - 1].numSteps) {
        streak.push(record.date);
      } else if (index > 0 && record.numSteps <= array[index - 1].numSteps && streak.length > 2) {
        acc.push(streak);
        streak = [];
      } else {
        streak = [];
      }
      return acc;
    }, []);
    return `You had a ${streaks[0].length} day streak of increasing steps on ${streaks[0]}`
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}