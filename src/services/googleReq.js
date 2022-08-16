import * as React from 'react';
import useGoogleSheets from 'use-google-sheets';

// const sheetsOptions = [{ id: 'Sheet1', headerRowIndex: 1 }, { id: 'Sheet2' }];

export default function GetApi() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API,
    sheetId: process.env.REACT_APP_GOOGLE_ID,
    // sheetsOptions,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
