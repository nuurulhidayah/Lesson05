import React from 'react';
import {ScrollView, Text} from 'react-native';
import Movies from './Movies.js';
import Boats from './Boats';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises{'\n'}</Text>
      <Movies />
      <Boats />
    </ScrollView>
  );
};

export default App;
