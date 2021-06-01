export default function ProjectFilter({ params, setParams, users }) {
  return (
    <form>
      <input
        type="text"
        value={params.name}
        onChange={(e) => {
          setParams({
            ...params,
            name: e.target.value,
          });
        }}
      />
      <select
        value={params.personId}
        onChange={(e) => {
          setParams({
            ...params,
            personId: e.target.value,
          });
        }}
      >
        <option value="">Manager</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
}
