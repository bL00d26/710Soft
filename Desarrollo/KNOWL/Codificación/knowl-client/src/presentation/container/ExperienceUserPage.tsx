import { Card, CardHeader } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CardExperienceInfo from "../components/card-experience-info/CardExperienceInfo";
import { experienceStyles } from "../components/experience/experience.styles";
import axios from "axios";
import { Experience } from "../../application/store/user/interfaces/experience.interface";
import { usersURL } from "../../application/store/user/user.types";
import Loading from "../components/loading/Loading";
import { Routes } from "../../application/utils/enums";

const ExperienceUserPage = () => {
  const classes = experienceStyles();
  const history = useHistory();
  const params: { id: string } = useParams();
  const [experience, setExperience] = useState<Experience[] | null>(null);

  const loadUserExperience = async () => {
    try {
      const res = await axios.get(usersURL.concat(`experience/${params.id}`));
      if (res.data.success) {
        setExperience(res.data.experience);
      }
    } catch (error) {
      setExperience(null);
    }
  };
  useEffect(() => {
    loadUserExperience();
  }, [params.id]);
  return !experience ? (
    <Loading />
  ) : (
    <div className={classes.main}>
      <Card>
        <CardHeader
          title="EXPERIENCIA LABORAL"
          style={{ textAlign: "center" }}
        ></CardHeader>
        <div className="formation-button-container">
          <button
            className="btn"
            onClick={(e) =>
              history.push(Routes.PROFILE.concat(("/" + params.id) as string))
            }
          >
            Atrás
          </button>
          {/* <button>Agregar</button> */}
        </div>
        {experience.length === 0 && (
          <span>Todavía no ha agregado experiencia</span>
        )}
        {experience &&
          experience.map((experience, index) => (
            <CardExperienceInfo key={index} experience={experience} />
          ))}
      </Card>
    </div>
  );
};

export default ExperienceUserPage;
