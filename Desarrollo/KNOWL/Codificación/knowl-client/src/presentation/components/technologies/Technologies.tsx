import React, { useState } from "react";

import { Card, CardContent, CardHeader, Grid, Modal } from "@material-ui/core";
import clsx from "clsx";
import { technologiesStyles } from "./technologies.styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../../application/store/user/user.selectors";
import CardTechInfo from "../card-technology-info/CardTechInfo";
import EditIcon from "@material-ui/icons/Edit";
import NewTechnologyUserForm from "../new-technology-user-form/NewTechnologyUserForm";
import { technologiesUserSelector } from "../../../application/store/technology/technology.selectors";

const Technologies = () => {
  const classes = technologiesStyles();
  const [openModal, setOpenModal] = useState(false);
  const technologiesUser = useSelector(technologiesUserSelector);
  const user = useSelector(userSelector);
  return (
    <div>
      <Modal open={openModal}>
        <NewTechnologyUserForm setModalOpen={setOpenModal} />
      </Modal>
      <Card>
        <CardHeader className={classes.title} title="TECNOLOGÍAS"></CardHeader>
        <div className="formation-button-container">
          <button className="btn" onClick={(e) => setOpenModal(true)}>
            Agregar
          </button>
          {/* <button>Agregar</button> */}
        </div>
        <CardContent>
          <Grid container spacing={2}>
            <div className="horizontal-scroll">
              {technologiesUser.map((technologyUser, index) => (
                <CardTechInfo key={index} technologyUser={technologyUser} />
              ))}
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Technologies;
