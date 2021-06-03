import { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { cleanObject } from "../../utils";
import { useDebounce } from "../../hooks";
import { useRequest } from "../../utils/api";

export default function ProjectListPage() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const request = useRequest();

  const debounceParams = useDebounce(params, 300);

  useEffect(() => {
    request("/projects", { data: cleanObject(debounceParams) })
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [debounceParams]);

  useEffect(() => {
    request("/users").then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <ProjectFilter params={params} setParams={setParams} users={users} />
      <ProjectList list={list} users={users} />
    </div>
  );
}
