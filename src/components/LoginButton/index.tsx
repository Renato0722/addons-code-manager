import * as React from 'react';

import styles from './styles.module.scss';

export class LoginButtonBase extends React.Component {
  getFxaURL() {
    const fxaConfig = process.env.REACT_APP_FXA_CONFIG;

    return `/api/v4/accounts/login/start/?config=${fxaConfig}&to=/`;
  }

  render() {
    return (
      <a href={this.getFxaURL()} className={styles.link}>
        Log in
      </a>
    );
  }
}

export default LoginButtonBase;
