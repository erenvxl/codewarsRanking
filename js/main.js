require("regenerator-runtime")

var eren_URL = "https://www.codewars.com/api/v1/users/erenluv"
var sascha_URL = "https://www.codewars.com/api/v1/users/SaschaB"
var jan_URL = "https://www.codewars.com/api/v1/users/docfnord"



const people = [eren_URL, sascha_URL, jan_URL]
let htmlCode = '';

const getInfo = async () => {
  let promises = []
  for (const x of people) {
    let resp = fetch(x)
    promises.push(resp)
  }
  return await Promise.all(promises)
}

const container = document.getElementById('player-cards')

getInfo()
  .then(responses => responses.forEach(resp => resp.json().then(res => {
    const card = document.createElement('div');

    const content = `
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>ZfL</h2>
          <h3>${res.username}</h3>
          <img src="https://www.codewars.com/users/${res.username}/badges/large" style="width: 17rem">
          <p style="color: ${res.ranks.overall.color}">${res.ranks.overall.name}</p>
          <p>${res.honor} - Honor</p>
          <p>${res.codeChallenges.totalCompleted} - <b>Kata's</b> abgeschlossen</p>
        </div>
      </div>
    </div>`;
    container.innerHTML += content;



  })))





