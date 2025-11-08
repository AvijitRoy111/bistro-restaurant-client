import { FaUserShield, FaTrashAlt } from "react-icons/fa";

const AllUser = () => {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com", role: "user" },
    { id: 2, name: "John", email: "john@gmail.com", role: "user" },
    { id: 3, name: "John", email: "john@gmail.com", role: "user" },
    { id: 4, name: "John", email: "john@gmail.com", role: "user" },
    { id: 5, name: "John", email: "john@gmail.com", role: "user" },
    { id: 6, name: "John", email: "john@gmail.com", role: "user" },
    { id: 7, name: "John", email: "john@gmail.com", role: "user" },
    { id: 8, name: "John", email: "john@gmail.com", role: "user" },
    { id: 9, name: "John", email: "john@gmail.com", role: "user" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4 text-gray-900 flex flex-col items-center">
      {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2">---How many??---</p>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white">MANAGE ALL USERS</h2>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-md rounded-md max-w-5xl w-full p-8">
        <h3 className="text-xl font-semibold mb-6">
          TOTAL USERS: <span className="font-bold">{users.length}</span>
        </h3>

        {/* Table Header */}
        <div className="grid grid-cols-5 font-semibold text-white bg-yellow-700 py-3 px-4 rounded-t-md">
          <div>#</div>
          <div>NAME</div>
          <div>EMAIL</div>
          <div>ROLE</div>
          <div className="text-center">ACTION</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="grid grid-cols-5 items-center py-4 px-4 hover:bg-gray-50 transition"
            >
              <div>{index + 1}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-md">
                  <FaUserShield />
                </button>
              </div>
              <div className="flex justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUser;
