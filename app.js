const superagent = require('superagent');

superagent
  .post('http://api.fda.gov/drug')
  .send({ search : 'cetirizine', Limit : '1', sort: 'receivedate' }) // sends a JSON post body
  // .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // Calling the end function will send the request
  });


(async () => {
  try {
    const res = await superagent.post('http://api.fda.gov/drug/event.json?search=cetrizine');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();