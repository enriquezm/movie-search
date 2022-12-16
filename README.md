# Movie Search App

Fetches data from api which you can search through using search bar.

Off of project ideas listed [here](https://medium.com/gitconnected/9-projects-you-can-do-to-become-a-front-end-master-in-2023-a4389153148c)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project is live [here](https://marvelous-capybara-5bb320.netlify.app/)

## Notes/learnings while developing this project

### Number of props for a given component

There was a case where I had a component that needed multiple props passed in. I wasn't sure if 3 was too many and after doing some searching, what i learned is: 3 is fine, 5 is a code smell, and more than that is asking for it.

One way I've learned to consolidate is to group like props together into objects, that way objects can be passed instead of each individual prop.

Came across solution [here](https://stackoverflow.com/questions/64386560/how-many-props-is-recommended-in-a-react-component#:~:text=I%20follow%20this%20rule%20of,clear%20and%20easy%20to%20maintain)

### Fetching data from API

Wasn't sure how to properly fetch dynamic data from an api within a react app. At first, I tried implemented a basic fetch within the functional component and needed to use an async call. Problem with this is that the functional component itself would have to be async. This led to more issues because I was now getting an error mentioning passing in an object as a component's child.

After looking into this more, realized functional components handle "side effects" using hooks. Specifically the `useEffect` hook. After updating to using the hook instead, and removing the `async` keyword on the functional component, the app worked as expected.

Now, to properly set up fetching with error handling, I had to look into more solutions but eventually found one that made the most sense to me, which I was able to implement by following the walk through [here](https://blog.logrocket.com/modern-api-data-fetching-methods-react/)

I chose this solution because it:

1. used more modern async/await, which allowed for cleaner code
2. try, catch for error handling
3. leveraged `useState` hook to control different rendering states

### onKeyDown vs onKeyPress

Learned that `onKeyPress` event was deprecated so replaced it by using `onKeyDown` and the `e.keyCode` property to detect if the "Enter" button was pressed on input.

### Hiding API key

The api key should always be hidden and not committed out to the public. I learned that even storing the api key in a `.env` and then referencing that value in your frontend code is not safe. Anyone could inspect code via dev tools and find the api key easily.

Since this is just a personal project and the api in use is free, I chose to continue referencing in my frontend code.

If this were a bigger project, I would create a proxy, and have that proxy retrieve the data needed, using the api key, and then have the client retrieve the needed data through that proxy. That's outside the scope of this small project, but maybe I'll have a project that focuses just on that piece.

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