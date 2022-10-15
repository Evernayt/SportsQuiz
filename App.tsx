import React, {useEffect, useState} from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import {FIREBASE_URL_KEY} from './src/constants/storage';
import {WebComponent} from './src/components';
import {Home, Quiz, QuizDone} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_ROUTE, QUIZ_DONE_ROUTE, QUIZ_ROUTE} from './src/constants/routes';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import {IQuiz} from './src/models/IQuiz';
import Context from './Context';
import {ISelectedAnswer} from './src/models/ISelectedAnswer';

export type RootStackParamList = {
  HOME_ROUTE: undefined;
  QUIZ_ROUTE: {quiz: IQuiz};
  QUIZ_DONE_ROUTE: {
    answersCount: number;
    correctlyAnswers: number;
    wrongAnswers: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [url, setUrl] = useState<string>('LOADING');
  const [selectedAnswers, setSelectedAnswers] = useState<ISelectedAnswer[]>([]);

  useEffect(() => {
    SplashScreen.hide();
    // AsyncStorage.getItem(FIREBASE_URL_KEY).then(path => {
    //   remoteConfig()
    //     .fetchAndActivate()
    //     .then(() => loadFire(path));
    // });
  }, []);

  // useEffect(() => {
  //   if (url !== 'LOADING') {
  //     SplashScreen.hide();
  //   }
  // }, [url]);

  const loadFire = (path: string | null) => {
    if (path) {
      setUrl(path);
    } else {
      const url = remoteConfig().getValue('url').asString();
      DeviceInfo.isEmulator().then(isEmulator => {
        if (!url || isEmulator) {
          setUrl('');
        } else {
          setUrl(url);
          AsyncStorage.setItem(FIREBASE_URL_KEY, url);
        }
      });
    }
  };

  const renderByUrl = () => {
    if (url === 'LOADING') {
      return null;
    } else if (url) {
      return <WebComponent url={url} disableGoBack />;
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={HOME_ROUTE}>
            <Stack.Screen name={HOME_ROUTE} component={Home} />
            {/* <Stack.Screen
              name={MATCH_TEAMS_ROUTE}
              component={MatchTeams}
              options={{headerShown: true, headerTitle: ''}}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <Context.Provider
        value={{selectedAnswers, setSelectedAnswers}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={HOME_ROUTE}>
            <Stack.Screen name={HOME_ROUTE} component={Home} />
            <Stack.Screen name={QUIZ_ROUTE} component={Quiz} />
            <Stack.Screen name={QUIZ_DONE_ROUTE} component={QuizDone} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </View>
  );
};

export default App;
