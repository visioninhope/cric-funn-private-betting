# Getting Started with Cric-Funn

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

#### Deployment

The App has been deployed using firebase. Check it out here
https://cric-funn.web.app

##### TODO:
1. Need to delete all unused resources
2. Make a new cric-funn logo
3. Make eslint for src folder
4. Make a proper flow for syncing matches into db so won't have to do code change at the beginning of league
5. Making no matches component
6. Change matches logic - old logic - fetch matches from cricapi and also sync for unsettled matches: 
new logic - fetch matches from db and sync results to db on each refresh for only unsettled matches and for updating pts first check into db if the match is unsettled only then hit the cricapi
7. Change view bets and lets bet dialog ui