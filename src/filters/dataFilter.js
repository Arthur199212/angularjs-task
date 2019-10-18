export default () => {
  return (data, query) => {
    if (!query || query.length === 0) return data;

    return data.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(query) ||
        phone.toLowerCase().includes(query)
    );
  };
};
