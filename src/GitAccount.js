import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchAccount from './fetchAccount';
import { getAccountError, getAccountLoading, getAccountSuccess } from './reducer';

class GitAccount extends Component {
  componentDidMount() {
    console.log(`${Date()} 5555555555>>> componentDidMount props: ` + JSON.stringify(this.props));
    console.log(`${Date()} 5555555555>>> componentDidMount state: ` + JSON.stringify(this.state));
    console.log(`${Date()} 5555555555>>> componentDidMount initiates the api call fetchAccount.`);
    this.props.fetchAccount('google');
  }
  render() {
    console.log(`${Date()} 4444444444>>> render props: ` + JSON.stringify(this.props));
    console.log(`${Date()} 4444444444>>> render state: ` + JSON.stringify(this.state));
    const { account } = this.props;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(account)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  }
});

// Map the state of the redux store to the component props.
const mapStateToProps = state => {
  console.log(`${Date()} 3333333333>>> mapStateToProps state: ` + JSON.stringify(state));
  return {
    loading: getAccountLoading(state),
    account: getAccountSuccess(state),
    error: getAccountError(state),
  };
};

// Map the dispatched actions to the component props.
// This makes the function call 'this.props.accountInfo('google')' in componentDidMount possible.
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccount: fetchAccount
}, dispatch)

// currying function https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400
export default connect(mapStateToProps, mapDispatchToProps)(GitAccount);
