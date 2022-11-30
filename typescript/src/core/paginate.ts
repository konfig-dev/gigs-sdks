/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Page, PageInfo, PageParameters } from "./Page";
import { Request } from "./Pageable";

export const paginate = <
  Data extends PageInfo,
  Parameters extends PageParameters
>(
  request: Request<Data, Parameters>,
  initialParameters: Parameters
): Promise<Page<Data, Parameters>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await request(initialParameters);
      resolve(
        new Page<Data, Parameters>({
          data,
          initialParameters,
          request: (parameters) => request(parameters),
        })
      );
    } catch (error) {
      reject(error);
    }
  });
};
