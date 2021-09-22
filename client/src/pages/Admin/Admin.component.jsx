import React, { useEffect, useState } from "react";
import { addUsers, getUsers } from "api/users-api";
import { Grid, OutlinedInput, FormControl, InputLabel } from '@mui/material';

import Header from "components/Header/Header.component";
import CustomTable from "components/CustomTable/CustomTable.component";
import ModalWrapper from "components/ModalWrapper/ModalWrapper.component";

const Admin = () => {
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
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <CustomTable data={users} columns={columns} />
        </Grid>
        <Grid item xs={4}>
          <ModalWrapper submitFunction = {handleAddUser} buttonText = "Add User">
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <OutlinedInput label="Name" onChange={(event) => setUsersName(event.target.value)} ></OutlinedInput>
          </FormControl>
          </ModalWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;