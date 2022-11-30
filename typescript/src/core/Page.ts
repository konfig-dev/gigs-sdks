import { Pageable } from "./Pageable";

interface PageParameters {
  after?: string;
  before?: string;
  limit?: number;
}

interface PageInfo {
  moreItemsAfter: string | null;
  moreItemsBefore: string | null;
}

export class Page<Data> extends Pageable<Data & PageInfo, PageParameters> {
  async prev(): Promise<Page<Data> | null> {
    const before = (await this.data).moreItemsBefore;
    if (before === null) return null;
    const data = this.request({ before });
    return new Page(data, this.initialParameters, this.request);
  }

  async next(): Promise<Page<Data> | null> {
    const after = (await this.data).moreItemsAfter;
    if (after === null) return null;
    const data = this.request({ after });
    return new Page(data, this.initialParameters, this.request);
  }
}
