/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let x;

    document.querySelector("button").onclick = function () {
        checkinput()
        let friday = "";
        for (i = 0; i <= 11; i++) {
            let dayt = new Date(x, i, 13);
            let weekday = dayt.getDay();
            if (weekday === 5) {
                friday += (dayt.toLocaleString("default", {month: "long"}) + "\n");

            }
            alert(friday);
        }

        function checkinput() {
            x = document.getElementById("year").value;
        }
    }

    }
)();
