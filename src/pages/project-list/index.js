import { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import qs from "qs";
import { cleanObject } from "../../utils";

const apiURL = process.env.REACT_APP_API_URL;
console.log(apiURL);

export default function ProjectListPage() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(params))}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, [params]);

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
