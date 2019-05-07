# App Shell 
This React Native shell contains:
- Expo (for quick demos)
- React Navigation
- Native Base (Component Library)
- Redux (state management)
- Redux-Sagas (for more complicated state changes)

## Prerequisites
- latest LTS node
- install the expo cli (from expo.io)
- install the expo client on your phone

## Running
```
expo start
```
or 
```
yarn start
```

## Structure
`/assets/` - Images and Fonts
`/src/` - Source code
`/src/components/` - 'Dumb' components, used by screens
`/src/config/` - Configuration
`/src/navigation/` - Navigation setup
`/src/screens/` - 'Smart' components, connected to redux
`/src/services/` - 'Duck' style services with action creator, reducer, saga, and service
`/src/theme/` - Native Base theme
