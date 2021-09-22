import React, { useEffect, useState } from "react";
import { getUsers } from "api/users-api";
import Header from "components/Header/Header.component";
import CustomTable from "components/CustomTable/CustomTable.component";
import { Grid, Item, Button } from '@mui/material';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const columns = [
    { header: 'Name', value: (archive) => archive.name, key: 'name' }
  ];
  
  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    })
  }, [])
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <CustomTable data={users} columns={columns} />
        </Grid>
        <Grid item xs={4}>
          <Button>
            Add new user
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;