import SidebarLayout from '@/layouts/SidebarLayout';
import { useState } from 'react';
import Box from '@mui/material/Box';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  TextField,
  Button
} from '@mui/material';

const UserModals = (props) => {
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');

  return (
    <>
      <Dialog onClose={props.handleClose} open={props.open}>
        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Add User" />
              <Divider />
              <CardContent>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    {/* User Role (Full Width) */}
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>User Role</InputLabel>
                        <Select value={role} onChange={(e) => setRole(e.target.value)}>
                          <MenuItem value="Admin">Admin</MenuItem>
                          <MenuItem value="User">User</MenuItem>
                          <MenuItem value="Manager">Manager</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Two Fields Per Row */}
                    <Grid item xs={6}>
                      <TextField label="Name" type="text" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Email" type="text" fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField label="Mobile Number" type="text" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Designation" type="text" fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField label="Emp Id" type="text" fullWidth />
                    </Grid>
                    {/* Gender (Full Width with Inside Label) */}
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Address (Full Width and Last) */}
                    <Grid item xs={12}>
                      <TextField label="Address" type="text" multiline rows={4} fullWidth />
                    </Grid>

                    {/* Create Button (Right-Aligned) */}
                    <Grid item xs={12} display="flex" justifyContent="flex-end">
                      <Button variant="contained" color="primary">
                        Create
                      </Button>
                    </Grid>

                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

UserModals.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UserModals;
