# KOBO Card Game
Game of KOBO in digital version built with React.js! Currently work in progress. You can check out the demo [here](https://famous-blini-df8662.netlify.app/). 
This version of KOBO is a two player game. It's the digital implementation of my favourite card game and is a fun and effective way of practicing my React.js skills. The game goes like that: each player takes turn and tries to lower the sum of their points as much as possible. The player with the lowest count wins!

- [KOBO Card Game](#kobo-card-game)
  - [Installation](#installation)
  - [Built with](#built-with)
  - [How to play?](#how-to-play)
    - [What values do the cards have?](#what-values-do-the-cards-have)
  - [What's in progress?](#whats-in-progress)
  - [Contact](#contact)

## Installation
To run the app on your local device:
1. Clone this repository `git clone https://github.com/sabinarusielik/kobo-game-react.git`
2. Install packages with: `npm install`
3. Start the development server with: `npm run start`

## Built with
- JavaScript
- React.js
- PropTypes
- Sass
- NPM
- ESLint
- Prettier

## How to play?
1. Each player gets 4 cards but can only flip and see 2 of them at the beginning of the game. You can't peek into your opponent's cards.
2. Players take turns and draw one card from the remaining deck or from the rejected cards deck (which are facing up). Player decides if they want to replace one of their cards with the new one or get rid of it.
3. When player gets rid of a card they do it so that the opponent can also see what card it was. No matter if the rejected card was the replaced one or the newly drawn one.
4. The goal of the game is to have the lowest possible sum of card values. If you're feeling confident in your score simply click KOBO button. Your opponent makes their last turn and you both reveal your counts to each other. **One with the lowest sum wins!**

### What values do the cards have?
Going up from Ace through 2 to 10 ending at Jack, Queen and King the values consecutively go from 1 to 13. There is an exception though: both red Kings' values are 0.

## What's in progress?
Here are some things I'm still working on and planning on implementing in future:
1. Rejecting cards with the same values
2. Saving unfinished games and players' names to local storage
3. Mobile version
4. Unit tests
5. Maybe?: online 2 device game

## Contact
You can contact me on [LinkedIn](https://www.linkedin.com/in/sabina-rusielik-26a263258/) or via mail - sabinarusielik@gmail.com

**Enjoy the game!**