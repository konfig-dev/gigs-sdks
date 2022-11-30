/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { CancelablePromise } from "./CancelablePromise";
import { Page, PageInfo, PageParameters } from "./Page";

export type Request<
  Data extends PageInfo,
  Parameters extends PageParameters
> = (parameters: Parameters) => CancelablePromise<Data>;

export abstract class Pageable<
  Data extends PageInfo,
  Parameters extends PageParameters
> {
  readonly data: Data;
  readonly initialParameters: Parameters;
  private readonly _request: Request<Data, Parameters>;

  abstract prev(): Promise<Pageable<Data, Parameters> | null>;
  abstract next(): Promise<Pageable<Data, Parameters> | null>;

  /**
   * Helper for invoking a request
   */
  makeRequest(parameters: PageParameters): CancelablePromise<Data> {
    return this._request({ ...this.initialParameters, ...parameters });
  }

  /**
   * Helper for creating new page
   */
  withData(data: Data): Page<Data, Parameters> {
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
    initialParameters: Parameters;
    request: Request<Data, Parameters>;
  }) {
    this.data = data;
    this._request = request;
    this.initialParameters = initialParameters;
  }
}
