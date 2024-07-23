const superagent = require('superagent');

superagent
  .post('http://api.fda.gov/drug')
  .send({ search : 'cetirizine', Limit : '1', sort: 'receivedate' }) // sends a JSON post body
  // .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // Calling the end function will send the request
  });
  
  function snipAtFirstInstance(str, target) {
    var index = str.indexOf(target);
    if (index !== -1) {
        return str.substring(0, index);
    } else {
        return str;
    }
}

function snipBetween(str, startStr, endStr) {
  var startIndex = str.indexOf(startStr);
  var endIndex = str.indexOf(endStr);
  if (startIndex !== -1 && endIndex !== -1) {
      return str.substring(startIndex + startStr.length, endIndex);
  } else {
      return str;
  }
}

(async () => {
  try {
    let res;
    res = await superagent.post('https://www.drugs.com/cetirizine-hcl.html');
   //console.log(res.text)

   console.log(typeof res.text)

  console.log(res.text.substring(
    res.text.indexOf("=") + 1, 
    res.text.lastIndexOf(".")))

   console.log(snipBetween(res.text,">","content="))

   //console.log(res.text.head)

   
   
  } catch (err) {
    console.error(err);
  }
})();