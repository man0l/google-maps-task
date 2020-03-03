# Google Maps and Open Street Maps Task

This is the frontend part of the project based on Angular 2.

## Explanation
I have one component - HomeComponent. It creates the reactive form by using the form builder. Once the form is submitted, the onSubmit handler is triggered and the data is fetched from the mapService object.
I have coupled the data fetching functionality in an angular service. 

`app/services/map.service.ts`

The service is responsible for fetching data and combining the observer objects using combineLatest operator for both GoogleMaps and OpenStreetMap backend endpoints.
This approach ensures us that I will recieve the data in the same time.
## Dependencies

run `npm i` to install the dependencies.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
There is one unit test located in `app\services\map.service.spec.ts`

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
