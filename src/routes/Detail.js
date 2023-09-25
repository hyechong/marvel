import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetails(json.data.results[0]);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>👨‍🎤character details🧑‍🎤</h1>
          <div className='detail-wrapper'>
            <div className='img-wrapper'>
              <img
                src={details.thumbnail.path + '.' + details.thumbnail.extension}
                alt={details.name}
              />
            </div>
            <div className='txt-wrapper'>
              <h2>{details.name}</h2>
              {details.description === '' ? null : (
                <p>👉{details.description}</p>
              )}
              <span>🎬 Series</span>
              <ul>
                {details.series.items?.map((item) => (
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
