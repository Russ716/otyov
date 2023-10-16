# OTYOV - Choose Your Own Adventure Game

# Thousand Year Old Vampire
# A game by Tim Hutchings

Thousand Year Old Vampire is a lonely solo role-playing game in which you chronicle the unlife of a vampire over the many centuries of their existence, beginning with the loss of mortality and ending with their inevitable destruction. This vampire will surprise you as they do things that are unexpected, unpleasant, and sometimes tragic. Making gut-churning decisions, performing irreconcilable acts, and resolving difficult narrative threads are what this game is about as you explore the vampire’s human failings, villainous acts, and surprising victories. 

Electronic version in progress by me. I claim no license, authorship, or other commercial qualities. This game seemed like a neat thing to cobble some code together for and automate some processes, teaching myself some UI aspects at the same time. 

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

1. Open the `Rules.txt` file.
2. Run `1000yoV.html`.
3. The game will start with an initial prompt.
4. Click the "Roll Dice" button to make choices based on the random dice rolls.
5. The story will progress, and your choices will determine the outcome.

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

Enjoy playing OTYOV and exploring the life of a vampire character across the centuries! 
