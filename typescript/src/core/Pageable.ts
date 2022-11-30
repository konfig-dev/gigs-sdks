import { CancelablePromise } from "./CancelablePromise";

type Request<Data, PageParameters> = (
  parameters: PageParameters
) => CancelablePromise<Data>;

export abstract class Pageable<Data, PageParameters> {
  readonly data: CancelablePromise<Data>;
  readonly initialParameters: PageParameters;
  readonly request: Request<Data, PageParameters>;

  abstract prev(): Promise<Pageable<Data, PageParameters> | null>;
  abstract next(): Promise<Pageable<Data, PageParameters> | null>;

  constructor(
    data: CancelablePromise<Data>,
    initialParameters: PageParameters,
    getPage: Request<Data, PageParameters>
  ) {
    this.data = data;
    this.request = getPage;
    this.initialParameters = initialParameters;
  }
}
