# React Native Maps Project

This project demonstrates a complex implementation of **React Native Maps** using React-Native-CLI and React Navigation. It includes multiple map features such as markers, polygons, polylines, and custom callouts with proper design. The app is designed to provide a clear and professional demonstration of how to work with maps in React Native.

## Features

- **Interactive Markers**: Multiple markers with titles and descriptions displayed via callouts.
- **Polygons & Polylines**: Custom polygons and polylines drawn on the map to demonstrate shapes and routes.
- **Region Control**: The map region is controllable and can be changed dynamically.
- **Google Maps Integration**: Google Maps is used as the map provider for enhanced visuals and reliability.
- **Custom Callouts**: Custom-styled callouts for markers with additional information.

## Getting Started

### Prerequisite

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) >= 14.x
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/riffatadnan/react-native-maps.git
    cd react-native-maps
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the project:
    ```bash
    npx react-native run-android
    npx react-native run-ios
    ```

4. Follow the instructions to open the project in your simulator or device using the Expo Go app.

### File Structure

```bash
.
├── /screens
│   ├── HomeScreen.js        # Home screen of the app
│   ├── MapScreen.js         # Map screen with complex map implementation
├── App.js                   # Main entry point for the app
├── package.json             # Project dependencies and scripts
├── README.md                # This file
└── /screenshots             # Folder for screenshots
```

## How to Use

1. Start the app from the Home Screen.
2. Click the "Go to Map" button to navigate to the map view.
3. On the map screen, interact with the various features such as markers and polygons.
4. You can move and zoom the map to explore different regions.

## Key Components

### MapView

This project utilizes the `MapView` component from `react-native-maps`. Key props include:

- **provider**: Using `PROVIDER_GOOGLE` for Google Maps.
- **region**: Dynamic region that updates on interaction.

### Markers

Markers display points of interest with titles and descriptions. Custom callouts are used to provide more information.

### Polygons & Polylines

Demonstrates drawing polygons and lines on the map, which can be used for shapes and routes.

## Dependencies

- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## Future Improvements

- **Marker Clustering**: Implement marker clustering for better performance with many markers.
- **3D Map Features**: Implement 3D maps with rotation and tilt.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.