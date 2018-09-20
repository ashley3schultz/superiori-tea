# Superiori-Tea
**A tea harvesting game**
![screenshot](https://raw.githubusercontent.com/ashley3schultz/superiori-tea/master/src/components/images/screenshot.png)
## Application features
 - Five levels, one for each tea type
 - Scoring based on multiple challenges on each level
 - Fetches and saves games to an Rails API database
 - Shows leader score during game
 - Has 3 route including game play, all scores, current user scores

## Installing
From the command line
  ```
  git clone 'git@github.com:ashley3schultz/superiori-tea.git'
  ```
  ```
  npm install
  ```
  ```
  npm start
  ```

## Playing the game
When page automatically opens, start by entering your name, you will need to first enter your name in order to play the game ‘Play Game’ link at the top of the page. Once your name has been entered, you will see a start button. To begin the first level, click start. Tips will appear instructing which tree to harvest from and which leaves to pick from that tree. You will see three percentage scores near the top for Purity, Quality and Quota. Try to achieve 100% in each category. You will also get extra points based on how soon you achieve that status. The level ends when the timer gets to 0. The next level be set and you can click start to proceed to the next level. When all five levels have been played, the game will be saved. If your score is higher than the leader score, it will be updated with your name and score. You can also view your previously played games be viewing ‘My Scores’ link at the top of the page or view all score by clicking the ‘Top Scores’ link.

## Built With
React framework using Javascript with redux to manage state
 - react-router
 - thunk
 - uuid

## Rails Api
 - https://github.com/ashley3schultz/superiori-tea-api