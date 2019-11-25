import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Fab,
  Drawer,
  Snackbar
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import axios from "axios";

const apiURL = "http://127.0.0.1:9987/api/v1/";

const styles = {
  root: {
    width: "100%",
    flexGrow: 1
  },
  table: {
    minWidth: 700
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20
  },
  formControl: {
    width: "50%"
  },
  form: {
    maxWidth: "100%",
    textAlign: "center"
  },
  formInput: {
    width: "100%",
    textAlign: "center"
  },
  btn: {
    marginTop: 20,
    marginBottom: 20
  }
};

class Customers extends React.Component {
  state = {
    customers: [],
    formData: {
      name: "",
      email: "",
      gender: "male"
    },
    modalOpen: false,
    snackbarOpen: false
  };

  componentDidMount() {
    this.handleListData();
  }

  handleListData = async () => {
    await axios.get(`${apiURL}customers/all`).then(res => {
      const customers = res.data;
      this.setState({ customers });
    });
  };

  handleChange = e => {
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  handleModalAddOpen = todo => {
    this.setState({ modalOpen: todo });
  };

  handleSnackbar = todo => {
    this.setState({ snackbarOpen: todo });
  };

  handleSubmit = async () => {
    const { formData } = this.state;
    await axios.post(`${apiURL}customers/create`, formData).then(res => {
      if (res.status === 200) {
        this.handleListData();
        this.setState({
          modalOpen: false,
          snackbarOpen: true,
          formData: { name: "", email: "", gender: "male" }
        });
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { customers, formData } = this.state;
    return (
      <Fragment>
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Clientes
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Paper className={classes.root}>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gênero</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Fab
          className={classes.fab}
          color="primary"
          onClick={() => this.handleModalAddOpen(true)}
        >
          <AddIcon />
        </Fab>
        <Drawer
          anchor="bottom"
          open={this.state.modalOpen}
          onClose={() => this.handleModalAddOpen(false)}
        >
          <div tabIndex={0} role="button">
            <form onSubmit={() => this.handleSubmit()} className={classes.form}>
              <div className={classes.root}>
                <AppBar position="static" color="primary">
                  <Toolbar>
                    <Typography variant="h6" color="inherit">
                      Novo Cliente
                    </Typography>
                  </Toolbar>
                </AppBar>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <TextField
                    name="name"
                    id="outlined-name"
                    label="Name"
                    value={formData.name}
                    onChange={e => this.handleChange(e)}
                    margin="normal"
                    variant="outlined"
                    className={classes.formInput}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <TextField
                    name="email"
                    type="email"
                    id="outlined-email"
                    label="Email"
                    value={formData.email}
                    onChange={e => this.handleChange(e)}
                    margin="normal"
                    variant="outlined"
                    className={classes.formInput}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <Select
                    name="gender"
                    id="outlined-gender"
                    label="Gênero"
                    value={formData.gender}
                    onChange={e => this.handleChange(e)}
                    margin="normal"
                    variant="outlined"
                    className={classes.formInput}
                  >
                    <MenuItem value="male">Masculino</MenuItem>
                    <MenuItem value="female">Feminino</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={() => this.handleSubmit()}
                >
                  Adicionar
                </Button>
              </div>
            </form>
          </div>
        </Drawer>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.snackbarOpen}
          onClose={() => this.handleSnackbar(false)}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Registro inserido com sucesso.</span>}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Customers);
