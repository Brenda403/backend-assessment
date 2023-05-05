// grabbing the element from html doc
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
// gratitude elements
const gratitudePromptButton = document.getElementById("gratidudePromptBtn");
const gratitudeDiv = document.getElementById("gratitudePromptDiv");
const gratitudePromptInput = document.getElementById("gratitudeInput");
const gratitudePromptSubmit = document.getElementById("gratitudeSubmit");
const displayGratitudeBtn = document.getElementById("displayGratitude");
const deleteGratitudeBtn = document.getElementById("deleteGratitude");
const changeGratitudeBtn = document.getElementById("changeGratitude");

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

// at least 3 new features
// feature 1 - get prompts for gratitude message
const getGratitudePrompt = () => {
  axios.get("http://localhost:4000/api/gratitude-prompt/").then((res) => {
    const data = res.data;
    // gratitudePromptInput.value = data;
    alert(data);
    gratitudeDiv.style.display = "block";
  });
};
// feature 2 - collect the messages user inputs

const collectGratitude = (event) => {
  event.preventDefault();
  axios
    .post("http://localhost:4000/api/gratitude/", {
      gratitude: gratitudePromptInput.value,
    })
    .then((res) => {
      alert(res.data);
      // need to clear text input
      gratitudePromptInput.value = "";
    });
};

// feature 3 - display the messages received by user
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

// feature 4 - delete the messages received by user
const deleteGratitude = () => {
  const i = prompt(
    "Enter the index (starting with 0 :)) of the message you want to delete:"
  );
  if (i === null) {
    return "not valid entry";
  }
  axios
    .delete(`http://localhost:4000/api/gratitude/${i}`, {
      data: { i },
    })
    .then(() => {
      displayGratitude();
    });
};

// feature 5 - edit the messages received by user
const updateGratitude = (message) => {
  const gratitudeList = document.getElementById("gratitude-list");
  const gratitudeMessages = gratitudeList.getElementsByTagName("li");

  const index = prompt(
    "Enter the index (starting with 0 :)) of the message you want to update:"
  );
  if (index === null) {
    return "not valid entry";
  }
  const updatedMessage = prompt("enter updated gratitude message:");
  axios
    .put(`http://localhost:4000/api/gratitude/${index}`, {
      message: updatedMessage,
    })
    .then((res) => {
      alert(res.data);
      // lastGratitudeMessage.textContent = updatedMessage;
      gratitudeMessages[index].textContent = updatedMessage;
    })
    .catch((err) => console.log(err));
};
// event handler
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
gratitudePromptButton.addEventListener("click", getGratitudePrompt);
gratitudeDiv.addEventListener("submit", collectGratitude);
displayGratitudeBtn.addEventListener("click", displayGratitude);
deleteGratitudeBtn.addEventListener("click", deleteGratitude);
changeGratitudeBtn.addEventListener("click", updateGratitude);
