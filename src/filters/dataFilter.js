export default () => {
  return (data, query, checked) => {
    if (!query || query.length === 0) return data;

    return data.filter(
      ({ name, phone }) => {
        if (checked) {
          return name.toLowerCase().includes(query)
          || phone.toLowerCase().includes(query);
        } else {
          return name.toLowerCase().includes(query);
        }
      }
    );
  };
};
