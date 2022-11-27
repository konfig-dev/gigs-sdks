/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { device } from '../models/device';
import type { deviceModel } from '../models/deviceModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DevicesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve a device model
     * Retrieves the details of an existing device model.
     * @returns deviceModel Returns the device model object if it exists.
     * @throws ApiError
     */
    public deviceModelsRetrieve({
        id,
    }: {
        /**
         * The unique identifier for the device model.
         */
        id: string,
    }): CancelablePromise<deviceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deviceModels/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * List all device models
     * Returns a list of device models. The models returned are sorted by creation date, with the most recently created models appearing first.
     * @returns any Returns a dictionary with an items property that contains an array of device models.
     * @throws ApiError
     */
    public deviceModelsList({
        type,
        brand,
        simType,
        after,
        before,
        limit = 10,
    }: {
        /**
         * A comma-separated list of types to be filtered by.
         */
        type?: Array<'car' | 'iot' | 'laptop' | 'router' | 'smartphone' | 'feature-phone' | 'smartwatch' | 'tablet' | 'wearable' | 'other'>,
        /**
         * A comma-separated list of brands to be filtered by.
         */
        brand?: Array<string>,
        /**
         * A comma-separated list of SIM types to be filtered by.
         */
        simType?: Array<'eSIM' | 'pSIM'>,
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
         * List of objects of type `deviceModel`.
         */
        items: Array<deviceModel>;
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
            url: '/deviceModels',
            query: {
                'type': type,
                'brand': brand,
                'simType': simType,
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
     * Search for device models
     * Searches for existing devices models matching the given parameters.
     * @returns any Returns a list schema response with all found device models.
     * @throws ApiError
     */
    public deviceModelsSearch({
        requestBody,
    }: {
        /**
         * Device model attributes to search for.
         */
        requestBody: {
            /**
             * The IMEI (international mobile equipment identity) of the corresponding device.
             */
            imei: string;
        },
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `deviceModel`.
         */
        items: Array<deviceModel>;
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
            method: 'POST',
            url: '/deviceModels/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Retrieve a device
     * Retrieves the details of an existing device owned by the authenticated user.
     * @returns device Returns the device object if it exists.
     * @throws ApiError
     */
    public devicesRetrieve({
        project,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the device.
         */
        id: string,
    }): CancelablePromise<device> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/devices/{id}',
            path: {
                'project': project,
                'id': id,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Delete a device
     * Retrieves the details of an existing device and deletes it.
     * @returns device Returns the device after a successful deletion.
     * @throws ApiError
     */
    public devicesDelete({
        project,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the device.
         */
        id: string,
    }): CancelablePromise<device> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project}/devices/{id}',
            path: {
                'project': project,
                'id': id,
            },
            errors: {
                403: `The authenticated user doesn't have permissions to perform the request.`,
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Update a device
     * Updates the given properties of an existing device.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This endpoint is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     * @returns device Returns the updated device object.
     * @throws ApiError
     */
    public devicesUpdate({
        project,
        id,
        requestBody,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the device.
         */
        id: string,
        /**
         * The device properties to update, at least one of them must be provided. Use null or an empty array to remove existing values.
         */
        requestBody: {
            /**
             * An optional custom name for the device.
             */
            name?: string | null;
            /**
             * List of identifiers for all SIMs currently attached to the device.
             */
            sims?: Array<string>;
            /**
             * Unique user identifier for the device owner.
             */
            user?: string | null;
        },
    }): CancelablePromise<device> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project}/devices/{id}',
            path: {
                'project': project,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `The authenticated user doesn't have permissions to perform the request.`,
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Search for devices
     * Searches for existing devices matching the given parameters. The search will only return factory devices not yet assigned to any user, or devices already owned by the current user.
     * @returns any Returns a list schema response with all found devices.
     * @throws ApiError
     */
    public devicesSearch({
        project,
        requestBody,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * Device attributes to search for.
         */
        requestBody: {
            /**
             * The IMEI (international mobile equipment identity) of the device.
             */
            imei: string;
        },
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `device`.
         */
        items: Array<device>;
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
            method: 'POST',
            url: '/projects/{project}/devices/search',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * List all devices
     * Returns a list of devices. The devices returned are sorted by creation date, with the most recently created devices appearing first.
     * @returns any Returns a dictionary with an items property that contains an array of devices.
     * @throws ApiError
     */
    public devicesList({
        project,
        sim,
        user,
        after,
        before,
        limit = 10,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the sim to be filtered by.
         */
        sim?: string,
        /**
         * The unique identifier for the user to be filtered by.
         */
        user?: string,
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
         * List of objects of type `device`.
         */
        items: Array<device>;
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
            url: '/projects/{project}/devices',
            path: {
                'project': project,
            },
            query: {
                'sim': sim,
                'user': user,
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
     * Create a device
     * Creates a new device with the given parameters.
     * @returns device Returns the created device.
     * @throws ApiError
     */
    public devicesCreate({
        project,
        requestBody,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * Device attributes to create. You must specify either an IMEI or a user.
         */
        requestBody: {
            /**
             * The IMEI (international mobile equipment identity) of the device.
             */
            imei: string;
            /**
             * Unique user identifier for the device owner.
             */
            user: string;
            /**
             * List of identifiers for all SIMs to attach to the device.
             */
            sims?: Array<string>;
            /**
             * An optional custom name for the device.
             */
            name?: string | null;
        },
    }): CancelablePromise<device> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/devices',
            path: {
                'project': project,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

}
