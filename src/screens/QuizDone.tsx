import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from '../components';
import {bronze_medal, gold_medal, silver_medal} from '../constants/images';
import {COLORS} from '../constants/theme';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {HOME_ROUTE, QUIZ_DONE_ROUTE} from '../constants/routes';
import {ButtonVarians} from '../components/UI/Button';
import {useContext} from 'react';
import Context from '../../Context';

type Props = NativeStackScreenProps<RootStackParamList, typeof QUIZ_DONE_ROUTE>;

const QuizDone = ({route, navigation}: Props) => {
  const {answersCount, correctlyAnswers, wrongAnswers} = route.params;

  const {setSelectedAnswers} = useContext(Context);

  const calcPercent = (): number => {
    const coef = answersCount / correctlyAnswers;
    return 100 / coef;
  };

  const getMedal = (): ImageSourcePropType => {
    const correctlyAnswersPercent = calcPercent();
    if (correctlyAnswersPercent === 100) {
      return gold_medal;
    } else if (correctlyAnswersPercent > 40) {
      return silver_medal;
    } else {
      return bronze_medal;
    }
  };

  const getMessage = (): string => {
    const correctlyAnswersPercent = calcPercent();
    if (correctlyAnswersPercent === 100) {
      return 'Excellent!';
    } else if (correctlyAnswersPercent > 40) {
      return 'Not bad';
    } else {
      return 'It is necessary to improve knowledge';
    }
  };

  const tryAgain = () => {
    setSelectedAnswers([]);
    navigation.goBack();
  };

  const backToQuizzes = () => {
    navigation.navigate(HOME_ROUTE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={getMedal()} />
      <Text style={styles.message}>{getMessage()}</Text>
      <Text style={styles.correctlyAnswers}>Correctly: {correctlyAnswers}</Text>
      <Text style={styles.wrongAnswers}>Wrong: {wrongAnswers}</Text>
      <View style={styles.buttonsContainer}>
        <Button text="Try again" onPress={tryAgain} />
        <Button
          text="Back to quizzes"
          variant={ButtonVarians.secondary}
          containerStyle={{marginTop: 8}}
          onPress={backToQuizzes}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 24,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  message: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.primaryText,
    marginVertical: 12,
  },
  correctlyAnswers: {
    textAlign: 'center',
    fontSize: 24,
    color: COLORS.success,
  },
  wrongAnswers: {
    textAlign: 'center',
    fontSize: 24,
    color: COLORS.danger,
  },
  buttonsContainer: {
    marginBottom: 0,
    marginTop: 'auto',
  },
});

export default QuizDone;
