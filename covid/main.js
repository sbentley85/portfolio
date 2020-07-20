
const url1 ='https://api.covid19api.com/total/dayone/country/';
const url2 =''

const input = document.querySelector('#input');
const submit = document.querySelector('#search');

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function titleCase(str) { 
  str = str.toLowerCase().split(' '); 
  for (var i = 0; i < str.length; i++) { 
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
  } 
  return str.join(' '); 
} 

const render = (res) => {
    let info = `<p>Covid 19 cases by date for ${titleCase(input.value)} sourced from <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a>
     via <a href="https://covid19api.com/">Covid 19 API</a></p>`
    let caseList = [`<table><thead><tr><th>Date</th><th>Confirmed</th><th>New Cases</th><th>Deaths</th><th>New Deaths</th><th>Recovered</th><th>Active</th></tr></thead><tbody>`]
    const resultsDiv = document.querySelector('.results');
    const infoDiv = document.querySelector('.info');
    
      const newDate = res[0].Date.split('T')[0]
      caseList.push(`<tr><td>${newDate}</td>
      <td>${addCommas(res[0].Confirmed)}</td>
      <td>0</td>
      <td>${addCommas(res[0].Deaths)}</td>
      <td>0</td>
      <td>${addCommas(res[0].Recovered)}</td>
      <td>${addCommas(res[0].Active)}</td>
      </tr>`)
    
    for (var i = 1; i < (res.length); i ++) {
        const newDate = res[i].Date.split('T')[0]
        if(res[i].Deaths == 0) {
          caseList.push(`<tr><td>${newDate}</td>
          <td>${addCommas(res[i].Confirmed)}</td>
          <td>${addCommas(res[i].Confirmed-res[i-1].Confirmed)}</td>
          <td>${addCommas(res[i].Deaths)}</td>
          <td>0</td>
          <td>${addCommas(res[i].Recovered)}</td>
          <td>${addCommas(res[i].Active)}</td>
          </tr>`)  
        } else {
          caseList.push(`<tr><td>${newDate}</td>
          <td>${addCommas(res[i].Confirmed)}</td>
          <td>${addCommas(res[i].Confirmed-res[i-1].Confirmed)}</td>
          <td>${addCommas(res[i].Deaths)}</td>
          <td>${addCommas(res[i].Deaths-res[i-1].Deaths)}</td>
          <td>${addCommas(res[i].Recovered)}</td>
          <td>${addCommas(res[i].Active)}</td>
          </tr>`)
        }
        
    };

    caseList.push('</tbody></table>')
    caseList = caseList.join('')
    infoDiv.innerHTML = info
    resultsDiv.innerHTML = caseList
    ;


}

const getCountry = async () => {
    const urlToFetch = `${url1}${input.value}${url2}`;
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }; 
    try {
      const response = await fetch(urlToFetch, requestOptions)
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        render(jsonResponse);
      }
    } catch (error) {
      console.log(error)
    }
  };


submit.addEventListener('click', getCountry)





