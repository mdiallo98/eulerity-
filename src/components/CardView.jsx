import React from 'react';

function CardView() {
  let { id } = useParams();
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });

    setIsLoading(false);
  }, [id]);
  return <div>CardView</div>;
}

export default CardView;
