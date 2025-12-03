// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment";

// const AllContact = () => {
//   const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_api}/contacts`);
      setContacts(res.data.data || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete contact
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_api}/contacts/${deleteId}`);
      setContacts((prev) => prev.filter((c) => c._id !== deleteId));
      setShowConfirm(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="max-w-full mx-auto min-h-screen bg-slate-900 text-gray-200">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-3 pt-10 px-3">
        <p className="text-yellow-500 italic mb-2">---Check it out---</p>
        <hr className="border-2 border-gray-300 w-64 md:w-80" />
        <h2 className="text-2xl font-bold tracking-wide text-white text-center">
          All Contacts
        </h2>
        <hr className="border-2 border-gray-300 w-64 md:w-80" />
      </div>

      {/* Count Section */}
      <div className="text-center mt-6 text-lg font-semibold text-yellow-400">
        Total Contacts: {contacts.length}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-6 px-3 md:px-6 pb-10">
        {loading ? (
          // Skeleton Loading
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-slate-800 rounded-md h-12 w-full"
              ></div>
            ))}
          </div>
        ) : contacts.length === 0 ? (
          <p className="text-center text-gray-400">No contacts found.</p>
        ) : (
          <div className="min-w-full overflow-x-auto">
            <table className="w-full bg-slate-800 border border-gray-700 rounded-lg text-sm md:text-base">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="py-3 px-2 md:px-4 border-b border-gray-600">#</th>
                  <th className="py-3 px-2 md:px-4 border-b border-gray-600">
                    Name & Email
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b border-gray-600">
                    Number
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b border-gray-600">
                    Message
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b border-gray-600">
                    Added
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b border-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    key={contact._id}
                    className="hover:bg-slate-700 transition-colors duration-150"
                  >
                    <td className="py-2 px-2 md:px-4 text-center border-b border-gray-700">
                      {index + 1}
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b border-gray-700">
                      <div className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px] md:max-w-none">
                        <p className="font-semibold truncate">{contact.name}</p>
                        <p className="text-gray-400 text-xs md:text-sm truncate">
                          {contact.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b border-gray-700 whitespace-nowrap">
                      {contact.phone || contact.number}
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b border-gray-700 max-w-[150px] md:max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-300">
                      {contact.description?.length > 40
                        ? contact.description.slice(0, 40) + "..."
                        : contact.description || contact.message}
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b border-gray-700 text-gray-400 whitespace-nowrap">
                      {contact.createdAt
                        ? moment(contact.createdAt).fromNow()
                        : "—"}
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b border-gray-700 text-center">
                      <button
                        onClick={() => {
                          setDeleteId(contact._id);
                          setShowConfirm(true);
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center space-y-4 mx-3">
            <h3 className="text-lg font-semibold text-yellow-400">
              Confirm Delete
            </h3>
            <p>Are you sure you want to delete this contact?</p>
            <div className="flex justify-center gap-3 pt-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-lg font-semibold">Deleted Successfully </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllContact;
