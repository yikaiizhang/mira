import { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import qs from "qs";
import { cleanObject } from "../../utils";
import { useDebounce } from "../../hooks";

const apiURL = process.env.REACT_APP_API_URL;

export default function ProjectListPage() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParams = useDebounce(params, 800);

  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debounceParams))}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, [debounceParams]);

  useEffect(() => {
    fetch(`${apiURL}/users`)
      .then((response) => response.json())
      .then((data) => {
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
