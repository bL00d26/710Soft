import { Button, Container, TextField, Typography } from "@material-ui/core";
import React from "react";
import { editTechnologiesStyles } from "./edit-technologies.styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const EditTechnologies = () => {
  const classes = editTechnologiesStyles();
  return (
    <div>
      <Container component="form" maxWidth="sm">
        <Typography className={classes.oneRow} component="h1" variant="h5">
          EDITAR TECNOLOGÍAS
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="descripcion"
            label="Descripción"
            name="descripcion"
            multiline
            rows={2}
            InputLabelProps={{ shrink: true }}
          />

          <Button
            type="button"
            fullWidth
            variant="outlined"
            color="primary"
            // onClick={}
          >
            Agregar
          </Button>
          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="right">Descripción</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            // onClick={}
            className={classes.submit}
          >
            Guardar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditTechnologies;
