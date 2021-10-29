# Background

JSdewValley is a lite clone of Stardew Valley. The original Stardew Valley is a simulation role-playing video where players can grow crops, raise livestock, craft goods, and engage in other activities around the town of Stardew Valley. This game, JSdewValley, will feature a simple farming simulation where players can plant seeds, water plants, harvest crops, and sell produce to collect as much profit as possible.

---

# Functionality & MVPs

In JSdewValley, users will be able to: 
- Take the role of a farmer and manage your own farm
- Move around the farm to interact with a variety of game objects:
  - Buy seeds from the store tab
  - Till the ground using a hoe
  - Plant seeds and water the plants (Bonus)
  - Harvest crops to sell for profit in the store tab
- See the total profit collected

---

# Wireframes
![Wireframes](https://i.postimg.cc/vmFcqgmT/JS-Proj-Wireframes.png)

- Nav links include links to this project's Github, my LinkedIn
- Game HUD will include in-game day counter, in-game time, total profit and other information related to the gameplay
- Character tool belt will display the character's tools in a row of grid
- Character inventory / store will include a inventory tab where it will display the crops that character has harvested. Store tab will display the crops that will be sold at the end of in-game day

---

# Technologies, Libraries, APIs

- Canvas API to render game view
- Webpack to bundle and transpile JavaScript code
- npm to manage project dependencies

---

# Implementation Timeline

- **Friday Afternoon & Weekend**: Setup project. Create index.html page with canvas, and other empty webpage elements like title and nav links. Learn how to render and animate character sprites on canvas. Create basic world, character, tool, and plant classes. Implement character movement/action animation. Also on canvas, render the farm and other game objects like plants. 
- **Monday**: Implement game logic for character activity like planting, harvesting, buying seeds, selling crops. Make sure the game can progress to the next in-game day so the plants grow/wither properly. Add additional plant classes.
- **Tuesday**: Flush out any issues from previous days. Implement menu/splash/instructions screen.
- **Wednesday**: Finish up other features of the webpage not related to the game (i.e. nav links, etc.)
- **Thursday Morning**: Deploy on GitHub pages. 

---

# Bonus Features
- Add ability to water plants and include corresponding animations
- Randomly increase/decrease crop prices every in-game day
- Add more crop varieties 