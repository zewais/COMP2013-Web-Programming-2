import { useState } from "react";

export default function EmojiStore() {
  const [emojiStore, setEmojiStore] = useState([]);
  console.log(emojiStore);

  return (
    <div>
      <div>
        {emojiStore.map((emoji, index) => (
          <p key={index}>{emoji}</p>
        ))}
      </div>
      <button onClick={() => setEmojiStore([...emojiStore, "😊"])}>
        Add Happy
      </button>
      <button onClick={() => setEmojiStore([...emojiStore, "🙁"])}>
        Add Sad
      </button>
      <button onClick={() => setEmojiStore([...emojiStore, "😎"])}>
        Add Cool
      </button>
    </div>
  );
}
