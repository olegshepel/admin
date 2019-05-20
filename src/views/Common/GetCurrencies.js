import axios from 'axios';
const URL_CURRENCIES = '/api/currencies/';

export default function getCurrencies() {
  axios.get(URL_CURRENCIES)
    .then(res => {
      let data = res.data;
      let currencies = data.map(function(item, index) {
        return {value: item.id, label: item.name}
      });
      return currencies;
    })
}
