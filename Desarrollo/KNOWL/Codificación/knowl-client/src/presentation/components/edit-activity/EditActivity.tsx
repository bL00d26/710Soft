import { Button, Container, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { editActivityStyles } from './edit-activity.styles'

const EditActivity = () => {
	const classes = editActivityStyles();

	return (
		<div>
			<Container component="form" maxWidth="xs">
				<Typography component="h1" variant="h5">
					EDITAR ACTIVIDAD
				</Typography>
				<div>
					<img className={classes.imagecontainer} src={window.location.origin + '/images/favicon.png'} alt="user-img" />
				</div>
				<Button
					type="button"
					fullWidth
					variant="outlined"
					color="primary"
				// onClick={}
				>
					Subir foto
				</Button>
				<TextField
					className="textfield"
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="descripcion"
					label="Descripción"
					name="descripcion"
					multiline rows={2}
					InputLabelProps={{ shrink: true }}
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
			</Container>
		</div >
	)
}

export default EditActivity
