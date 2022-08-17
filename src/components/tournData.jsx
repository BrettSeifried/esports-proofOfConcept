import getApiData from '../services/semanticUi';

export default function TournamentStats() {
  const summaryData = getApiData();
  console.log(summaryData);
  return (
    <>
      <h1>Place holder stats</h1>
      <a>{summaryData}</a>
    </>
  );
}
