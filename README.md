# OTYOV - Choose Your Own Adventure Game

![OTYOV Banner](banner.png)

OTYOV (One Thousand Year Old Vampire) is a text-based choose-your-own-adventure game that explores the life and choices of a vampire character over centuries. This project is implemented in HTML, JavaScript, and uses a modular system for defining prompts and choices.

## Table of Contents

- [Introduction](#otyov---choose-your-own-adventure-game)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Text-based gameplay with a rich storyline.
- Randomized dice rolling to determine the course of the story.
- Keeps track of visited prompts to avoid repeating the same content.
- Customizable prompts and choices.

## Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Mozilla Firefox, etc.)
- A text editor (e.g., Visual Studio Code) for code customization.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/otyov.git
```

2. Open the project folder in your text editor.

## How to Play

1. Open the `index.html` file in your web browser.
2. The game will start with an initial prompt.
3. Click the "Roll Dice" button to make choices based on the random dice rolls.
4. The story will progress, and your choices will determine the outcome.

## Customization

You can customize the game by modifying the `prompts.js` file. This file contains the prompts, choices, and outcomes that drive the game's narrative.

```javascript
const prompts = [
  {
    id: "1",
    a: "Your first prompt text here.",
    b: "Your second prompt text here.",
    // Add more choices as needed.
  },
  {
    id: "2",
    //...
  },
  // Add more prompts as needed.
];
```

You can add more prompts and choices to expand the game's storyline or modify existing ones to suit your narrative.

## Contributing

Contributions are welcome! If you'd like to enhance the game or fix any issues, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy playing OTYOV and exploring the life of a vampire character across the centuries! If you have any questions or feedback, feel free to [contact the project maintainer](mailto:youremail@example.com).
