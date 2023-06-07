import React, { FC, Fragment, useEffect, useRef } from 'react';
import { UserItem } from "./UserItem";
import { IUser } from "interfaces/user";

interface IUsersList {
  users: IUser[]
}

export const UsersList: FC<IUsersList> = ({ users }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ( ( !ref || !ref.current ) || users.length <= 6 ) return;
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [ref, users.length])

  return (
    <div
      className="users__list"
    >
      {users.map(user => (
        <Fragment key={user.id}>
          <UserItem user={user}/>
        </Fragment>
      ))}
      <div ref={ref}/>
    </div>
  );
};
