### Taylor Johnson Tic Tac Toe

#### Overview

For this individual project we were asked to create a tic tac toe game from scratch. The game was required to follow the rules of tic tac toe, to store the player wins in local storage as well as implement classes.

### Goals for the project

For this project I wanted to make the game persist in local storage if the users exited before they were finished. I also wanted to give the users the option to clear the board as well as clear the wins. I also wanted to focus on my understanding of classes and objects. One other area I wanted to focus on was making atomic commits and sufficient pull requests.

### Challenges

Over the course of the project I faced many different challenges that ultimately led to me becoming a stronger Javascript developer. One such challenge was saving and retrieving the game to local storage. I initially didn't realize local storage didn't save methods. This led to me approaching the problem from the wrong way and it not working for a very long time. A couple other problems I ran into where bugs that arose from me trying to implement every functionality of my game at the same time. Here are a list of the bugs I ran into : game only saves last square on reload, game doesn't close board currently, game doesn't prevent click after end game, game doesn't show correct turn on reload, game only draws some of the time. Ultimately these bugs all taught me a very important lesson : Don't try to do every iteration at once. Had I made my game work currently and then worked on saving it to local storage I believe I would have had a better grasp on how to implement the extra functionalities in a less time consuming way. However I greatly appreciate the experience although my pull requests suffered greatly from the fact my code was not working most of the time.

### Code Reflection

For this project I focused on separating the classes and their methods from any kind of data manipulation. I tried to separate the Dom and the data model as well as create dry functions. There are some functions that are rather large that I would trim in future iterations. Looking back my variable names are rather vague in some instances. I would also refactor those in the future. All and all I am proud of the work I did except for the lack of pull requests. I think the biggest issue I had in the project was putting all of the pieces together. I knew what every individual function was doing but as it got more complicated I felt like I lost a little control over my code.

### Project Outline
The Tic tac toe game I created has a space theme as seen below.
The game relies on the users click to place either a red or a blue token depending on the turn. When there are three in a row or a draw the game ends and the player who win's win count is increased by one.

![](./Read-me-Images/game-on-load.png)

![](./Read-me-Images/game-switch.png)

![](./Read-me-Images/show-wins.png)

The features that are not shown are the ability to save multiple wins to local storage, save the game to local storage(and update current player turn), clear wins and clear board. 
