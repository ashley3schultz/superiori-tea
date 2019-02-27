# Superiori-Tea
**A tea harvesting game**

Superiori-Tea is a game with five challenges. Each challange is scored based on meeting specific criterias and the time it took to complete the challange. When the final challange is completed, your score is saved in the database. If you were able to beat the top score, you will be added to the leaderboard. 

[Play Game](https://superiori-tea.herokuapp.com/)

![screenshot](https://raw.githubusercontent.com/ashley3schultz/superiori-tea/master/src/components/images/screenshot.png)
## Application features
* Five levels, one for each tea type
* Scoring based on multiple challenges on each level
* Fetches and saves games to an Rails API database
* Shows leader score during game
* Includes 3 routes to navigate to top scores, your scores, and to play game.

## Playing the game
Superiori-Tea is hosted on heroku and can be played online at https://superiori-tea.herokuapp.com/
Once your name is entered, you will be able to see level you are on 
1. Enter your name, and press enter.
2. To begin the first level, click start. 
3. Click leaves to collect them and be sure to follow the instructions to get the highest quality and purity.

### Levels
**Level 1:**
Black Tea Challenge, Only pick the young leaves from da ye zhong cultivar

**Level 2:**
Green Tea Challenge, Only pick the buds from long jing cultivar

**Level 3:**
Oolong Tea Challenge, Only pick the up to the fourth leaf from tie guan yin cultivar

**Level 4:**
White Tea Challenge, Only pick the buds from da bai cultivar

**Level 5:**
Yellow Tea Challenge, Only pick the buds from jin ji cultivar

### Scoring
While playing each level, you will see three percentage scores near the top

* **Purity:** the percentage of leaves seleced from the correct plant.
* **Quality:** the persentage of leaves that are the right part of the plant.
* **Quota:** the percentage of leaves collected of the total quota.

Try to achieve 100% in each category.
You will also get extra points based on how soon you achieve 100% in all categories. 
The level ends when the timer gets to 0.

### Menu 
Three tabs to sellect from located at the top of the screen
* **Play Game:** go to the start game screen
* **My Scores:** view your scores
* **Top Scores:** view all top scores

## Munnual Installation 

### Getting Started 
Make sure react is installed on device.

### Installing
From the command line:
  ```
  git clone 'git@github.com:ashley3schultz/superiori-tea.git'
  ```
  ```
  npm install
  ```
  ```
  npm start
  ```
	
### Built With
* react.js
* redux
* react-router
* thunk
* uuid
 
## Referances
* [Live Webite](https://superiori-tea.herokuapp.com/)
* [Live API](https://superiori-tea-api.herokuapp.com/)
* [Rails API Repo](https://github.com/ashley3schultz/superiori-tea-api)
