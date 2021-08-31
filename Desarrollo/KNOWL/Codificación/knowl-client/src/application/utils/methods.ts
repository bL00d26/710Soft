// import { Lecture } from "../store/lectures/interfaces/lecture.interface";
import { TimeFormat } from "./enums";
import moment from "moment";
export const getTokenHeader = () => {
  return {
    headers: {
      "access-token": localStorage.getItem("token"),
    },
  };
};

// export const sortByDate = (array: Lecture[]) =>
//   array.sort((a, b) => moment(a.date).diff(moment(b.date)));
