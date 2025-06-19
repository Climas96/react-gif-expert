import PropTypes from 'prop-types';

export const GifItem = ({ id, title, url }) => {
  //   console.log({ title, url, id });
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.proptypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
