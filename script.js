const speech = new SpeechSynthesisUtterance();

const gen_btn = document.getElementById("gen_btn");

const textara = document.querySelector("textarea");

const selection_list = document.querySelector("select");

gen_btn.addEventListener("click", () => {
  speech.text = textara.value;
  window.speechSynthesis.speak(speech);
});

let voices = [];
selection_list.addEventListener("click", () => {
  voices = window.speechSynthesis.getVoices();
  selection_list.voice = voices[0];

  voices.forEach((nam, num) => {

    selection_list.options[num] = new Option(nam.name, num);
  });
});

selection_list.addEventListener("change", () => {
  speech.voice = voices[selection_list.value];
});
