/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { ConfigType } from "./core/Config";
import { NodeHttpRequest } from "./core/NodeHttpRequest";
import { GigsClientWithProject } from "./GigsClientWithProject";

import { DevicesService } from "./services/DevicesService";
import { PlansService } from "./services/PlansService";
import { ProjectsService } from "./services/ProjectsService";
import { SiMsService } from "./services/SiMsService";
import { SubscriptionsService } from "./services/SubscriptionsService";
import { UsageService } from "./services/UsageService";
import { UserAddressesService } from "./services/UserAddressesService";
import { UsersService } from "./services/UsersService";

type HttpRequestConstructor = new (config: ConfigType) => BaseHttpRequest;

export class GigsClient {
  public readonly devices: DevicesService;
  public readonly plans: PlansService;
  public readonly projects: ProjectsService;
  public readonly siMs: SiMsService;
  public readonly subscriptions: SubscriptionsService;
  public readonly usage: UsageService;
  public readonly userAddresses: UserAddressesService;
  public readonly users: UsersService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<ConfigType>,
    HttpRequest: HttpRequestConstructor = NodeHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "http://localhost:4010",
      VERSION: config?.VERSION ?? "2022-09-28",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.devices = new DevicesService(this.request);
    this.plans = new PlansService(this.request);
    this.projects = new ProjectsService(this.request);
    this.siMs = new SiMsService(this.request);
    this.subscriptions = new SubscriptionsService(this.request);
    this.usage = new UsageService(this.request);
    this.userAddresses = new UserAddressesService(this.request);
    this.users = new UsersService(this.request);
  }

  project(project: string): GigsClientWithProject {
    return new GigsClientWithProject(project, this);
  }
}
