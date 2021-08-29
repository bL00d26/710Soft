import { Card, CardHeader } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { formationStyles } from "../components/formation/formation.styles";
import axios from "axios";
import { usersURL } from "../../application/store/user/user.types";
import Loading from "../components/loading/Loading";
import { Routes } from "../../application/utils/enums";
import { Formation } from "../../application/store/user/interfaces/formation.interface";
import CardFormationInfo from "../components/card-formation-info/CardFormationInfo";

const FormationUserPage = () => {
  const classes = formationStyles();
  const history = useHistory();
  const params: { id: string } = useParams();
  const [formation, setFormation] = useState<Formation[] | null>(null);

  const loadUserFormation = async () => {
    try {
      const res = await axios.get(usersURL.concat(`formation/${params.id}`));
      if (res.data.success) {
        setFormation(res.data.formation);
      }
    } catch (error) {
      setFormation(null);
    }
  };
  useEffect(() => {
    loadUserFormation();
  }, [params.id]);
  return !formation ? (
    <Loading />
  ) : (
    <div className={classes.main}>
      <Card>
        <CardHeader
          title="FORMACIÓN ACADÉMICA"
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
        {formation.length === 0 && (
          <span>Todavía no ha agregado formación</span>
        )}
        {formation &&
          formation.map((formation, index) => (
            <CardFormationInfo key={index} formation={formation} />
          ))}
      </Card>
    </div>
  );
};

export default FormationUserPage;
