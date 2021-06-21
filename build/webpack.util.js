const path = require('path');
function getCardName() {
  let cardName;
  try {
    // cardName = process.argv[4];
    // cardName = process.env.BRANCH_ENV;
    cardName = process.env.npm_config_card;
    console.log(`-----cardName------------${cardName}-------------------`)
    if(!cardName) {
      throw(new Error('Please Specify Card Name'))
    }
  }
  catch(e) {
    console.error(e);
  }
  return cardName;
}

function getCardNameList(cardName) {
  const nameObj = new Object(null);
  const arr = cardName.split(',');
  if(arr.length > 0) {
    arr.forEach(item=>{
      nameObj[item+"/"+item] = getCardPath(item);
    })
  }
  return nameObj;
}

function getCardPath(cardName) {
  return path.resolve(__dirname, '../', path.join('src', cardName, `${cardName}.js`));
}

module.exports = {
  getCardName,
  getCardPath,
  getCardNameList
};
