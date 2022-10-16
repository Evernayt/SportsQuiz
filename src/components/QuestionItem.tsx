import {FC, useContext, useState, useEffect, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IQuestion} from '../models/IQuestion';
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Context from '../../Context';
import {ISelectedAnswer} from '../models/ISelectedAnswer';
import {COLORS} from '../constants/theme';
import {IAnswer} from '../models/IAnswer';

interface QuestionItemProps {
  question: IQuestion;
}

const QuestionItem: FC<QuestionItemProps> = ({question}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);

  const {selectedAnswers, setSelectedAnswers, reset} = useContext(Context);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [reset]);

  const selectAnswer = (answer: IAnswer) => {
    setSelectedAnswer(answer);

    let selectedAnswersClone: ISelectedAnswer[] = [...selectedAnswers];
    selectedAnswersClone = selectedAnswersClone.map(selectedAnswer =>
      selectedAnswer.questionId == question.id
        ? {...selectedAnswer, value: answer.value}
        : selectedAnswer,
    );
    setSelectedAnswers(selectedAnswersClone);
  };

  return (
    <View>
      <Text
        style={styles.question}>{`${question.id}. ${question.question}`}</Text>
      {question.answers.map((answer, i) => (
        <RadioButton labelHorizontal={true} key={i}>
          <RadioButtonInput
            obj={answer}
            index={i}
            isSelected={selectedAnswer?.id === answer.id}
            onPress={() => selectAnswer(answer)}
            buttonInnerColor={COLORS.primary}
            buttonOuterColor={
              selectedAnswer?.id === answer.id
                ? COLORS.primary
                : COLORS.secondary
            }
            buttonWrapStyle={{marginLeft: 10}}
          />
          <RadioButtonLabel
            obj={answer}
            index={i}
            labelHorizontal={true}
            onPress={() => selectAnswer(answer)}
          />
        </RadioButton>
      ))}
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
