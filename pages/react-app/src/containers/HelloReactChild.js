import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {increase} from '../actions'

const HelloReactChild = ({onClick, id}) => (
    <p onClick={onClick}>HelloReactChild{id}</p>
);

HelloReactChild.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
    id: state.id,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(increase()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloReactChild)
