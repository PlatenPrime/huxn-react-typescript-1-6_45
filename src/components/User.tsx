type UserProps = {
  name: string;
  age: number;
  isEmployee: boolean;
};

const User: React.FC<UserProps> = ({ name, age, isEmployee }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isEmployee}</h2>
    </div>
  );
};

export default User;
