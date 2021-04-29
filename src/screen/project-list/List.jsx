import React from 'react';
import { Table } from 'antd'
const List  = ({dataSource,users}) => {
  const columns = () => {
    return [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '负责人',
      dataIndex: 'personId',
      render(personId) {
      return <span>{users.find(user => user.id === personId)?.name}</span>
      }
    },
  ]
  }
  return <div>
    <Table dataSource={dataSource} columns={columns()} />
  </div>
}
export default List