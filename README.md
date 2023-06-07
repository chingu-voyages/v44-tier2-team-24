

# BooleBots 
BooleBots is an engaging app that combines gameplay with basic Boolean logic.
[Live Site](https://boolebots-dev.netlify.app/)


A collaborative app built remotely organized by [Chingus](https://jack-codes.netlify.app/)

- Run Qi (Jack) Li | [Github](https://github.com/jackli921) | [Portfolio](https://freemark.dev/)
- Elizabeth Reeves | [Github](https://github.com/libbyreeves) | [Portfolio](https://elizabeth-reeves.ca/)
- Hector Garcia | [Github](https://github.com/hectorgarcia07) | [LinkedIn](https://www.linkedin.com/in/hectorgarcia01/)
- Sucheta Mukherjee| [Github](https://github.com/sucheta90) | [Portfolio](https://www.linkedin.com/in/sucheta-mukherjee-07347b88/)


## Overview
Boole Bots is a game that is not only fun, but also an aid in helping to understand basic Boolean logic. This game has an arena of 8x8 game tiles in which your bots move at random speeds and trajectories. The Bots are assigned boolean values of 0 or 1 and boolean operations - AND, OR, NOR, NOT.
![Boolean operations](./assets/boolean_operations.png)


## Features
- Arena configuration panel (bot movement speed, arena dimension, boolean operator)
- Bot configuration panel (bot name, boolean value, bot icon, bot direction)
- Leaderboard showing bots scores
- Battle Log showing all which bots battled and who won and lost 
- Game controls (STOP vs. BATTLE)
- Arena can have a max size of 8 x 8 and arena size can be customizable
- Bots can move any North, West, South, East, North West, North East, South West, South East
- User can reset game using previous saved game state
- User can restart a game 


## Built With 
- React.js
- Git/Github
- SASS
- Vite
- Sweet Alert

## Packages Installed
- [Sweet Alert](https://sweetalert2.github.io/)
- [React Progress Bar](https://www.npmjs.com/package/@ramonak/react-progress-bar)
- [Sass](https://www.npmjs.com/package/sass)


## Image Asset Credits
- [Undraw](https://undraw.co/)
- [SVG Repo](https://www.svgrepo.com/svg/427580/approved-aproved-confirm-2)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Freepik](https://www.freepik.com/)

## Improvements
- Use Redux for state management
- Refactor form logic

## Installation
To run this project locally:
1. Clone this project locally 
2. ```cd``` to ```Boolebot``` directory
3. run ```npm install``` to install dependencies 
4. run ```npm run dev``` to build the app locally


## Screenshots
<table>
  <tr>
     <td><img src="https://user-images.githubusercontent.com/40412421/220480959-a1ee2e75-28e7-43c8-8133-a0a44a0c6087.png" alt="Screenshot of home page of app with a voting image and buttons to participate in or create a poll" /></td>
    <td><img src="https://user-images.githubusercontent.com/40412421/220480955-003052c9-705e-4716-b706-cbf191671e1a.png" alt="Screenshot of working app with empty form fields to create functioning poll"/></td>
    <td><img src="https://user-images.githubusercontent.com/40412421/220480958-7f491d42-94cf-4872-bb86-d3bea6c63e59.png" alt="Screenshot of a page containing multiple poll tiles to choose from" /></td>
    <td><img src="https://user-images.githubusercontent.com/40412421/220480960-9c4136bf-dcf2-42a1-804d-16aac32ceb76.png" alt="Screenshot of voting booth where you can vote on a poll option and submit your answer"/></td>
    <td><img src="https://user-images.githubusercontent.com/40412421/220480962-4c3bda6b-6423-4988-9092-b1bc195e3853.png" alt="Screenshot of a results page showing the results from an existing poll"/></td>
  </tr>
</table>