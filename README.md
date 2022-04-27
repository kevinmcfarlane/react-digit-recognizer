# React App running Digit Recognizer (Machine Learning) in Rust WebAssembly

Uploads training and validation data sets and then displays the percentage of digits that were correctly predicted. For machine learning technical details see the pure Rust [implementation]. In this new version the file input was moved out of the Rust and into the React UI.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build:wasm`

Builds the Rust WebAssembly project. Restart the development web server after building.

[implementation]: <https://github.com/kevinmcfarlane/rust-digit-recognizer>