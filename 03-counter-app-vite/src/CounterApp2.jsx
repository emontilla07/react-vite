import PropTypes from 'prop-types';

const CounterApp2 = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
        </>
    );
}

CounterApp2.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp2.defaultProps = {
    value: 0,
};

export {
    CounterApp2,
};