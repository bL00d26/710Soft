import { Card, CardContent, CardHeader, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formationSelector } from "../../application/store/user/user.selectors";
import CardFormationInfo from "../components/card-formation-info/CardFormationInfo";
import { formationStyles } from "../components/formation/formation.styles";
import NewFormationForm from "../components/new-formation-form/NewFormationForm";

const FormationPage = () => {
  const classes = formationStyles();
  const [openModal, setOpenModal] = useState(false);
  const formation = useSelector(formationSelector);
  return (
    <div className={classes.main}>
      <Modal open={openModal}>
        <NewFormationForm setModalOpen={setOpenModal} />
      </Modal>
      <Card>
        <CardHeader
          title="FORMACIÓN ACADÉMICA"
          style={{ textAlign: "center" }}
        ></CardHeader>
        <div className="formation-button-container">
          <button className="btn" onClick={(e) => setOpenModal(true)}>
            Agregar
          </button>
          {/* <button>Agregar</button> */}
        </div>
        <CardContent>
          {formation &&
            formation.map((formation, index) => (
              <CardFormationInfo key={index} formation={formation} />
            ))}
          {/* <CardFormationInfo /> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default FormationPage;
