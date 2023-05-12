import express from 'express';
import fs from 'fs';

const admins = require('../data/admins.json');

const router = express.Router();

router.post('/', (req, res) => {
  const lastAdmin = admins[admins.length - 1];
  const lastId = lastAdmin.id + 1;
  const {
    firstName, lastName, email, password,
  } = req.body;
  const newAdmin = {
    lastId, firstName, lastName, email, password,
  };

  if (!(lastId && firstName && lastName && email && password)) {
    return res.send('missing information');
  }

  admins.push(newAdmin);

  fs.writeFile('src/data/admins.json', JSON.stringify(admins, null, 2), (error) => {
    if (error) {
      res.send('Error, admin cannot be created!');
    } else {
      res.send('Admin created!');
    }
  });
  return (newAdmin);
});

router.delete('/:id', (req, res) => {
  const adminId = req.params.id;
  const filteredAdmins = admins.filter((admin) => admin.id.toString() !== adminId);
  const adminIndex = admins.findIndex((admin) => admin.id.toString() === adminId);
  if (adminIndex === -1) {
    res.send('Id not found');
  } else {
    fs.writeFile('src/data/admins.json', JSON.stringify(filteredAdmins, null, 2), (error) => {
      if (error) {
        res.send('Error, admin cannot be deleted!');
      } else {
        res.send('Admin deleted!');
      }
    });
  }
});

router.get('/filterByLastName/:lastname', (req, res) => {
  const adminLastName = req.params.lastname;
  const foundAdmin = admins.filter((admin) => admin.last_name === adminLastName);
  if (foundAdmin.length === 0) return res.send('Admin not found');
  return res.send(foundAdmin);
});

router.get('/', (req, res) => {
  res.send(admins);
});

router.get('/:id', (req, res) => {
  const adminId = req.params.id;
  const foundAdmin = admins.find((admin) => admin.id.toString() === adminId);
  if (!foundAdmin) return res.send('Admin not found');
  return res.send(foundAdmin);
});

router.put('/:id', (req, res) => {
  const adminId = req.params.id;
  const editAdmin = req.body;
  const index = admins.findIndex((admin) => admin.id.toString() === adminId);

  if (index !== -1) {
    admins[index] = { id: adminId, ...editAdmin };
    fs.writeFile('src/data/admins.json', JSON.stringify(admins, null, 2), (err) => {
      if (err) {
        res.send(err);
      }
    });
    res.send('Admin edited');
  } else {
    res.send('ID didn\'t match');
  }
});

router.get('/filterByName/:name', (req, res) => {
  const adminName = req.params.name;
  const foundAdmin = admins.filter((admin) => admin.first_name === adminName);
  if (foundAdmin.length === 0) return res.send('Admin not found');
  return res.send(foundAdmin);
});

export default router;