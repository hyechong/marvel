import { Link } from 'react-router-dom';

function Character({ id, coverImg, name }) {
  const imgSrc = coverImg.path + '.' + coverImg.extension;
  return (
    <div className='character'>
      <Link to={`/character/${id}`}>
        <div className='img-wrapper'>
          <img src={imgSrc} alt={name} />
        </div>
        <h4>{name}</h4>
      </Link>
    </div>
  );
}

export default Character;
