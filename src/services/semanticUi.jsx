import axios from 'axios';

export default function getApiData() {
  axios
    .get('https://sheet.best/api/sheets/b1454f35-1bb1-4e30-aa69-d8ce37cca0f8')
    .then((response) => {
      console.log(response);
    });
}
