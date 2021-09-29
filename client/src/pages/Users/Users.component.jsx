import React, { useEffect, useState } from "react";
import { addUsers, getUsers } from "api/users-api";
import { Grid, Input, FormControl, InputLabel } from '@material-ui/core';

import CustomTable from "components/CustomTable/CustomTable.component";
import ModalWrapper from "components/ModalWrapper/ModalWrapper.component";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [usersName, setUsersName] = useState("");
  const columns = [
    { header: 'Name', value: (archive) => archive.name, key: 'name' }
  ];

  const handleAddUser = () => {
    addUsers({name: usersName}).then(() => {
      fetchUsers(); // This allows our app to requery users
    })
  }

  const fetchUsers = () => {
    getUsers().then((response) => {
      setUsers(response.data);
    })
  };
  
  useEffect(() => {
    fetchUsers();
  }, [])
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <CustomTable data={users} columns={columns} />
        </Grid>
        <Grid item xs={4}>
          <ModalWrapper submitFunction = {handleAddUser} buttonText = "Add User">
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <Input variant="outlined" label="Name" onChange={(event) => setUsersName(event.target.value)} ></Input>
          </FormControl>
          </ModalWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default Users;