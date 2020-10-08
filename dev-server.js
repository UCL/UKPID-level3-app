/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.post("/rest/login", (req,res) => {
    res.send({
      success: true
    })
  });

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

  server.get("/rest/10000/plist", (req, res) => {
    res.send([
      {id: 1, pid: 'Diagnosis 1', centre: 'Centre 1', yob: 1990, gender: 'f'},
      {id: 2, pid: 'Diagnosis 2', centre: 'Centre 2', yob: 1991, gender: 'm'},
      {id: 3, pid: 'Diagnosis 3', centre: 'Centre 3', yob: 1992, gender: 'f'},
      {id: 4, pid: 'Diagnosis 4', centre: 'Centre 4', yob: 1993, gender: 'f'},
      {id: 5, pid: 'Diagnosis 5', centre: 'Centre 5', yob: 1994, gender: 'm'},
      {id: 6, pid: 'Diagnosis 6', centre: 'Centre 6', yob: 1995, gender: 'm'},
      {id: 7, pid: 'Diagnosis 7', centre: 'Centre 7', yob: 1996, gender: 'f'},
      {id: 8, pid: 'Diagnosis 8', centre: 'Centre 8', yob: 1997, gender: 'f'},
      {id: 9, pid: 'Diagnosis 9', centre: 'Centre 9', yob: 1998, gender: 'm'}
    ])
  });

  server.all('*', (req, res) => handler(req, res));

  server.listen(port, (err) => {
    if (err) throw err
    /* eslint no-console: 0 */
    console.log(`> Ready on http://localhost:${port}`)
  });
});
