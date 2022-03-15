# The Urban Footprint Frontend Code Test

Thank you for your interest in a Software Engineer position with Urban Footprint!

This exercise is designed to test your knowledge of Javascript and
React.  While it does incorporate use of a Mapbox component, prior knowledge of
Mapbox shouldn't be necessary in order to produce a solution.

This app was scaffolded using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and uses a React wrapper for Mapbox called [react-mapbox-gl](https://visgl.github.io/react-map-gl/).

The initial state of the app is a fullscreen map with a series of map pins displayed on it, and a FILTERS panel in the upper right corner.

## Goal
Work on the Feature Requirements below for the FILTERS panel. You're not likely to complete all requirements in the short amount of time we have. Just go through them in order and focus on good, working, well-factored code for the requriements you do complete. Share your screen and review what you have with the interviewer when the time is up.

## FILTER Panel Feature Requirements
1. When the user types text into the CITY NAME input, only cities whose `name` property contains the input value substring should be displayed on the map.
   1. Ignore whitespace at the start and end of the input value.
   2. Upper- and lowercase letters are treated the same when matching.
2. Use the value of the BOUNDING BOX input to determine the lengths of the sides of the rendered `<BoundingBox/>` component.
   1. Display only cities whose coordinates are inside the bounding box.
   2. Center the bounding box on the "centroid" of the set of all cities. A centroid is "the point whose coordinates are the mean values of the coordinates of the points of the set".

A working implementation of the solution can be seen [here](https://calthorpeanalytics.github.io/uf-fe-takehome-solution/) (note that the UI may look slightly different).
1. As text is typed in the CITY NAME filter, first 'd' hides all but 5 cities; typing 'de' shows Denver or Philadelphia, then 'den' shows only Denver.
2. As a smaller number is entered into the LENGTH input, the size of the bounding square decreases and cities are filtered out.

## Running the App
If you need to, install Node and npm: [download](https://nodejs.org/en/download/) or use [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).

```
git clone git@github.com:CalthorpeAnalytics/uf-fe-codetest.git
cd uf-fe-codetest
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to load the app in the browser.

The application _should_ "hot reload" when you edit a file and save it. If in doubt, reload the page.
