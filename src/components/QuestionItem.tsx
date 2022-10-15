import {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IQuestion} from '../models/IQuestion';
import RadioForm from 'react-native-simple-radio-button';
import Context from '../../Context';
import {ISelectedAnswer} from '../models/ISelectedAnswer';
import {COLORS} from '../constants/theme';

interface QuestionItemProps {
  question: IQuestion;
}

const QuestionItem: FC<QuestionItemProps> = ({question}) => {
  const {selectedAnswers, setSelectedAnswers} = useContext(Context);

  const selectAnswer = (value: number) => {
    let selectedAnswersClone: ISelectedAnswer[] = [...selectedAnswers];

    selectedAnswersClone = selectedAnswersClone.map(selectedAnswer =>
      selectedAnswer.questionId == question.id
        ? {...selectedAnswer, value}
        : selectedAnswer,
    );

    setSelectedAnswers(selectedAnswersClone);
  };

  return (
    <View>
      <Text
        style={styles.question}>{`${question.id}. ${question.question}`}</Text>
      <RadioForm
        radio_props={question.answers}
        initial={-1}
        onPress={value => selectAnswer(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primaryText,
    marginTop: 12,
    marginBottom: 8,
  },
});

export default QuestionItem;
