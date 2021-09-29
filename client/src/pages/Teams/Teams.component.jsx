import React, { useEffect, useState } from "react";
import { Grid, OutlinedInput, FormControl, InputLabel } from '@material-ui/core';

import CustomTable from "components/CustomTable/CustomTable.component";
import ModalWrapper from "components/ModalWrapper/ModalWrapper.component";
import { getTeams } from "api/teams-api";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const columns = [
    { header: 'Team', value: (team) => team.name, key: 'name' }
  ];

  const fetchTeams = () => {
    getTeams().then((response) => {
      setTeams(response.data);
      console.log(response.data);
    })
  };
  
  useEffect(() => {
    fetchTeams();
  }, [])
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <CustomTable data={teams} columns={columns} />
        </Grid>
        <Grid item xs={4}>
          <ModalWrapper submitFunction = {() => {}} buttonText = "Create New Team">
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <OutlinedInput label="Name" onChange={(event) => setTeamName(event.target.value)} ></OutlinedInput>
          </FormControl>
          </ModalWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default Teams;