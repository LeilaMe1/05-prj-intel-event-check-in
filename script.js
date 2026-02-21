const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;
localStorage.setItem("storedCount", count);
console.log("?" + localStorage.key(0));

const attendeeList = document.getElementById("attendeeList");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const teamValue = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamValue, teamName);

  count = localStorage.getItem("storedCount");

  count++;
  console.log("total checkins: ", count);
  localStorage.setItem("storedCount", count);

  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`percentage ${percentage}`);

  const teamCounter = document.getElementById(teamValue + "Count");
  console.log(teamCounter);
  const current = parseInt(teamCounter.textContent);
  teamCounter.textContent = current + 1;

  const message = `Welcome, ${name} from ${teamName}! :)`;
  console.log(message);

  const displayCount = document.getElementById("attendeeCount");
  displayCount.textContent = count;

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  const greeting = document.getElementById("greeting");
  greeting.textContent = message;
  greeting.style.display = "block";

  if (count == maxCount) {
    // display success message
    const celebration = document.getElementById("celebration");
    celebration.textContent =
      "Check-In Goal Reached!!! Congrats to " + teamName;
  }

  //const attendeeInfo = document.getElementById("attendeeInfo");
  //attendeeInfo.innerHTML = attendeeInfo.textContent + "<br>" + name + " - " + teamName;

  const attendeeInfo = document.createElement("li");
  attendeeInfo.textContent = name + " - " + teamName;
  attendeeList.appendChild(attendeeInfo);

  form.reset();
});
