import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import LostCitiesGame from './LostCitiesGame';

/*
  Here we specify which state needs to be made avaialble to the component
  our state.posts and state.comments will be available via this.props.posts and this.props.comments
*/

const mapStateToProps = (state) => ({
    deck: state.deck,
    players: state.players,
    turn: state.turn,
    alert: state.alert,
    discarded: state.discarded,
    action: state.action
})

/*
  This will bind our actions to dispatch (make the fire-able)
  and make the actions available via props
*/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

/*
  Here we create an <App/> component which is just our <Main/> component with it's props
  populated with our actions and our state
  We're injecting the data at the top level and passing it down, but you can connect() any component to make the actions and the store available to you.
*/

const App = connect(mapStateToProps, mapDispatchToProps)(LostCitiesGame);

export default App;
