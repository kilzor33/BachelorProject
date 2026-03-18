# Documentation for GameStateLogger
GameStateLogger is a library that allows users to log events in their JavaScript games, to enable analyzing, debugging, and in limited capacity, observe a run of a game to ensure that it is not fraudulent or to observe where bugs in the gameplay might have arisen.

GameStateLogger a lightweight framework that lets the user determine how many and which events to log without causing a large performance overhead.

**Content Overview:**
[Importing GameStateLogger to your game](#importing-gamestatelogger-to-your-game)
[Initializing the GameStateLogger](#initializing-the-gamestatelogger)
[Available functions](#available-functions)
- [logKeyDownEvent(ID, event, time = "n/a", points = "n/a")](#logkeydownevent(id,-event,-time-=-"n/a",-points-=-"n/a"))
- [logClickEvent(ID, event, location, time = "n/a", points = "n/a")](#logclickevent(id,-event,-location,-time-=-"n/a",-points-=-"n/a"))
- [logNewLevel(ID, newLevel, time = "n/a", points = "n/a")](#lognewlevel(id,-newlevel,-time-=-"n/a",-points-=-"n/a"))
- [logGameResult(ID, event, time = "n/a", points = "n/a", highscore = "n/a")](#loggameresult(id,-event,-time-=-"n/a",-points-=-"n/a",-highscore-=-"n/a"))


## Importing GameStateLogger to your game
In order to use the framework, you need to import the npm package for GameStateLogger.

In your terminal of choice, from the folder in which you main JavaScript file for your game is placed, run:
```
npm install GameStateLogger
```

Then, in the top of your game JavaScript file, import the GameStateLogger using ES Module syntax:
```
import { GameStateLogger } from 'gamestatelogger';
```

> [!NOTE]  
> JavaScript requires that any file that uses a module is also a module itself.
> There are two options you might try to ensure your game file is a module type file:
> 
> **In the HTML file, where you import your JavaScript game file:**
> Add `type="module"` to your import, as such:
> `<script type="module" src="game.js"></script>`
> 
> **In your package.json:**
>Add   `"type": "module"` to your package.json file, as such:
>```
>{
>  "name": "my-game",
>  "type": "module",
>  "author": "Jane Doe, John Doe",
>}
>```

## Initializing the GameStateLogger 
To create an instance of the GameStateLogger for use in your game file, create a new object of the GameStateLogger:
`var gameStateLogger = new GameStateLogger(eventLog, flushSize)`

>**eventLog \[Type: Array\]:** An array for holding logged events.
>**flushSize \[Type: Number\]:** A Number that lets the user define how often the eventLog should be sent to the server.

## Available functions
### logKeyDownEvent(ID, event, time = "n/a", points = "n/a")

>**ID \[Type: Number\]:** Game session ID.
>**event \[Type: String\]:** A string with the name of the key pressed. Example: "ArrowDown" or "w".
>_OPTIONAL:_ **time \[Type: Number\]:** The time at which an event has occurred. Choosing a logical time or real time is up to the user of the framework, however logical time is encouraged for precise logging. Consistency in time counting should be kept across all logs.
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.

`logKeyDownEvent(...)` is used to log when a user presses a key.

You have to have some form of session ID implemented in your game, that you can send through the log. See [[#Requirements to use the API]].

`time` and `points` default to a value of “n/a” if no parameter is given. 

### logClickEvent(ID, event, location, time = "n/a", points = "n/a")

>**ID \[Type: Number\]:** Game session ID.
>**event \[Type: String\]:** A string with the name of the key pressed. Example: "ArrowDown" or "w".
>**location \[Type: Object || String || Number\]:** The location of the click. Recommended formats:
>Object of the form: {x : xcoord, y: ycoord}.
>A string containing the ID of an HTML element that was clicked.
>A string or number identifier of a clickable element in your game.
>_OPTIONAL:_ **time \[Type: Number\]:** The time at which an event has occurred. Choosing a logical time or real time is up to the user of the framework, however logical time is encouraged for precise logging. Consistency in time counting should be kept across all logs.
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.

`logClickEvent(...)` is used to log when a user clicks with their mouse.

You have to have some form of session ID implemented in your game, that you can send through the log. See [[#Requirements to use the API]].

`time` and `points` default to a value of “n/a” if no parameter is given. 

### logNewLevel(ID, newLevel, time = "n/a", points = "n/a") 

>**ID \[Type: Number\]:** Game session ID.
>**newLevel \[Type: Number\]:** 
>_OPTIONAL:_ **time \[Type: Number\]:** The time at which an event has occurred. Choosing a logical time or real time is up to the user of the framework, however logical time is encouraged for precise logging. Consistency in time counting should be kept across all logs.
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.

`logNewLevel(...)` is used to logging when a user changes levels, if your game has a level system. 
This lets you keep track of at which level following logged events happened.

You have to have some form of session ID implemented in your game, that you can send through the log. See [[#Requirements to use the API]].

`time` and `points` default to a value of “n/a” if no parameter is given. 

### logGameResult(ID, event, time = "n/a", points = "n/a", highscore = "n/a")

>**ID \[Type: Number\]:** Game session ID.
>**event \[Type: String\]:** A string representing the game result. Examples: "Game Over", "Tie", "Player won". The specific content of the string is up to user of the framework, however we recommend to keep it consistent across all logs.
>_OPTIONAL:_ **time \[Type: Number\]:** The time at which an event has occurred. Choosing a logical time or real time is up to the user of the framework, however logical time is encouraged for precise logging. Consistency in time counting should be kept across all logs.
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.

`logGameResult(...)` is used to log intermediate game results, such as game overs, ties, or wins of a specific round.

Note that a separate function exists for logging the end of a game session, [[#logGameEnd(ID, event, time = "n/a", points = "n/a", highscore = "n/a")]]

You have to have some form of session ID implemented in your game, that you can send through the log. See [[#Requirements to use the API]].

`time` and `points` default to a value of “n/a” if no parameter is given. 

### logGameEnd(ID, event, time = "n/a", points = "n/a", highscore = "n/a")

>**ID \[Type: Number\]:** Game session ID.
>**event \[Type: String\]:** A string representing that the game has been ended. Examples: "Game session ended". The specific content of the string is up to user of the framework, however we recommend to keep it consistent across all logs.
>_OPTIONAL:_ **time \[Type: Number\]:** The time at which an event has occurred. Choosing a logical time or real time is up to the user of the framework, however logical time is encouraged for precise logging. Consistency in time counting should be kept across all logs.
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.
>_OPTIONAL:_ **highscore \[Type: Number\]:** A number representing the final highscore of the player.

`logGameEnd(...)` is used to log that a game session has been ended. This is not to be confused with a Game Over event, where a player can continue playing a new round. This function is intended to be used when a game session is completely ended.
A separate function exists for logging events such as Game Overs, see [[#logGameResult(ID, event, time = "n/a", points = "n/a", highscore = "n/a")]].

You have to have some form of session ID implemented in your game, that you can send through the log. See [[#Requirements to use the API]].

`time` and `points` default to a value of “n/a” if no parameter is given. 

## Requirements to use the API 
Every logging function requires the framework user to log a game session ID.
This requirement is to enable precise analysis in databases, as the user of the framework will then be able to use the ID to group events together.

> [!NOTE]  
> JavaScript requires that any file that uses a module is also a module itself.
> There are two options you might try to ensure your game file is a module type file:
> 
> **In the HTML file, where you import your JavaScript game file:**
> Add `type="module"` to your import, as such:
> `<script type="module" src="game.js"></script>`
> 
> **In your package.json:**
>Add   `"type": "module"` to your package.json file, as such:
>```
>{
>  "name": "my-game",
>  "type": "module",
>  "author": "Jane Doe, John Doe",
>}
>```

