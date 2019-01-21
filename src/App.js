import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import messages from './messages/messages';
import './App.css';
import Header from './components/Header';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import HomeScreen from './components/HomeScreen';
import reqAuth from './hoc/reqAuth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'it-IT',
    };
    this.setLocaleEnglish = this.setLocaleEnglish.bind(this);
    this.setLocaleItalian = this.setLocaleItalian.bind(this);
  }

  setLocaleEnglish() {
    this.setState({ locale: 'en-GB' });
  }

  setLocaleItalian() {
    this.setState({ locale: 'it-IT' });
  }

  render() {
    const { locale } = this.state;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="App">
          <Header
            setEng={this.setLocaleEnglish}
            setIta={this.setLocaleItalian}
          />
          <Container fluid>
            <Row>
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/profile/:id" component={reqAuth(Profile)} />
              </Switch>
            </Row>
          </Container>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
