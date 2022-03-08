var clicker = 0;
function clickerCounter()
{
  clicker++
    if (clicker != 1) {
        document.getElementById("clickerCounter").innerHTML = "you have clicked " + clicker + " times.";
    }
    else {
        document.getElementById("clickerCounter").innerHTML = "you have clicked " + clicker + " time.";
    }
}