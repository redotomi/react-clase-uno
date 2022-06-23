const nombre = 'Julián';

const elemento = (
  <input 
    onChange={(ev) => {
      console.log(ev.target.value);
    }}
  />
);

const app = document.getElementById('react-app');

ReactDOM.render(elemento, app);
