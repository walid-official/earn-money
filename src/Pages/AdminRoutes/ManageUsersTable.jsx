const ManageUsersTable = ({ singleUser }) => {
  const { name, photo, email, role, coin } = singleUser || {};
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          {/* <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src="" alt="Avatar Tailwind CSS Component" />
            </div>
          </div> */}
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={photo}
          alt=""
        />
      </td>
      <td>{email}</td>
      <td>{role}</td>

      <td>{coin}</td>
      <th>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Update Role
          </option>
          <option>Admin</option>
          <option>Buyer</option>
          <option>Worker</option>
        </select>
      </th>
      <th>
        <button className="py-2 px-4 rounded-xl">delete</button>
      </th>
    </tr>
  );
};

export default ManageUsersTable;
