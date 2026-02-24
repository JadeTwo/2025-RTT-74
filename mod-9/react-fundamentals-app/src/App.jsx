import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";

function App() {

  let firstFriend = "Bob"

  // array
  const user1Hobbies = ['Reading', 'Hiking', 'Coding'];

  // object
  const user1Details = { email: 'alice@example.com', city: 'New York' };

  // function
  const handleUserClick = () => {
    alert('User button clicked!');
  };

  // props.hobbies 
  // props.details
  // props.handleUserClick

  return (
    <div className="">
{/* 
      <UserProfile 
        hobbies={user1Hobbies} 
        details={user1Details} 
        onClick={handleUserClick}
      /> */}



      <Greeting 
        name={firstFriend} 
      />

      {/* wrapper component */}
      <Greeting>
        <h1>Title</h1>
        <div>Hello World</div>
      </Greeting>

      <Greeting>
        <h2>Title2</h2>
        <div>Good bye</div>
      </Greeting>

      <Greeting name="Billy" />
      <Greeting name="Jimmy" />
      <Greeting name="Sally" />
      <Greeting name="Esther" />
      {/* render the greeting component */}
      <Greeting name="Bad" lastName="Bunny" />

      <NavBar />
      <Footer />

    </div>
  )
}

export default App;






















// function closeWidget() {}
// function handleFilter() {}
// function updateRange() {}

// function App() {
//   return (
//     <div className="dashboard-widget">
//       <header className="widget-header">
//         <h3 className="widget-title">User Statistics</h3>
//         <button className="btn-close" onClick={closeWidget} aria-label="Close widget">×</button>
//       </header>
//       <div className="widget-body">
//         <form className="filter-form" onSubmit={handleFilter}>
//           <label htmlFor="dateRange">Date Range:</label>
//           <select id="dateRange" className="form-select" onChange={updateRange}>
//             <option value="7d">Last 7 Days</option>
//             <option value="30d">Last 30 Days</option>
//             <option value="90d">Last 90 Days</option>
//           </select>
//           <input type="checkbox" id="includeInactive" defaultChecked />
//             <label htmlFor="includeInactive">Include inactive users</label>
//         </form>
//         <hr />
//           <table className="stats-table" cellPadding="8">
//             <thead>
//               <tr>
//                 <th colSpan="2">Metric</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="highlight-row" tabIndex="0">
//                 <td><img src="users-icon.png" alt="Users" /></td>
//                 <td>Active Users</td>
//                 <td>1,234</td>
//               </tr>
//             </tbody>
//           </table>
//       </div>
//     </div>
//   )
// }


// function App() {

//   return (
//     <>
//       <div className="profile">
//         <img src="avatar.png" alt="User Avatar" />
//         <h2>User Profile</h2>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" readOnly />
//         <br />
//         <p>Bio: A short bio goes here.</p>
//       </div>
//       <button className="btn primary">Save Changes</button>
//     </>
//   )
// }

// export default App;