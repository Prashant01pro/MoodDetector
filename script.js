const moodInput = document.querySelector("#custom_input");
const detectButton = document.querySelector("#detectButton");

const happy = document.querySelector("#happy");
const sad = document.querySelector("#sad");
const angry = document.querySelector("#angry");
const neutral = document.querySelector("#neutral");
const excited = document.querySelector("#excited");


const moods = [happy, sad, angry, neutral, excited];

detectButton.addEventListener("click", showMood);
moodInput.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
        showMood();
    }
})

function showMood() {
    const inputValue = moodInput.value.toLowerCase().trim();
    console.log(inputValue);

    // hidding all mood elements first
    moods.forEach((mood) => {
        mood.style.display = "none";
    })

    switch (inputValue) {
        case "happy":
            happy.style.display = "block";
            break;

        case "sad":
            sad.style.display = "block";
            break;

        case "angry":
            angry.style.display = "block";
            break;

        case "excited":
            excited.style.display = "block";
            break;

        case "neutral":
            neutral.style.display = "block";
            break;

        default:
            console.log("Mood not recognized");
    }
    moodInput.value="";
}
