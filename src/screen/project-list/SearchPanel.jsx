import React from 'react';
import { Input, Select } from 'antd'
const { Option } = Select;
const SearchPanel  = ({param, users, setParam}) => {
  const onChangeName = (e) => {
    console.log(e.target.value,'value')
    setParam({
      ...param,
      name:e.target.value
    })
  }
  return <div>
    <Input value={param.name} onChange={onChangeName}/>
    <Select 
    value={param.personId}
        onChange={(value) => setParam({ ...param, personId: value })}>
      <Option value="负责人">负责人</Option>
      {
        users.map(user => (<Option value={user.id}>{user.name}</Option>))
      }
    </Select>
  </div>
}
export default SearchPanel