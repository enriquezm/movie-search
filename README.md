# Movie Search App

Fetches data from api which you can filter through.

Off of project ideas listed at: https://medium.com/gitconnected/9-projects-you-can-do-to-become-a-front-end-master-in-2023-a4389153148c

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Notes/learnings while developing this project

### Number of props for a given component

There was a case where I had a component that needed multiple props passed in. I wasn't sure if 3 was too many and after doing some searching, what i learned is: 3 is fine, 5 is a code smell, and more than that is asking for it.

One way I've learned to consolidate is to group like props together into objects, that way objects can be passed instead of each individual prop.

Came across this at: https://stackoverflow.com/questions/64386560/how-many-props-is-recommended-in-a-react-component#:~:text=I%20follow%20this%20rule%20of,clear%20and%20easy%20to%20maintain.