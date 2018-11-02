window.onload = function() {
    $("form").on("click", stopwatch.start);
    $("#done-button").on("click", stopwatch.stop);
    $("#restart-button").on("click", stopwatch.reset);
};

var intervalId;
var clockRunning = false;

var stopwatch = {

    time: 60,

    reset: function() {
        stopwatch.stop();
        stopwatch.time = 60;
        $("#time-remaining").text("1:00");
        $("input[name='choice']").prop('checked', false);
    },

    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
        $("#time-remaining").html("Score: " + "100");
        
    },

    count: function() {
        if (stopwatch.time > 0) {
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);
            $("#time-remaining").text(converted);
        }
    },

    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
        }
};
