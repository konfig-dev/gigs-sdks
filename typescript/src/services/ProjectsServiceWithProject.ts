/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { project } from '../models/project';
import type { projectSetting } from '../models/projectSetting';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectsService {

    public readonly project: string;

    constructor(public readonly httpRequest: BaseHttpRequest, project: string) {
        this.project = project
    }

    /**
     * Retrieve a project
     * Retrieves the details of an existing project accessible by the API client.
     * @returns project Returns the project object if it exists.
     * @throws ApiError
     */
    public retrieve(): CancelablePromise<project> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}',
            path: {
                'project': this.project
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * List all projects
     * Returns a list of projects. The projects returned are sorted by creation date, with the most recently created projects appearing first.
     * @returns any Returns a dictionary with an items property that contains an array of projects.
     * @throws ApiError
     */
    public list({
        after,
        before,
        limit = 10,
    }: {
        /**
         * A cursor for use in pagination. The `after` parameter takes an object ID that defines the position in the list, only items immediately following the item with that ID will be returned.
         */
        after?: string,
        /**
         * A cursor for use in pagination. The `before` parameter takes an object ID that defines the position in the list, only items immediately preceding the item with that ID will be returned.
         */
        before?: string,
        /**
         * The limit of items to be returned in the list, between 0 and 200.
         */
        limit?: number,
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `project`.
         */
        items: Array<project>;
        /**
         * A unique identifier to be used as `after` pagination parameter if more items are available sorted after the current batch of items.
         */
        moreItemsAfter: string | null;
        /**
         * A unique identifier to be used as `before` pagination parameter if more items are available sorted before the current batch of items.
         */
        moreItemsBefore: string | null;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects',
            query: {
                'after': after
                ,
                'before': before
                ,
                'limit': limit
                ,
            },
            errors: {
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Retrieve a project setting
     * Retrieves the details of an existing project application setting.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This endpoint is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     * @returns projectSetting Returns the project setting object if it exists.
     * @throws ApiError
     */
    public ettingsRetrieve({
        name,
    }: {
        /**
         * The unique identifier of the application the project setting applies to.
         */
        name: string,
    }): CancelablePromise<projectSetting> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/settings/{name}',
            path: {
                'project': this.project
                ,
                'name': name
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * List all project settings
     * Returns a list of project settings.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This endpoint is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     * @returns any Returns a list of project setting objects.
     * @throws ApiError
     */
    public ettingsList({
        after,
        before,
        limit = 10,
    }: {
        /**
         * A cursor for use in pagination. The `after` parameter takes an object ID that defines the position in the list, only items immediately following the item with that ID will be returned.
         */
        after?: string,
        /**
         * A cursor for use in pagination. The `before` parameter takes an object ID that defines the position in the list, only items immediately preceding the item with that ID will be returned.
         */
        before?: string,
        /**
         * The limit of items to be returned in the list, between 0 and 200.
         */
        limit?: number,
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `projectSetting`.
         */
        items: Array<projectSetting>;
        /**
         * A unique identifier to be used as `after` pagination parameter if more items are available sorted after the current batch of items.
         */
        moreItemsAfter: string | null;
        /**
         * A unique identifier to be used as `before` pagination parameter if more items are available sorted before the current batch of items.
         */
        moreItemsBefore: string | null;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/settings',
            path: {
                'project': this.project
                ,
            },
            query: {
                'after': after
                ,
                'before': before
                ,
                'limit': limit
                ,
            },
        });
    }

}