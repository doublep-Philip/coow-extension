# coow Extension
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

> coow is a chrome extension wallet for the RIZON Network.

## Build

From the root folder run the following commands
```sh
yarn install
yarn build
``` 
Go to `chrome://extensions/` in google chrome and ensure that "developer mode" is turned on in the top right corner.

Click "load unpacked" in the top left corner and select the `packages/extension/prod` folder.

You should then be able to see the extension in `chrome://extensions/` and be able to open the extension in the browser.
