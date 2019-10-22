import idGenerator from '../helpers/idGenerator';

export default function CreateContact() {
  return (name, phone) => {
    if (name && phone) {
      return {
        id: idGenerator(),
        name: name,
        phone: phone
      };
    }

    return null;
  };
}
