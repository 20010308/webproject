import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import Trello from "./components/Trello";
import KirimChiqim from "./KirimChiqim";
import TodoList from "./TodoList";
import LessonQirq from "./LessonQirq";
import BuxgalteriaSecond from "./BuxgalteriaSecond";
import Lifecycle from "./components/Lifecycle";
import Employee from "./components/Employee";
import CoronaVirus from "./components/CoronaVirus";
import 'react-toastify/dist/ReactToastify.css';
import Students from "./Students";
import Hooks from "./components/Hooks"
import Routing from "./components/Routing";
import RegistrRouting from "./RegistrRouting";
import "animate.css/animate.css"
import HooksTask from "./HooksTask";
import Javascript from "./components/javascript";

ReactDOM.render(
  <React.StrictMode>
    <RegistrRouting/>
  </React.StrictMode>,
  document.getElementById('root')
);
