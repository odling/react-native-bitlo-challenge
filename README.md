## react-native-bitlo-challenge
This repository is 	created to submit response to the technical challenge.


## Demo


## Technology Used & Features
- Redux Toolkit for state management
- Expo for quick workflow
- Axis for fetch operations
- React Navigation for routing
- Provides flash messages for authentication flow
- Dark theme support

## Code Structure
**Layout and Styling**
./constants folder includes two files,
- Layout
- Theme
There are also styled components (Box, Text, etc.), for which the styles can be overwritten, but implements the spacings, text properties and colors based on the two files above.

This way, the app should have consistent spacings and colors (from the palette) everywhere.

**Services**
There are two service classes (MarketService and UserService) which provide the necessary methods for market and user related operations. The business logic is separated from the UI logic and this helps to modularize the components.

**Hooks**
useTheme and useAuthentication are the main custom hooks used throughout the app. useTheme provides the current theme object and useAuthentication provides the current user session details.

There are also redux related custom hooks which are derived from their original to provide type support while using dispatch and selector operations.
