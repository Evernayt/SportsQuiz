import {useNavigation} from '@react-navigation/native';
import {FC, useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/theme';
import {IQuiz} from '../models/IQuiz';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {QUIZ_ROUTE} from '../constants/routes';
import Context from '../../Context';
import {ISelectedAnswer} from '../models/ISelectedAnswer';

type Props = NativeStackNavigationProp<RootStackParamList, typeof QUIZ_ROUTE>;

interface QuizeItemProps {
  quiz: IQuiz;
}

const QuizeItem: FC<QuizeItemProps> = ({quiz}) => {
  const {setSelectedAnswers} = useContext(Context);

  const navigation = useNavigation<Props>();

  const openQuiz = () => {
    const answers: ISelectedAnswer[] = [];
    for (let index = 0; index < quiz.questions.length; index++) {
      const question = quiz.questions[index];
      answers.push({questionId: question.id, value: -1});
    }
    setSelectedAnswers(answers);

    navigation.navigate(QUIZ_ROUTE, {quiz});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openQuiz}>
      <Image style={styles.image} source={quiz.image} />
      <Text style={styles.title}>{quiz.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
});

export default QuizeItem;
