$(document).ready(function() {
  let role;
  let coach;
  let id;
  let user, hydration, sleep, activity;
  const date = "2019/06/23";
  const userRepo = new UserRepo(userData);
  const hydrationRepo = new HydrationRepo(hydrationData);
  const sleepRepo = new SleepRepo(sleepData, userData);
  const activityRepo = new ActivityRepo(activityData, userData);

  $('.form--coachName').hide();
  $('.form--athleteName').hide();
  $('.hide').hide();
  $('.form--role').on('change', function() {
    role = $('.form--role option:selected').val();
    processUserForms();
  });

function processUserForms() {
    if (role == 1) {
      $('.form--athleteName').hide();
      $('.form--coachName').show();
    }
    if (role == 2) {
      $('.form--coachName').hide();
      $('.form--athleteName').show();
      userRepo.userData.forEach(user => {
        $('.form--athleteNameSelector').append(`<option value="${user.id}"> ${user.name}</option>`);
      })
    }
  }
  
  $('.form--coachName').on('change', function() {
    coach = $('.form--coachName option:selected').val();
  })
  
  $('.form--athleteName').on('change', function () {
    let num = $('.form--athleteName option:selected').val();
    id = parseInt(num)
  })
  
  $('.form--submit').on('click', function() {
    $('.splash').hide();
    $('.hide').show();
    user = new User(userRepo.returnUserData(id));
    hydration = new Hydration(hydrationRepo.returnUserData(id));
    sleep = new Sleep(sleepRepo.returnUserData(id));
    activity = new Activity(activityRepo.returnUserActivityData(id), userRepo.returnUserData(id));
    
  appendUser();
  appendHydration();
  appendSleep();
  appendActivity();

  function appendUser() {
    appendFirstName();
    appendUserProfile();
    appendAverageStepGoals();
  }

  function appendHydration() {
    appendTodayWater();
  }

  function appendSleep() {
    appendUserAverageSleepHours();
    appendUserAverageSleepQuality();
    appendUserHoursSleptDate();
    appendUserSleepQualityDate();
    appendUserAllTimeSleepTotal();
    appendUsersSleepQualityAvg();
    appendUsersWithSleepQuality3PlusForWeek();
    appendLongestSleeperGivenDate();
  }

  function appendActivity() {
   appendUserMilesWalkedDate();
   appendUserMinActiveDate(); 
   appendUserAvgMinActiveWeek();
   appendWasStepGoalAchievedDate();
   appendUserDaysStepGoalExceeded();
   appendUserStepStreak();
   appendUserStairClimbRecord();
   appendUsersAvgStairsDate();
   appendUsersAvgStepsDate();
   appendUsersAvgMinActiveDate();
   appendFriendsStepChallenge();
   appendFriendsMinActiveChallenge();
  }

  function appendFirstName() {
    $('.user--firstName').text(user.returnUserFirstName());
  }

  function appendUserProfile() {
    $('.user--id').text(userRepo.returnUserData(id).id);
    $('.user--name').text(userRepo.returnUserData(id).name);
    $('.user--address').text(userRepo.returnUserData(id).address);
    $('.user--email').text(userRepo.returnUserData(id).email);
    $('.user--strideLength').text(userRepo.returnUserData(id).strideLength);
    $('.user--dailyStepGoal').text(userRepo.returnUserData(id).dailyStepGoal);
    $('.user--friends').text(userRepo.returnUserData(id).friends);
  }

  function appendAverageStepGoals() {
    $('.users--stepAverage').text(userRepo.returnAllUsersStepGoalAverage());
  }

  function appendTodayWater() {
    $('.user--todayWater').text(hydration.returnOuncesGivenDate(date));
  }

  function appendUserAverageSleepHours() {
    $('.user--avgHoursSleep').text(sleep.returnUserAverageSleepHours());
  }

  function appendUserAverageSleepQuality() {
    $('.user--avgSleepQuality').text(sleep.returnUserAverageSleepQuality());
  }

  function appendUserHoursSleptDate() {
    $('.user--hoursSleptForDate').text(sleep.returnUserSleepHoursDate(date));
  }

  function appendUserSleepQualityDate() {
    $('.user--sleepQualityForDate').text(sleep.returnUserSleepQualityDate(date));
  }

  function appendUserAllTimeSleepTotal() {
    $('.user--allTimeSleepTotal').text(sleep.returnUserAllTimeSleepHours());
  }

  function appendUsersSleepQualityAvg() {
    $('.users--sleepQualityAverage').text(sleepRepo.returnAllUserSleepQualityAvg());
  }

  function appendUsersWithSleepQuality3PlusForWeek() {
    $('.users--sleepQualityGreater3ForWeek').text(sleepRepo.returnAllUserQualityOverThree(date));
  }

  function appendLongestSleeperGivenDate() {
    $('.user--sleptMostHoursDate').text(sleepRepo.returnLongestSleeperGivenDate(date));
    $('.date').text(date);
  }

  function appendUserMilesWalkedDate() {
    $('.user--milesWalkedDate').text(activity.returnMilesWalkedForDate(date));
  }

  function appendUserMinActiveDate() {
    $('.user--minActiveDate').text(activity.returnMinutesActiveGivenDate(date));
  }

  function appendUserAvgMinActiveWeek() {
    $('.user--avgMinActiveWeek').text(activity.returnAvgMinActiveGivenWeek(date));
  }

  function appendWasStepGoalAchievedDate() {
    $('.user--wasStepGoalAchieved').text(activity.wasStepGoalAchieved(date));
  }

  function appendUserDaysStepGoalExceeded() {
    $('.user--daysStepGoalExceeded').text(activity.daysStepGoalExceeded());
  }

  function appendUserStepStreak() {
    $('.user--stepStreak').text(activity.returnStepStreaks());
  }

  function appendUserStairClimbRecord() {
    $('.user--stairClimbRecord').text(activity.stairClimbingRecord());
  }

  function appendFriendsStepChallenge() {
    $('.user--friendsStepChallenge').text(activityRepo.returnFriendsWeeklyStepWinner(date, user.userData));
  };

  function appendFriendsMinActiveChallenge() {
    $('.user--friendsMinActiveChallenge').text(activityRepo.returnFriendsWeeklyMinutesWinner(date, user.userData));
  };

  function appendUsersAvgStairsDate() {
    $('.users--stairAvgDate').text(activityRepo.avgNumStairsClimbedGivenDate(date));
  }

  function appendUsersAvgStepsDate() {
    $('.users--stepsAvgDate').text(activityRepo.avgNumStepsTakenGivenDate(date));
  }

  function appendUsersAvgMinActiveDate() {
    $('.users--minActiveAvgDate').text(activityRepo.avgNumMinActiveGivenDate(date));
  };


  const weeklyWaterChart = new Chart($('#chart--weekHydration'), {
        type: 'bar',
        data: {
            labels: ['Today', 'Yesterday', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days'],
            datasets: [{
                label: 'Weekly Hydration',
                data: hydration.returnOuncesGivenDateWeek(date),
                backgroundColor: [
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)'
                ]
            }]
        },
        options: {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Fira Sans'",
            responsive: false,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

const weeklySleepHoursChart = new Chart($('#chart--weekSleepHours'), {
        type: 'bar',
        data: {
            labels: ['Today', 'Yesterday', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days'],
            datasets: [{
                label: 'Weekly Sleep Hours',
                data: sleep.returnUserSleepHoursWeek(date),
                backgroundColor: [
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)'
                ]
            }]
        },
        options: {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Fira Sans'",
            responsive: false,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })

const weeklySleepQualityChart = new Chart($('#chart--weekSleepQuality'), {
        type: 'bar',
        data: {
            labels: ['Today', 'Yesterday', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days'],
            datasets: [{
                label: 'Weekly Sleep Quality',
                data: sleep.returnUserSleepQualityWeek(date),
                backgroundColor: [
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)',
                    'rgba(11, 204, 207, .3)'
                ]
            }]
        },
        options: {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Fira Sans'",
            responsive: false,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
});

});