import React from 'react';
import { Container } from 'components';
import { HeaderActions } from "./HeaderActions";
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import 'modules/header/header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Logo/>
          <HeaderActions/>
        </div>
      </Container>
    </header>
  )
}
