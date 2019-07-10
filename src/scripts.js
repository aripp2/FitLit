$(document).ready(function() {
  let role;
  let coach;
  let id;
  let user, hydration, sleep, activity;
  const date = "2019/06/23";
  const userRepo = new UserRepo(userData);
  const hydrationRepo = new HydrationRepo(hydrationData);
  const sleepRepo = new SleepRepo(sleepData);
  const activityRepo = new ActivityRepo(activityData);

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
    $('.hide').show();
    console.log(id, typeof id)
    user = new User(userRepo.returnUserData(id));
    hydration = new Hydration(hydrationRepo.returnUserData(id));
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

  }

  function appendActivity() {

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

  let abc = hydrationRepo.returnUserData(id);


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
    })
});

}); //DOC.ready closing line