import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {
  Marker,
  Polygon,
  Polyline,
  Callout,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const markers = [
    {
      id: 1,
      title: 'Location 1',
      description: 'This is marker 1',
      coordinates: {latitude: 37.78825, longitude: -122.4324},
    },
    {
      id: 2,
      title: 'Location 2',
      description: 'This is marker 2',
      coordinates: {latitude: 37.75825, longitude: -122.4624},
    },
  ];

  const polygonCoordinates = [
    {latitude: 37.8025259, longitude: -122.4351431},
    {latitude: 37.7896386, longitude: -122.421646},
    {latitude: 37.7665248, longitude: -122.4161628},
    {latitude: 37.7734153, longitude: -122.4577787},
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}>
            <Callout>
              <Text>{marker.title}</Text>
              <Text>{marker.description}</Text>
            </Callout>
          </Marker>
        ))}

        <Polygon
          coordinates={polygonCoordinates}
          strokeColor="#000"
          fillColor="rgba(255,0,0,0.5)"
          strokeWidth={2}
        />

        <Polyline
          coordinates={polygonCoordinates}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
