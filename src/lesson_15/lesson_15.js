import {
  TaskList
} from "./components/taskList.component";
import {
  Ajax
} from "./utils/ajax";

const list = new TaskList(document.querySelector('.test'));

Ajax.get(
  'https://evening-dawn-11092.herokuapp.com/comments',
  (resp) => {
    console.log(resp);
  },
  (e) => {
    console.log(e)
  });