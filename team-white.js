const teamWhiteProblems = [118,119,120,121,122,123,162,163,164,166,170,171,172,173,174,175,176,177,178,179,180,
    131,132,133,134,135,136,137,138,140,182,183,184,186,187,188,189,190,193,139,141,142,
    143,144,191,192,194,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
    87,88,89,90,101,102,103,104,105,106,107,108,195,91,92,93,94,95,96,99,100,109,110,111,
    112,113,97,98,114,115,116,117,57,58,59,60,65,66,67,73,74,75,76,61,62,63,64,68,69,77,
    78,79,80,81,82,83,85,70,71,72,84];

let cards = document.getElementsByClassName("card");

for(let i = 0; i < cards.length; i++){
  let header = cards[i].querySelector('.card-header');
  let title = header.getElementsByTagName('a')[0];
  if(teamWhiteProblems.includes(parseInt(title.innerHTML.match(/[0-9]+/g)[0]))){
    title.innerHTML += `<span class="team-white">TEAM WHITE</span>`;
  }
}
