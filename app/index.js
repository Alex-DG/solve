import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene, Tabs, Lightbox } from 'react-native-router-flux';

import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './screens/HomeScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ChatScreen from './screens/ChatScreen';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>;
};

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Tabs
              tabBarStyle={{ backgroundColor: 'white' }}
              key="tabs"
              lazy
              showLabel
              tabBarPosition="bottom"
              swipeEnabled={true}
            >
              <Scene
                key="tab1"
                title="Home"
                icon={TabIcon}
                hideNavBar={true}
                component={HomeScreen}
                initial={true}
              />

              <Scene
                key="tab2"
                title="Resources"
                icon={TabIcon}
                hideNavBar={true}
                component={ResourcesScreen}
              />

              <Scene
                key="tab3"
                title="Chat"
                icon={TabIcon}
                hideNavBar={true}
                component={ChatScreen}
              />

              <Scene
                key="tab4"
                title="News"
                icon={TabIcon}
                hideNavBar={true}
                component={NewsScreen}
              />

              <Scene
                key="tab5"
                title="Profile"
                icon={TabIcon}
                hideNavBar={true}
                component={ProfileScreen}
              />
            </Tabs>
          </Scene>
        </Lightbox>
      </Router>
    );
  }
}
