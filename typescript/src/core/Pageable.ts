import { CancelablePromise } from "./CancelablePromise";
import { Page, PageInfo, PageParameters } from "./Page";

type Request<Data> = (parameters: PageParameters) => CancelablePromise<Data>;

export abstract class Pageable<Data extends PageInfo> {
  readonly data: Data;
  readonly initialParameters: PageParameters;
  private readonly _request: Request<Data>;

  abstract prev(): Promise<Pageable<Data> | null>;
  abstract next(): Promise<Pageable<Data> | null>;

  /**
   * Helper for invoking a request
   */
  makeRequest(parameters: PageParameters): CancelablePromise<Data> {
    return this._request({ ...this.initialParameters, ...parameters });
  }

  /**
   * Helper for creating new page
   */
  withData(data: Data): Page<Data> {
    return new Page({
      data,
      initialParameters: this.initialParameters,
      request: this._request,
    });
  }

  constructor({
    data,
    initialParameters,
    request,
  }: {
    data: Data;
    initialParameters: PageParameters;
    request: Request<Data>;
  }) {
    this.data = data;
    this._request = request;
    this.initialParameters = initialParameters;
  }
}
