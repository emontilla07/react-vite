// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Eric',
// };

// const saludar = (a, b) => a * b;

import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <h1>Resultado = {saludar(3, 5)}</h1> */}
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      {/* <p>Soy un subtitulo</p> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: 'Eric Montilla',
  subTitle: 'No hay sub título',
  // title: 'No hay título',
};