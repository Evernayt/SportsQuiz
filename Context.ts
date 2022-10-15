import {createContext} from 'react';
import {ISelectedAnswer} from './src/models/ISelectedAnswer';

interface IContext {
  selectedAnswers: ISelectedAnswer[];
  setSelectedAnswers: (v: ISelectedAnswer[]) => void;
}

const defaultState: IContext = {
  selectedAnswers: [],
  setSelectedAnswers: () => {},
};

const Context = createContext<IContext>(defaultState);

export default Context;
