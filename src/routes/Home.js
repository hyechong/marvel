import { useEffect, useState } from 'react';
import Character from '../components/Character';

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getCharacters();
  }, []); // 코드를 한 번만 실행
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>👨‍🎤marvel characters🧑‍🎤</h1>
          <div className='character-wrapper'>
            {characters.map((character) => (
              <Character
                key={character.id}
                id={character.id}
                coverImg={character.thumbnail}
                name={character.name}
                desc={character.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} // React.js에서 map 사용시 고유한 key 값을 줘야한다.(map안에서 component들을 render할 때 사용)

export default Home;
