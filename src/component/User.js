const User = ({ name, location, contact }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h2>{location}</h2>
      <h2>{contact}</h2>
    </div>
  );
};
export default User