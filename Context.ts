import {createContext} from 'react';
import {ISelectedAnswer} from './src/models/ISelectedAnswer';

interface IContext {
  selectedAnswers: ISelectedAnswer[];
  setSelectedAnswers: (v: ISelectedAnswer[]) => void;
  reset: boolean;
  setReset: (v: any) => void;
}

const defaultState: IContext = {
  selectedAnswers: [],
  setSelectedAnswers: () => {},
  reset: false,
  setReset: () => {},
};

const Context = createContext<IContext>(defaultState);

export default Context;
