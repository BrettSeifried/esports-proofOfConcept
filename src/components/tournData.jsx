import { useEffect, useState } from 'react';
import getApiData from '../services/semanticUi';

export default function TournamentStats() {
  const [sumData, setSumData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respData = await getApiData();
      setSumData(respData.data);
    };
    fetchData();
  }, []);

  //   const { summaryData } = getApiData();
  console.log(sumData);
  return (
    <>
      <h1>Place holder stats</h1>
      <h3>{sumData}</h3>
    </>
  );
}
