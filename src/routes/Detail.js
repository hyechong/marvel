import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetails(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>👨‍🎤character details🧑‍🎤</h1>
          <div className='detail-wrapper'>
            <div className='img-wrapper'>
              <img
                src={
                  details[0].thumbnail.path +
                  '.' +
                  details[0].thumbnail.extension
                }
                alt={details[0].name}
              />
            </div>
            <div className='txt-wrapper'>
              <h2>{details[0].name}</h2>
              {details[0].description === '' ? null : (
                <p>👉{details[0].description}</p>
              )}
              <span>🎬 Series</span>
              <ul>
                {details[0].series.items?.map((item) => (
                  <li key={item.name}>✔️ {item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
