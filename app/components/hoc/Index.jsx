import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import { Header, HeaderTitle } from 'App/components/styled/Header.jsx';
import { Info, InfoStat } from 'App/components/styled/Index.jsx';

let Index = ({ location, todos, range }) => {
  const todoCompletedCount = todos.filter(todo => todo.done).length;

  return (
    <ScrollView height="calc(100vh - 50px)">
      <Header style={{ padding: '0 1em' }}>
        <HeaderTitle>Xanadu</HeaderTitle>
      </Header>

      <ScrollView style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0em 1em' }} height="calc(100vh - 114px)">
        <Info>
          <i className="icon-location" />
          <InfoStat>{ ` ${Math.floor(location.accuracy).toLocaleString('us')} ` }</InfoStat>
          <span>Meters</span>
        </Info>

        <Info>
          <i className="icon-search" />
          <InfoStat>{ ` ${range.toLocaleString('us')} ` }</InfoStat>
          <span>Meters</span>
        </Info>

        <Info>
          <i className="icon-circle-check" />
          <InfoStat>{ ` ${todoCompletedCount} / ${todos.length}` }</InfoStat>
          <span>{` Task${todoCompletedCount > 1 ? 's' : ''} Completed`}</span>
        </Info>
      </ScrollView>
    </ScrollView>
  );
};

Index.propTypes = {
  location: PropTypes.shape({}).isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  range: PropTypes.number.isRequired,
};

Index = connect(state => ({
  location: state.location,
  todos: state.todo,
  range: state.range,
}), null)(Index);

module.exports = Index;
