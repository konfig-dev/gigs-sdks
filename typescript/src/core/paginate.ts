import { Page, PageInfo, PageParameters } from "./Page";
import { Request } from "./Pageable";

export const paginate = <Data extends PageInfo>(
  request: Request<Data>,
  initialParameters: PageParameters
): Promise<Page<Data>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await request(initialParameters);
      resolve(
        new Page<Data>({
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
