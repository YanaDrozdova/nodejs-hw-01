import getAllContacts from './getAllContacts.js';

const logAllContacts = async () => {
  const data = await getAllContacts();
  return data;
};
console.log(await logAllContacts());

export default logAllContacts;
