import { ImageSourcePropType } from "react-native";
import { IQuestion } from "./IQuestion";

export interface IQuiz {
  id: number;
  name: string;
  image: ImageSourcePropType;
  questions: IQuestion[];
}