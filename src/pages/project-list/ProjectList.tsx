import { IUser } from "./ProjectFilter";

interface IProject {
  id: string;
  name: string;
  personId: string;
  organization: string;
  pin: boolean;
}

interface IProjectListProps {
  list: IProject[];
  users: IUser[];
}

export default function ProjectList({ list, users }: IProjectListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "Unknown"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
