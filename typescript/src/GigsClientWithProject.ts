/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { GigsClient } from "./GigsClient";

import { DevicesService } from './services/DevicesServiceWithProject';
import { PlansService } from './services/PlansServiceWithProject';
import { ProjectsService } from './services/ProjectsServiceWithProject';
import { SiMsService } from './services/SiMsServiceWithProject';
import { SubscriptionsService } from './services/SubscriptionsServiceWithProject';
import { UsageService } from './services/UsageServiceWithProject';
import { UserAddressesService } from './services/UserAddressesServiceWithProject';
import { UsersService } from './services/UsersServiceWithProject';

export class GigsClientWithProject {

    public readonly devices: DevicesService;
    public readonly plans: PlansService;
    public readonly projects: ProjectsService;
    public readonly siMs: SiMsService;
    public readonly subscriptions: SubscriptionsService;
    public readonly usage: UsageService;
    public readonly userAddresses: UserAddressesService;
    public readonly users: UsersService;

    public readonly project: string;
    public readonly parent: GigsClient;

    constructor(project: string, parent: GigsClient) {
        this.parent = parent
        this.project = project
        this.devices = new DevicesService(this.parent.request, this.project);
        this.plans = new PlansService(this.parent.request, this.project);
        this.projects = new ProjectsService(this.parent.request, this.project);
        this.siMs = new SiMsService(this.parent.request, this.project);
        this.subscriptions = new SubscriptionsService(this.parent.request, this.project);
        this.usage = new UsageService(this.parent.request, this.project);
        this.userAddresses = new UserAddressesService(this.parent.request, this.project);
        this.users = new UsersService(this.parent.request, this.project);
    }
}
