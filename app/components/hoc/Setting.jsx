import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { rangeAsync } from 'App/redux/actions/range.js';

import ScrollView from 'App/components/styled/ScrollView.jsx';
import { Header, HeaderTitle } from 'App/components/styled/Header.jsx';
import { Setting, SettingRange, SettingButton } from 'App/components/styled/Setting.jsx';

let SettingComponent = ({ range, update }) => (
  <ScrollView height="calc(100vh - 50px)">
    <Header style={{ padding: '0 1em' }}>
      <HeaderTitle>Setting</HeaderTitle>
    </Header>

    <ScrollView style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} height="calc(100vh - 114px)">
      <Setting>
        <SettingButton onTouchStart={() => update((range - 25) > 0 ? (range - 25) : 25)}>
          <i className="icon-circle-minus" />
        </SettingButton>

        <SettingRange>
          <span>{range.toLocaleString('us')}</span>
          <small style={{ fontSize: '0.4em' }}>Meters</small>
        </SettingRange>

        <SettingButton onTouchStart={() => update((range + 25) > 1000 ? 1000 : range + 25)}>
          <i className="icon-circle-plus" />
        </SettingButton>
      </Setting>
    </ScrollView>
  </ScrollView>
);

SettingComponent.propTypes = {
  range: PropTypes.number,
  update: PropTypes.func.isRequired,
};

SettingComponent.defaultProps = {
  range: 100,
};

SettingComponent = connect(state => ({
  range: state.range,
}), dispatch => ({
  update(r) {
    dispatch(rangeAsync(r));
  },
}))(SettingComponent);

module.exports = SettingComponent;
