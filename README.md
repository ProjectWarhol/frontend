# Unos – Frontend

This is the Unos mobile application.
The repository contains the frontend using react-native.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [NodeJS – Please use the LTS 16.x.x](https://nodejs.dev/)

- [Xcode](https://developer.apple.com/xcode/)

- [Android Studio](https://developer.android.com/studio)

- [Expo](https://docs.expo.dev/)

### Install and setup the repository

1. Clone this repository
2. install dependencies with
   yarn add --legacy-peer-deps
3. you may get prompted to install the Expo tools globally, when you get a permission error, run:
   sudo yarn add --unsafe-perm -g expo-cli
4. install ngrok with
   yarn add ngrok
5. open up the backend in a different terminal and run npm run dev (to learn how to setup the backend, read the README.md from the backend  repository -> https://github.com/ProjectWarhol/backend/blob/main/README.md)
6. open up another terminal on the frontend. Then type: "ngrok http 3000". Copy the resulting link and paste it into the URL variable in the .env file.
7. on a different terminal on frontend run:
   yarn start
8. now open up the localhost that is shown to you in the terminal by using cmd+right click
9. in the browser open up the application

## Running tests

Tests can be found in the __test__ folder.
Tests are run by using yarn test.

## Deployment

Coming soon...

## Documentation

A documentation of this project can be found in the https://www.notion.so/frontend-f08e10f1e0fd4fecb5300f9f45e52f3f for the frontend. It contains several sub-folders for the individual parts of the frontend.

## Recommended VS-Code Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Authors

- **Julian** - Frontend Developer

- **Omar** - Fullstack Developer

## License

This project is licensed under the [?](LICENSE)
