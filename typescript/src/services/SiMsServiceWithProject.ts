/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { sim } from '../models/sim';
import type { simCredentials } from '../models/simCredentials';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SiMsService {

    public readonly project: string;

    constructor(public readonly httpRequest: BaseHttpRequest, project: string) {
        this.project = project
    }

    /**
     * Retrieve a SIM
     * Retrieve the details of an existing SIM which the authenticated user is authorized to view.
     * @returns sim Returns the SIM if it exists.
     * @throws ApiError
     */
    public retrieve({
        id,
    }: {
        /**
         * The unique identifier for the SIM.
         */
        id: string,
    }): CancelablePromise<sim> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/sims/{id}',
            path: {
                'project': this.project
                ,
                'id': id
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Retrieve the SIM credentials
     * Retrieve the credentials of an existing SIM.
     * @returns simCredentials Returns the SIM credentials.
     * @throws ApiError
     */
    public credentialsRetrieve({
        id,
    }: {
        /**
         * The unique identifier for the SIM.
         */
        id: string,
    }): CancelablePromise<simCredentials> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/sims/{id}/credentials',
            path: {
                'project': this.project
                ,
                'id': id
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Search for SIMs
     * Searches for existing SIMs matching the given parameters.
     * @returns any Returns a list schema response with all found SIMs.
     * @throws ApiError
     */
    public search({
        requestBody,
    }: {
        /**
         * SIM attributes to search for.
         */
        requestBody: {
            /**
             * The ICCID (integrated circuit card identifier) associated with the SIM.
             */
            iccid: string;
            /**
             * Optional type of the SIM card, either `eSIM`, `pSIM` or both.
             */
            type?: Array<'eSIM' | 'pSIM'>;
        },
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `sim`.
         */
        items: Array<sim>;
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
            url: '/projects/{project}/sims/search',
            path: {
                'project': this.project
                ,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * List all SIMs
     * Returns a list of SIMs. The SIMs returned are sorted by creation date, with the most recently created SIMs appearing first.
     * @returns any Returns a dictionary with an items property that contains an array of SIMs.
     * @throws ApiError
     */
    public list({
        provider,
        status,
        type,
        user,
        after,
        before,
        limit = 10,
    }: {
        /**
         * The network provider ID for the sim to be filtered by.
         */
        provider?: Array<string>,
        /**
         * A comma-separated list of statuses to filter the sims by.
         */
        status?: Array<'inactive' | 'active' | 'retired'>,
        /**
         * The type for the sim to be filtered by.
         */
        type?: 'eSIM' | 'pSIM',
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
         * List of objects of type `sim`.
         */
        items: Array<sim>;
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
            url: '/projects/{project}/sims',
            path: {
                'project': this.project
                ,
            },
            query: {
                'provider': provider
                ,
                'status': status
                ,
                'type': type
                ,
                'user': user
                ,
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

}
