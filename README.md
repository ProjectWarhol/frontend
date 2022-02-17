# Project Warhol – Frontend

This is the Project Warhol mobile application

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 

- [NodeJS – Please use the LTS 16.x.x](https://nodejs.dev/)

- [Xcode](https://developer.apple.com/xcode/)

- [Android Studio](https://developer.android.com/studio)

- [Ganache](https://trufflesuite.com/ganache/)

### Installing

#### Frontend

1. Clone this repository
2. install dependencies with
    npm install --legacy-peer-deps
3. you may get prompted to install the Expo tools globally, when you get a permission error, run:
    sudo npm install --unsafe-perm -g expo-cli
4. run
    npm start

#### Blockchain

1. Install truffle globally:

    ```zsh
    yarn global add truffle
    ```

2. Install project dependencies:

    ```zsh
    cd path/to/your/project
    yarn
    ```

3. Setup environment variables:

    - Duplicate `sample.env`

    - Rename it to `.env`

    - Retrieve Alchemy IDs from [Alchemy](https://dashboard.alchemyapi.io/) an fill them in to the respective field

    - Retrieve your [seed phrase](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) from MetaMask Wallet and fill it into the `MNENOMIC` field

4. Add the polygon blockchains to you MetaMask Wallet:

    - Please refer to the Polygon [documentation](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/)

5. Get some test tokens:

    - Go to [Polygon Faucet](https://faucet.polygon.technology/)

    - Choose Mumbai

    - Paste in your MetaMask address

## Development

### Frontend

Coming soon...

### Smart Contracts

The development of the Smart Contracts is separated from the frontend development.

Smart Contracts are located in the `contracts` folder and the files need to be in CamelCase notation (e.g `PetAdoption.sol`)

In the solidity files, add the following lines at the top to configure the compiler and set a license:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12 <0.9.0;
```

To check if these files can be compiled, use:

```zsh
yarn compile
```

To deploy them to the different environments, use:

- Local development (make sure that Ganache is running)

    ```zsh
    yarn mDev
    ```

- Online development (alchemy setup)

    ```zsh
    yarn mOnDev
    ```

## Running tests

### React Native

Coming soon...

### Smart Contracts

To test all Smart Contracts, run:

```zsh
yarn test
```

## Deployment

Coming soon...

## Authors

- **Julian** - Frontend Developer

- **Takahiro** - Blockchain Engineer

- **Maurice** - Blockchain Engineer

## License

This project is licensed under the [?](LICENSE)
