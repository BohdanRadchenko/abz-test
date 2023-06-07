import React, { FC } from 'react';
import { Avatar, Card, Typography } from "components";
import { IUser } from "interfaces/user";

interface IUserItem {
  user: IUser;
}

export const UserItem: FC<IUserItem> = ({
                                          user: {
                                            name,
                                            position,
                                            email,
                                            photo,
                                            phone,
                                          },
                                        }) => {
  return (
    <Card>
      <div className="users__item">
        <Avatar src={photo}/>
        <Typography
          style={{ marginBottom: "20px" }}
        >
          {name}
        </Typography>
        <Typography
        >
          {position}
        </Typography>
        <Typography
        >
          {email}
        </Typography>
        <Typography
        >
          {phone}
        </Typography>
      </div>
    </Card>
  );
};
