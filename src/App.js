import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😎": "cool",
  "😥": "sad",
  "😠": "angry",
  "❤️": "Heart",
  "✨": "Sparkles",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "🙏": "Folded Hands"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Paste Your emoji");

  const changeEventHandler = (event) => {
    var newUserInput = event.target.value;
    var newMeaning = emojiDictionary[newUserInput];
    if (newMeaning != undefined) {
      setMeaning("Meaning: " + newMeaning);
    } else if (newUserInput === "") {
      setMeaning("Paste Your emoji");
    } else {
      console.log(newMeaning);
      setMeaning("Sorry, failed to recognise");
    }
  };

  const emojiClickHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setMeaning("Meaning: " + meaning);
  };

  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <h2>This is an emoji 😉 interpreter!</h2>
      <input
        onChange={changeEventHandler}
        placeholder="Paste Your Emojy Here"
      />
      <h3>{meaning}</h3>
      <h4>emoji we know</h4>
      <p>click on the emoji to get their meaning</p>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
