import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "stores/hooks";
import {
  Button,
  Container,
  ETypographyType,
  Typography,
  Loader,
} from "components";
import { handleUsersGet, handleUsersMore } from "stores/users/usersOperations";
import { UsersList } from "./UsersList";
import "./users.scss";

export const Users = () => {
  const { loading, users, pagination: { page, nextLink } } = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const handleMore = useCallback(() => {
    if ( !nextLink ) return;
    dispatch(handleUsersMore(page + 1))
  }, [nextLink, dispatch, page])


  useEffect(() => {
    dispatch(handleUsersGet(page));
  }, [])

  return (
    <Container>
      <div className="users">
        <Typography
          type={ETypographyType.HEADING}
          style={{ margin: "140px 0 50px 0" }}
        >
          Working with GET request
        </Typography>

        {!!users.length && <UsersList users={users}/>}

        {loading && <Loader/>}

        <Button
          onClick={handleMore}
          title="Show more"
          disabled={loading || !nextLink}
        />
      </div>
    </Container>
  );
};
