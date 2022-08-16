import { useEffect, useState } from 'react';
import getApi from '../services/googleReq';

export default function useData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApi();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return <a>{data}</a>;
}
