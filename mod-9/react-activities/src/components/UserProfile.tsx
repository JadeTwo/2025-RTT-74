// Define an interface for the props this component expects
interface UserProfileProps {
  username: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  details: { email: string; city: string };
  // Example of passing a function (more on this with event handling)
  onButtonClick: () => void;
}

// Use the interface to type the props argument
function UserProfile(props: UserProfileProps) {
  return (
    <div className="user-profile">
      <h2>Username: {props.username}</h2>
      <p>Age: {props.age}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
      <p>Hobbies:</p>
      <ul>
        {/* We'll cover list rendering properly later, this is just an example */}
        {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
      <p>Email: {props.details.email}</p>
      <p>City: {props.details.city}</p>
      <button onClick={props.onButtonClick}>Click Me</button>
    </div>
  );
}

export default UserProfile;