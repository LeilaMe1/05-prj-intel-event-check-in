const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const teamValue = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamValue, teamName);

  count++;
  console.log("total checkins: ", count);

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

  form.reset();
});
