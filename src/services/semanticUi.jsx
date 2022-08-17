import axios from 'axios';

export default async function getApiData() {
  const response = await axios.get(
    'https://sheet.best/api/sheets/b1454f35-1bb1-4e30-aa69-d8ce37cca0f8'
  );
  return response;
}
