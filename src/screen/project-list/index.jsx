import React, { useState, useEffect } from 'react';
import * as qs from 'qs';
import List from './List';
import SearchPanel from './SearchPanel';
import { cleanObject } from '../../utils'
const apiUrl = process.env.REACT_APP_URL_API;
const ProjectList  = () => {
  const [param, setParam] = useState({name:'',personId:''});
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if(res.ok) {
        setUsers(await res.json());
      }
    })
  }, [])
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
      if(res.ok) {
        setList(await res.json());
      }
    })
  }, [param])
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List dataSource={list} users={users} />
  </div>
}
export default ProjectList