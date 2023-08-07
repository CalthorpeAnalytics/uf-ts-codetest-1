# The Urban Footprint Fullstack Code Test

Thank you for your interest in a Software Engineering position with UrbanFootprint!

This exercise is designed to test your knowledge of typescript by presenting a "simple" working application that lacks typesafety even though typescript is installed. 

While the React app uses a Mapbox component, prior knowledge of Mapbox isn't central to work on this problem. But understanding basic geographical ploting (eg longitudal and latitude) is necessary.

This app was scaffolded using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and uses a React wrapper for Mapbox called [react-map-gl](https://visgl.github.io/react-map-gl/).

## Goal: Measuring success

This application is functionally complete. You have 45 minutes to either implement or document (ie place "TODO") areas of improvement. The criteria is as follows:

1. Accuracy: How accurate is the typing information in the codebase?
2. Safety: How likely is a future developer to use a component incorrectly?
3. Performance: How will this application handle more data and will the user notice any churn?
4. Modularity: Which parts of code should be further abstracted, and how well does the design reflect the prior mentioned criteria.
5. Proportional: At the end we will ask you to weigh in on the tradeoffs for each of your proposed changes.

This is a pairing exercise! That means we want you to ask questions to clarify how things are expected to work and talk aloud as you consider different solutions. The interviewers will help point out syntax errors and give you hints if you get stuck. You are free to use the internet to look up APIs.


### What this app does
1. There is an API endpoint to request city data  
   a. Currently an untyped Express server that serves up a file
2. The clients calls the endpoint and uses the data to:  
   a. render an alphabetically sorted list of cities in the Panel component  
   b. render map pins/markers in the correct locations (using provided Pin component)
3. A text input field is at the top of the sidebar to filter the cities displayed
   a. any city that matches the substring (case insensitive) should be displayed
   b. both sidebar list and map markers should be filtered
4. Clicking on the sidebar City list item will zoom to that city on the map
   a. See `react-map-gl` for an explanation [Controlled Map example](https://visgl.github.io/react-map-gl/docs/get-started/state-management#controlled-map)

## Getting started

If you need to, install Node and npm: [download](https://nodejs.org/en/download/) or use [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).

### Clone the repo

```
$ git clone git@github.com:CalthorpeAnalytics/uf-ts-codetest.git
```

### Install Dependencies

```
$ cd uf-fs-codetest
$ ./install_deps.sh
```

### Run the app

In a terminal, run:

```
$ npm start
```


Open [http://localhost:3000](http://localhost:3000) to load the app in the browser.

The application _should_ "hot reload" when you edit a file and save it. If in doubt, reload the page.
