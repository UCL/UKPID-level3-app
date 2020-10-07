/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.post("/rest/p/dmards", (req, res) => {
    res.send({
      success: true
    });
  });

  server.get("/rest/g/dmards/1", (req, res) => {
    res.send({
      steroids: false,
      methothrexate: true,
      azathioprine: false,
      ciclosporin: false,
      mycophenylate: true,
      hydroxychloroquine: false,
      sulfasalazine: false,
      cyclophosphamide: false,
      other: 'other dmards'
    });
  });

  server.get("/rest/g/biologic/1", (req, res) => {
    res.send({
      classofmed: 'other-anti-neo',
      biologic: 'bevacizumab',
      indication: 'glild',
      howLongBiologic: '3 months',
      treatmentOutcome: 'partial',
      howWasOutcomeMeasured: 'symptomatic',
      biologicComplications: 'no',
      biologicComplicationsDetails: '',
      biologicPrescribedImmunology: 'yes',
      specialty: 'renal',
      otherSpecialty: 'other specialty',
      biologicTreatmentFunding: 'ipr',
      biologicTreatmentOtherFunding: 'other funding body'
    })
  });

  server.all('*', (req, res) => handler(req, res));

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint no-console: 0 */
    console.log(`> Ready on http://localhost:${port}`)
  });
});
