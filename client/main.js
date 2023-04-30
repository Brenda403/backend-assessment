// grabbing the element from html doc
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
// gratitude elements
const gratitudePromptButton = document.getElementById("gratidudePromptBtn");
const gratitudeDiv = document.getElementById("gratitudePromptDiv");
const gratitudePromptInput = document.getElementById("gratitudeInput");
const gratitudePromptSubmit = document.getElementById("gratitudeSubmit");
const displayGratitudeBtn = document.getElementById("displayGratitude");

// sending request to controller?
//existing feature
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
// fortune feature
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

// 3 new features
// feature 1
const getGratitudePrompt = () => {
  axios.get("http://localhost:4000/api/gratitude-prompt/").then((res) => {
    const data = res.data;
    // gratitudePromptInput.value = data;
    alert(data);
    gratitudeDiv.style.display = "block";
  });
};
// feature 2

const collectGratitude = (event) => {
  event.preventDefault();
  axios
    .post("http://localhost:4000/api/gratitude/", {
      gratitude: gratitudePromptInput.value,
    })
    .then((res) => {
      alert(res.data);
    });
};

// feature 3
const displayGratitude = () => {
  const gratitudeList = document.getElementById("gratitude-list");
  event.preventDefault();
  axios.get("http://localhost:4000/api/gratitude-messages/").then((res) => {
    const gratitudeMessages = res.data;
    gratitudeList.innerHTML = " ";
    gratitudeMessages.forEach((gratitudeMessages) => {
      const li = document.createElement("li");
      li.textContent = gratitudeMessages;
      gratitudeList.appendChild(li);
    });
  });
};

// event handler
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
gratitudePromptButton.addEventListener("click", getGratitudePrompt);
gratitudeDiv.addEventListener("submit", collectGratitude);
displayGratitudeBtn.addEventListener("click", displayGratitude);
