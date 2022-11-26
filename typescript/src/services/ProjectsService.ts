/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { project } from '../models/project';
import type { projectSetting } from '../models/projectSetting';

import type { CancelablePromise } from '../core/CancelablePromise';
import { Config } from '../core/Config';
import { request as __request } from '../core/request';

export class ProjectsService {

    /**
     * Retrieve a project
     * Retrieves the details of an existing project accessible by the API client.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @returns project Returns the project object if it exists.
     * @throws ApiError
     */
    public static projectsRetrieve(
        project: string,
    ): CancelablePromise<project> {
        return __request(Config, {
            method: 'GET',
            url: '/projects/{project}',
            path: {
                'project': project,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * List all projects
     * Returns a list of projects. The projects returned are sorted by creation date, with the most recently created projects appearing first.
     * @param after A cursor for use in pagination. The `after` parameter takes an object ID that defines the position in the list, only items immediately following the item with that ID will be returned.
     * @param before A cursor for use in pagination. The `before` parameter takes an object ID that defines the position in the list, only items immediately preceding the item with that ID will be returned.
     * @param limit The limit of items to be returned in the list, between 0 and 200.
     * @returns any Returns a dictionary with an items property that contains an array of projects.
     * @throws ApiError
     */
    public static projectsList(
        after?: string,
        before?: string,
        limit: number = 10,
    ): CancelablePromise<{
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
        return __request(Config, {
            method: 'GET',
            url: '/projects',
            query: {
                'after': after,
                'before': before,
                'limit': limit,
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
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param name The unique identifier of the application the project setting applies to.
     * @returns projectSetting Returns the project setting object if it exists.
     * @throws ApiError
     */
    public static projectSettingsRetrieve(
        project: string,
        name: string,
    ): CancelablePromise<projectSetting> {
        return __request(Config, {
            method: 'GET',
            url: '/projects/{project}/settings/{name}',
            path: {
                'project': project,
                'name': name,
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
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param after A cursor for use in pagination. The `after` parameter takes an object ID that defines the position in the list, only items immediately following the item with that ID will be returned.
     * @param before A cursor for use in pagination. The `before` parameter takes an object ID that defines the position in the list, only items immediately preceding the item with that ID will be returned.
     * @param limit The limit of items to be returned in the list, between 0 and 200.
     * @returns any Returns a list of project setting objects.
     * @throws ApiError
     */
    public static projectSettingsList(
        project: string,
        after?: string,
        before?: string,
        limit: number = 10,
    ): CancelablePromise<{
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
        return __request(Config, {
            method: 'GET',
            url: '/projects/{project}/settings',
            path: {
                'project': project,
            },
            query: {
                'after': after,
                'before': before,
                'limit': limit,
            },
        });
    }

}
