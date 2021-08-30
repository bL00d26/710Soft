import { Card, CardHeader, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { experienceSelector } from "../../application/store/user/user.selectors";
import CardExperienceInfo from "../components/card-experience-info/CardExperienceInfo";
import { experienceStyles } from "../components/experience/experience.styles";
import NewExperienceForm from "../components/new-experience-form/NewExperienceForm";

const ExperiencePage = () => {
  const classes = experienceStyles();
  const [openModal, setOpenModal] = useState(false);
  const experience = useSelector(experienceSelector);
  return (
    <div className={classes.main}>
      <Modal open={openModal}>
        <NewExperienceForm setModalOpen={setOpenModal} />
      </Modal>
      <Card>
        <CardHeader
          title="EXPERIENCIA LABORAL"
          style={{ textAlign: "center" }}
        ></CardHeader>
        <div className="formation-button-container">
          <button className="btn" onClick={(e) => setOpenModal(true)}>
            Agregar
          </button>
          {/* <button>Agregar</button> */}
        </div>
        {experience &&
          experience.map((experience, index) => (
            <CardExperienceInfo key={index} experience={experience} />
          ))}
      </Card>
    </div>
  );
};

export default ExperiencePage;
