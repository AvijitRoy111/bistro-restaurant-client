// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaUserShield, FaTrashAlt } from "react-icons/fa";
// import { toast } from "react-toastify";

// const AllUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);


//   const api = `${import.meta.env.VITE_api}/users`;


//   //  Load all users
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await axios.get(api);
//         setUsers(data.data || data);
//       } catch (err) {
//         toast.error("Failed to load users!");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [api]);

//   //  Handle delete user
//   const handleDelete = async () => {
//     if (!selectedUser) return;

//     try {
//       await axios.delete(`${api}/${selectedUser._id}`);
//       setUsers(users.filter((user) => user._id !== selectedUser._id));
//       setShowModal(false);
//       setShowSuccessModal(true);
//       toast.success("User deleted successfully!");
//       setTimeout(() => setShowSuccessModal(false), 2000);
//     } catch (err) {
//       toast.error("Failed to delete user!");
//     }
//   };

//   //  Skeleton Loading Row
//   const SkeletonRow = ({ index }) => (
//     <div className="grid grid-cols-[60px_100px_1.5fr_1fr_1fr_100px] items-center py-4 px-4 animate-pulse">
//       <div className="h-4 bg-gray-200 rounded w-6"></div>
//       <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
//       <div className="space-y-2">
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//       </div>
//       <div className="h-6 bg-gray-200 rounded w-20"></div>
//       <div className="h-4 bg-gray-200 rounded w-16"></div>
//       <div className="h-8 bg-gray-200 rounded w-8 mx-auto"></div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-900 py-10 px-4 text-gray-900 flex flex-col items-center">
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center mb-8 space-y-4">
//         <p className="text-center text-yellow-600 italic mb-2">---How many??---</p>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//         <h2 className="text-center text-3xl font-bold tracking-wide text-white">
//           MANAGE ALL USERS
//         </h2>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//       </div>

//       {/* Table Container */}
//       <div className="bg-white shadow-md rounded-md max-w-6xl w-full p-8 overflow-x-auto">
//         <h3 className="text-xl font-semibold mb-6">
//           TOTAL USERS:{" "}
//           <span className="font-bold">
//             {loading ? "Loading..." : users.length}
//           </span>
//         </h3>

        {/* Table Header */}
        <div className="grid grid-cols-[60px_100px_1.5fr_1fr_1fr_100px] font-semibold text-white bg-yellow-700 py-3 px-4 rounded-t-md">
          <div>#</div>
          <div>PHOTO</div>
          <div>USER INFO</div>
          <div>ROLE</div>
          <div>ADDED</div>
          <div className="text-center">ACTION</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {loading ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonRow key={i} index={i} />
              ))}
            </>
          ) : users.length > 0 ? (
            users.map((user, index) => (
              <div
                key={user._id}
                className="grid grid-cols-[60px_100px_1.5fr_1fr_1fr_100px] items-center py-4 px-4 hover:bg-gray-50 transition"
              >
                {/* Serial */}
                <div>{index + 1}</div>

                {/* Photo */}
                <div className="flex items-center justify-start">
                  <img
                    src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </div>

                {/* Name + Email */}
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>

                {/* Role */}
                <div>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-md flex items-center gap-2">
                    <FaUserShield /> {user.role || "user"}
                  </button>
                </div>

                {/* Joined Time (Live Update) */}
                <div className="text-sm text-gray-700">
                   N/A
                </div>

                {/* Delete */}
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}
                    className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-md"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-6 text-gray-500">No users found!</p>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] text-center">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-5">
              Are you sure you want to delete <br />
              <span className="font-bold">{selectedUser.name}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              User Deleted Successfully!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUser;
