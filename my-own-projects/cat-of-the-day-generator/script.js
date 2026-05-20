const names = ["Maja", "Lija", "Max", "LadyBug", "Conon"];
const colors = ["black", "tabby", "brown", "white", "gray", "ginger"];
const moods = ["happy", "sad", "mad", "angry", "calm", "sleepy"];

function generateCat() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];

    const randomMoodIndex = Math.floor(Math.random() * moods.length);
    const mood = moods[randomMoodIndex];

    const cat = {
        name: name,
        color: color,
        mood: mood
    };

    console.log("🐱 Cat of the Day:");
    console.log("Name:", cat.name);
    console.log("Color:", cat.color);
    console.log("Mood:", cat.mood);
};
