const endDate = "31 March 2023 12:34 PM";


document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now ) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    // console.log(diff)
}

clock()


/***
 * 1 day = 24 hr
 * 1 hr = 60 min
 * 60 min = 3600 sec
 * ***/

setInterval(
    () => {
        clock()
    }, 1000
)