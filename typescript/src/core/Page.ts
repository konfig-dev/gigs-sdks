import { Pageable } from "./Pageable";

export interface PageParameters {
  after?: string;
  before?: string;
}

export interface PageInfo {
  moreItemsAfter: string | null;
  moreItemsBefore: string | null;
}

export class Page<
  Data extends PageInfo,
  Parameters extends PageParameters
> extends Pageable<Data, Parameters> {
  async prev(): Promise<Page<Data, Parameters> | null> {
    const before = this.data.moreItemsBefore;
    if (before === null) return null;
    const data = await this.makeRequest({ before });
    return this.withData(data);
  }

  async next(): Promise<Page<Data, Parameters> | null> {
    const after = this.data.moreItemsAfter;
    if (after === null) return null;
    const data = await this.makeRequest({ after });
    return this.withData(data);
  }
}
