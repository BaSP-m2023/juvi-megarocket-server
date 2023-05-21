import mongoose from 'mongoose';

export default [
  {
    _id: new mongoose.Types.ObjectId('646014b31c70e12b863ad70a'),
    firstName: 'Juan Manuel',
    lastName: 'Lopez',
    dni: 3777291,
    phone: 99999999,
    email: 'radium@raadiumrocket.com',
    city: 'Montevideo',
    birthDate: '2000-08-01T00:00:00.000Z',
    postalCode: 4000,
    memberships: 'Black',
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId('646014b31c70e12b863ad70b'),
    firstName: 'Gonzalo',
    lastName: 'Reybet',
    dni: 37772123,
    phone: 999999123,
    email: 'radium@raadiumrocket.com',
    city: 'Montevideo',
    birthDate: '2000-08-01T00:00:00.000Z',
    postalCode: 4000,
    memberships: 'Black',
    isActive: true,
  },
];
