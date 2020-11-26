import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriveCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import Menu from './components/Menu';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';

const App = (props) => {
  return (
    <div className="d-flex">
      <Menu />

      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route
          exact
          path="/id-card"
          render={(props) => (
            <IdCard
              lastName="Doe"
              firstName="John"
              country= 'USA'
              isStudent = 'Student'
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
          )}
        />
        <Route
          exact
          path="/greetings"
          render={(props) => <Greetings lang="de">Ludwig</Greetings>}
        />
        <Route
          exact
          path="/greetings"
          render={(props) => <Greetings lang="en">John</Greetings>}
        />
        <Route
          exact
          path="/random-number"
          render={(props) => <Random min={1} max={1000} />}
        />
        <Route
          exact
          path="/box-color"
          render={(props) => <BoxColor r={0} g={100} b={255} />}
        />
        <Route
          exact
          path="/credit-card"
          render={(props) => (
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
          )}
        />
        <Route exact path="/rating" render={(props) => <Rating>1.5</Rating>} />
        <Route
          exact
          path="/drive-card"
          render={(props) => (
            <DriverCard
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: 'Toyota Corolla Altis',
                licensePlate: 'CO42DE',
              }}
            />
          )}
        />
        <Route exact path="/likes" render={(props) => <LikeButton />} />
        <Route
          exact
          path="/picture"
          render={(props) => (
            <ClickablePicture
              img="/img/persons/maxence.png"
              imgClicked="/img/persons/maxence-glasses.png"
            />
          )}
        />
        <Route exact path="/dice" render={(props) => <Dice />} />

        <Route
          exact
          path="/carousel"
          render={(props) => (
            <Carousel
              imgs={[
                'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg',
              ]}
            />
          )}
        />
        <Route exact path='/numbers-table' render={() => <NumbersTable limit={Math.floor(Math.random() * 50)} />} />
        <Route exact path='/facebook' render={() => <FaceBook />} />
        <Route exact path='/quiz' component={Quiz} />
      </Switch>
    </div>
  );
};

export default App;
