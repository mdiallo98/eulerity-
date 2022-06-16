import React from 'react';

function CardView() {
  let { id } = useParams();
  const [result, setResult] = useState({});

  const url = 'http://eulerity-hackathon.appspot.com/pets';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, [id]);
  return <div>CardView</div>;
}

export default CardView;
