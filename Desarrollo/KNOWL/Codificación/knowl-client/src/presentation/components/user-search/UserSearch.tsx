import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { User } from "../../../application/store/user/interfaces/user.interface";
import {
  userSelector,
  usersSelector,
} from "../../../application/store/user/user.selectors";
import { useHistory, useLocation } from "react-router";
import { Routes } from "../../../application/utils/enums";

const UserSearch = () => {
  const users = useSelector(usersSelector);
  const actualUser = useSelector(userSelector);
  const location = useLocation();
  const [flag, setFlag] = useState(true);
  const history = useHistory();
  const handleUserSelection = (
    event: React.ChangeEvent<{}>,
    value: User | null
  ) => {
    event.preventDefault();
    history.push(Routes.PROFILE.concat(("/" + value?._id) as string));
  };

  useEffect(() => {
    if (!location.pathname.includes(Routes.PROFILE)) {
      setFlag(false);
    }
  }, [location.pathname]);
  return users ? (
    <Autocomplete
      id="combo-box-demo"
      disablePortal={true}
      onChange={handleUserSelection}
      options={users.filter((user) => user._id !== (actualUser?._id as string))}
      getOptionLabel={(option: User) =>
        option.firstName.concat(" " + option.lastName)
      }
      // value={flag&&undefined}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            type="text"
            placeholder="Ingresar usuario"
            autoComplete="off"
            {...params.inputProps}
          />
        </div>
      )}
    />
  ) : // <Loading />
  null;
};

export default UserSearch;
