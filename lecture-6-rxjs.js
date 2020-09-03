
timer()
function timer() {
 var h = document.getElementById("hours").value
 var m = document.getElementById("minutes").value
 var s = document.getElementById("seconds").value





  var startTime = "" + h + ":" + m + ":" + s
  document.getElementById("blah").innerHTML=startTime
  var timeInMs = genTimeInMs(startTime)
  const f = Rx.Observable.interval(1000);
  const example = Rx.Observable.merge(f.mapTo(-1000))
  const example2 = example.takeWhile(val => (timeInMs + val) >= 0)

  const subscribe = example2.subscribe(val => {
  	var time = timeInMs + val
    timeInMs = time
  	timeString = convertTime(timeInMs)
  	console.log(timeString)
    document.getElementById("blah").innerHTML=timeString
  });
}


function genTimeInMs(t) {
	var times = t.split(":")
	var his = parseInt(times[0]) * 1000 * 60 * 60
  var mis = parseInt(times[1]) * 1000 * 60
  var sis = parseInt(times[2]) * 1000
  totalTime = his + mis + sis
  console.log(his,mis,sis)
  return totalTime
}

function convertTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}
