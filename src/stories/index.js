import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import allReducers from '../reducers';
import StyledButton from '../styledComponents/myStyledButton';
import StyledHeading3 from '../styledComponents/myStyledHeading';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const store = {
  getState: () => ({
    reducers: allReducers,
  }),
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

storiesOf('App', module)
  .add('default', () => (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  ));

storiesOf('StyledButton', module)
  .add('green', () => <StyledButton onClick={action('clicked')}>Green Button</StyledButton>)
  .add('blue', () => <StyledButton primary onClick={action('clicked')}>Green Button</StyledButton>);

storiesOf('StyledHeading3', module)
  .add('Styled h3', () => <StyledHeading3 onClick={action('clicked')}>My styled h3 with colors and margins</StyledHeading3>);
