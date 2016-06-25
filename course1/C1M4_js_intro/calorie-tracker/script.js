$(document).ready(function() {
  let limit = 2000;
  let breakfast = 0;
  let lunch = 0;
  let dinner = 0;
  let exercise = 0;

  // Modify daily limit
  $("#limit-counter").html(limit);
  $("#dec-limit").click(function() {
    if (limit > 0)
      limit -= 100;
    $("#limit-counter").html(limit);
    calculate();
  });
  $("#inc-limit").click(function() {
    limit += 100;
    $("#limit-counter").html(limit);
    calculate();
  });

  // Modify breakfast calorie
  $("#breakfast-counter").html(breakfast);
  $("#dec-breakfast").click(function() {
    if (breakfast > 0)
      breakfast -= 100;
    $("#breakfast-counter").html(breakfast);
    calculate();
  });
  $("#inc-breakfast").click(function() {
    breakfast += 100;
    $("#breakfast-counter").html(breakfast);
    calculate();
  });

  // Modify lunch calorie
  $("#lunch-counter").html(lunch);
  $("#dec-lunch").click(function() {
    if (lunch > 0)
      lunch -= 100;
    $("#lunch-counter").html(lunch);
    calculate();
  });
  $("#inc-lunch").click(function() {
    lunch += 100;
    $("#lunch-counter").html(lunch);
    calculate();
  });

  // Modify dinner calorie
  $("#dinner-counter").html(dinner);
  $("#dec-dinner").click(function() {
    if (dinner > 0)
      dinner -= 100;
    $("#dinner-counter").html(dinner);
    calculate();
  });
  $("#inc-dinner").click(function() {
    dinner += 100;
    $("#dinner-counter").html(dinner);
    calculate();
  });

  // Modify exercise calorie
  $("#exercise-counter").html(exercise);
  $("#dec-exercise").click(function() {
    if (exercise > 0)
      exercise -= 100;
    $("#exercise-counter").html(exercise);
    calculate();
  });
  $("#inc-exercise").click(function() {
    exercise += 100;
    $("#exercise-counter").html(exercise);
    calculate();
  });

  // Calculate remaining calorie
  let remaining = limit;
  $("#remaining-counter").html(remaining);

  function calculate() {
    remaining = limit - breakfast - lunch - dinner + exercise;
    $("#remaining-counter").html(remaining);
  }
});
