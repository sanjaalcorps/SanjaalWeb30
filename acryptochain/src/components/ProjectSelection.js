/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function selectProject(selectedProject, handleProjectChange) {
  return <FormControl variant="standard" sx={{ mb: 1, minWidth: 400 }}>
    <InputLabel id="key_selectedProject">Select a project</InputLabel>
    <Select
      labelId="key_selectedProjectLabel"
      id="selectedProject"
      value={selectedProject}
      onChange={handleProjectChange}
      label="Project"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'liq'}>Liquidus</MenuItem>
      {/* <MenuItem value={'oni'}>Onino</MenuItem>
          <MenuItem value={'pryz'}>Pryz</MenuItem> */}
    </Select>
  </FormControl>;
}