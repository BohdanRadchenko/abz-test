import { IUserPositionRequest } from "interfaces/user";
import { TRadioOptions } from "components";

export const positionOptionsDto = (positions: IUserPositionRequest["positions"]): TRadioOptions<number>[] => {
  return positions
    .map(({ id, name }) => ( { value: id, label: name } ))
}
