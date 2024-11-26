// import { useState } from 'react';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Stepper from './components/Stepper/Stepper';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div>
        <h3 className={styles.title}>結帳</h3>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Stepper className={styles.left} />
          </div>
          <div
            className={styles.right}
            style={{ border: '1px solid black', width: '100%' }}
          >
            container 2
          </div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
