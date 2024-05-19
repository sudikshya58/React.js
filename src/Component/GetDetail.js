import React, { useEffect, useState } from 'react';
import { getUser } from '../api/APIS';

export const GetDetail = () => {
  const [getDetail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getUser();
        setDetail(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {getDetail ? (
        <div>{JSON.stringify(getDetail)}</div> 
      ) : (
        <div>No details available</div>
      )}
    </div>
  );
}
