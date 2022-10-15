import {Image, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants/theme';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {QUIZ_DONE_ROUTE, QUIZ_ROUTE} from '../constants/routes';
import {Button, QuestionItem} from '../components';
import {useContext} from 'react';
import Context from '../../Context';

type Props = NativeStackScreenProps<RootStackParamList, typeof QUIZ_ROUTE>;

const Quiz = ({route, navigation}: Props) => {
  const {quiz} = route.params;
  const {selectedAnswers} = useContext(Context);

  const quizDone = () => {
    const answersCount = selectedAnswers.length;
    const correctlyAnswers = selectedAnswers.reduce(
      (acc, obj) => (obj.value === 1 ? acc + obj.value : acc + 0),
      0,
    );
    const wrongAnswers = answersCount - correctlyAnswers;

    navigation.navigate(QUIZ_DONE_ROUTE, {
      answersCount,
      correctlyAnswers,
      wrongAnswers,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={quiz.image} />
        <Text style={styles.title}>{quiz.name}</Text>
        {quiz.questions.map(question => (
          <QuestionItem question={question} key={question.id} />
        ))}
        <Button containerStyle={styles.button} text="Done" onPress={quizDone} />
      </ScrollView>
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
  title: {
    textAlign: 'center',
    color: COLORS.primaryText,
    paddingTop: 12,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    marginTop: 12,
  },
});

export default Quiz;
