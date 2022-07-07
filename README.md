## react-native-bitlo-challenge
This repository is 	created to submit response to the technical challenge.


## Demo


https://user-images.githubusercontent.com/87723231/177726379-1ccc6e3f-d114-4393-8f44-03412b1eb2a0.mp4

https://user-images.githubusercontent.com/87723231/177726980-4e63ec3d-94aa-49a9-84b2-a8c6b67bfc8a.mp4



## Technology Used & Features
- Firebase for authentication flow
- Redux Toolkit for state management
- Expo for quick workflow
- Axios for fetch operations
- React Navigation for routing
- Provides flash messages for authentication flow
- Provides form validation using Formik and Yup
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

**Note:**
Firebase packages causes a warning related to the deprecated usage of componentWillMount lifecycle method. This warning is only related with the package and it is suppressed in App.tsx.
