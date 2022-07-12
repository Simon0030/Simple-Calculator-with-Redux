import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header';
import Form from './components/Form';



function App() {

  return (
    <Fragment>
      <Header />
      <Form />
      <Counter />
    </Fragment>
  );
}

export default App;
