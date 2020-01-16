Financial Product Widget
============================

A Sequra widget to get the financial products of an item

## Behaviour

In app loading, it dispatches an action to fetch the products from the API. Meanwhile, it shows a spinner (there is a fake delay of 2 secs). When the API call ends, it shows the financial product selector. When we select some option in the selector, it triggers an action listened by a saga which makes an api call to the Events API.

## Developer note
In more technical details, when the AppComponent is rendered it dispatches an action to fetch the products. It is achieved with react-hooks useEffect() hook. A saga is listening to fetch products and it's responsible to make the API call and then dispatch the proper functions in order to update the state through the reducers.

I couldn't achieve css customization, but I would do it passing a custom default options to the app component, like id's, classnames or directly React.CSSProperties that can be initialized when the widget is loaded by the shim in clients page.

I almost test everything because I like to follow a TDD method, but it is not always the right method to achieve this kind of exercises, that's another thing that delayed me in the delivery. 

You can find more information about the libraries I chose below.

## Installation & Setup

Follow this steps in order to get the app and the api running

1 - Install the React app
```
npm install
```

2 - Install & run API server: runs API on port 8080
```
cd api
npm install
npm run start
```

3 - Run the widget: runs on port 3000
```
// In root folder
npm run start
```

## Folder & file structure

The folder structure that I've thought is intended for the widget only. I did not want to make too many folders and files, I wanted to group everything with meaning and pragmatism.

    .
    ├── public                  # Compiled files
    ├── api                     # Mocked api provided by Sequra
    ├── src                     # App Source files
    ├    ├── ___test___               # app Tests Folder
    ├    ├── ___mocks___              # app mocks Folder
    ├    ├── components               # app shared components
    ├    ├── store                    # redux store folder
    ├    ├     ├── actions.ts               # redux store actions
    ├    ├     ├── reducer.ts               # redux store reducer
    ├    ├     ├── thunks.ts                # redux store thunks
    ├    ├     ├── selectors.ts             # redux store state selectors
    ├    ├     ├── types.ts                 # redux store types
    ├    ├     ├── utils.ts                 # redux store utils
    ├    ├── AppComponent.tsx               # Main app component
    ├    ├── AppController.tsx              # Main app controller
    ├    ├── index.tsx                 # Starting point file
    ├    ├── index.css                 # main css file
    ├    ├── react-app-env             # create-react-app file
    ├    ├── serviceWorker             # create-react-app file
    ├    ├── setupTests                # create-react-app file
    ├── .eslintrc.js            # eslint config file
    ├── .prettierrc.js          # prettier config file
    ├── jest.config.js          # jest config file

## Libraries

To solve the statement, I have decided to create an app using React and Typescript with create-react-app library. It's what I've been working on for the last few years and what I feel most comfortable with. For the management of the state, I have used redux as it seems to me one of the most powerful libraries of today. I wanted to make state immutable with immutablejs to match the correct architecture guidelines, and I used typesafe-actions to write the elements of the redux store. For asynchronous calls to API, I have decided to use redux-saga<br />

Although I haven't worked much with it, helps me to show you how I know to use JS generators. I also wanted to include a small management of the state & lifecycle of some componets with react-hooks<br />

For the styles, I have included the styled-components library in some components of the app, but as I was asked to be careful with the integration of the styles, I have added some customizable options through the widget initialization.<br />

For the tests I used a combination of Jest with the new react-testing-library, since I was curious to use it.<br />

For linting and 'prettify' the code, I added esling with typescript pluggin and Prettier, and also a git hook on pre-commit to run this linter before commiting files.<br />

I've also added some components that I've already developed like the Flex Containers and the spinner.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.<br />

The build is minified and the filenames include the hashes.<br />

### `npm run lint`

Runs linter<br />

## Bibliography

React Redux Widget: https://medium.com/@ryan.da.baker/how-to-build-an-embedded-widget-with-react-redux-52a26604ccca


