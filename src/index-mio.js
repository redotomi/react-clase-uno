// import { Welcome } from './components/Welcome.js';

// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.innerText)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));


/////////////////////////////TAREA 1//////////////////////////

// import { BlogPost } from './tarea/Tarea1.js'

// ReactDOM.render(<BlogPost titulo='Ardilla'
//   parrafos={'Hoy vi una ardilla.\n La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\nCreo que puede haber sido un perro, dado que en Argentina no hay ardillas.'}
//   autor={
//        {nombre: "Tomás Redondo",
//        titulo: "Programador Front End",
//        imagen: "https://avatars.githubusercontent.com/u/102332011?v=4"}
//      }
// />,
//   document.getElementById('react-app'));
  
/////////////////////////////TAREA 2//////////////////////////

// import { MatchNombre, PasswordInput, ValidationInput } from "./tarea/Tarea2.js";

// ReactDOM.render(<MatchNombre 
//   nombre='tomas'
// />, document.getElementById('react-app'));


// ReactDOM.render(<PasswordInput 
//   minLength = {6}
// />, document.getElementById('react-app'));


// ReactDOM.render(<ValidationInput
//   validation = {(value) => value? true : false}
//   minLength = {6}
// />, document.getElementById('react-app'));

/////////////////////////////TAREA 3//////////////////////////

import { UncontrolledCheckbox, CheckboxList } from "./tarea/Tarea3.js";

// ReactDOM.render(<UncontrolledCheckbox 
//   name = 'CheckBox'
//   initialValue = {true}
// />, document.getElementById('react-app'));


// ReactDOM.render(<CheckboxList
//   items={{
//     uno: false,
//     dos: true,
//     tres: false,
//   }
//   }
// />, document.getElementById('react-app'));

/////////////////////////////TAREA 4//////////////////////////

import { ControlledCheckbox, CheckboxListWithState } from "./tarea/Tarea4.js";

// ReactDOM.render(<ControlledCheckbox 
//   name = 'Checkbox'
//   value = {true}
//   onChange = {() => {alert('asdasd')} }
// />, document.getElementById('react-app'))

// ReactDOM.render(<CheckboxListWithState
//   items={{
//     uno: false,
//     dos: true,
//     tres: false,
//   }}
// />, document.getElementById('react-app'))
