# The Urban Footprint Frontend Code Test

Thank you for your interest in pursuing a Software Engineer position with
Urban Footprint!

This take home test is designed to test some basic knowledge of Javascript and
React.  While it does incorporate use of a Mapbox component, prior knowledge of
Mapbox shouldn't be necessary in order to produce a solution.

This app was scaffolded using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and uses a React wrapper for Mapbox called [react-mapbox-gl](https://visgl.github.io/react-map-gl/).

The initial state of the app is a fullscreen map with a series of map pins displayed on it, and a FILTERS panel in the upper right corner.

The goal of this exercise is to implement two features in the FILTERS panel:

1. When the user types text into the CITY NAME input, only cities whose `name` property contains the input value substring should be displayed on the map.
   1. Ignore whitespace at the start and end of the input value.
   2. Upper- and lowercase letters are treated the same when matching.
2. Use the value of the BOUNDING BOX input to determine the lengths of the sides of the rendered `<BoundingBox/>` component.
   1. Only display cities contained inside the bounding box.
   2. Center the bounding box on the "centroid" of the set of all cities. A centroid is "the point whose coordinates are the mean values of the coordinates of the points of the set".

A working implementation of the solution can be seen [here](https://calthorpeanalytics.github.io/uf-fe-takehome-solution/).
1. As text is typed in the city name filter, first 'd' for Denver or Dallas, then 'de' for only Denver.
2. As the length of the sides are decreased, the size of the bounding square decreases and filters out cities.  

## Getting Started

Since the app was scaffolded with CRA, the process for installing and running in development mode is:

Install Node and npm: [download](https://nodejs.org/en/download/) or use [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).


```
git clone <path-to-repo>
cd <repo-name>
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
