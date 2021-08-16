import { Button, Container, Modal, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { editInfoStyles } from './edit-info.styles'
import { userSelector } from '../../../application/store/user/user.selectors'

const EditInfo = () => {
	const classes = editInfoStyles();
	const user = useSelector(userSelector);

	return (
		<div>
			
				<Container component="form" maxWidth="xs">
					<Typography className={classes.oneRow} component="h1" variant="h5">
						EDITAR INFORMACIÓN DE CONTACTO 
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="nombres"
							label="Nombres"
							name="nombres"
							value={user?.firstName}
							autoFocus 
							InputLabelProps={{shrink:true}}
						/>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="apellidos"
							label="Apellidos"
							name="apellidos"
							value={user?.lastName}
							InputLabelProps={{shrink:true}}
						/>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="ocupacion"
							label="Ocupación"
							name="ocupacion"
							value={user?.ocupation}
							InputLabelProps={{shrink:true}}
						/>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="fechaNacimiento"
							label="Fecha de nacimiento"
							name="fechaNacimiento"
							value={user?.birthday}
							InputLabelProps={{shrink:true}}
						/>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="pais"
							label="País"
							name="pais"
							value={user?.country}
							InputLabelProps={{shrink:true}}
						/>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="ciudad"
							label="Ciudad"
							name="ciudad"
							value={user?.city}
							InputLabelProps={{shrink:true}}
						/>
						<TextField
							className="textfield"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="correo"
							label="Correo electrónico"
							name="correo"
							value={user?.email}
							InputLabelProps={{shrink:true}}
							onChange = {(e) => {
								console.log(e.target.value);
								// user.email = e.target.value;
							}}
							/>
							
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
	)
}

export default EditInfo
