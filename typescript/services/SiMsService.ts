/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { sim } from '../models/sim';
import type { simCredentials } from '../models/simCredentials';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SiMsService {

    /**
     * Retrieve a SIM
     * Retrieve the details of an existing SIM which the authenticated user is authorized to view.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the SIM.
     * @returns sim Returns the SIM if it exists.
     * @throws ApiError
     */
    public static siMsRetrieve(
        project: string,
        id: string,
    ): CancelablePromise<sim> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/sims/{id}',
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
     * Retrieve the SIM credentials
     * Retrieve the credentials of an existing SIM.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the SIM.
     * @returns simCredentials Returns the SIM credentials.
     * @throws ApiError
     */
    public static siMsCredentialsRetrieve(
        project: string,
        id: string,
    ): CancelablePromise<simCredentials> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/sims/{id}/credentials',
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
     * Search for SIMs
     * Searches for existing SIMs matching the given parameters.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param requestBody SIM attributes to search for.
     * @returns any Returns a list schema response with all found SIMs.
     * @throws ApiError
     */
    public static siMsSearch(
        project: string,
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
    ): CancelablePromise<{
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
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{project}/sims/search',
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
     * List all SIMs
     * Returns a list of SIMs. The SIMs returned are sorted by creation date, with the most recently created SIMs appearing first.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param provider The network provider ID for the sim to be filtered by.
     * @param status A comma-separated list of statuses to filter the sims by.
     * @param type The type for the sim to be filtered by.
     * @param user The unique identifier for the user to be filtered by.
     * @param after A cursor for use in pagination. The `after` parameter takes an object ID that defines the position in the list, only items immediately following the item with that ID will be returned.
     * @param before A cursor for use in pagination. The `before` parameter takes an object ID that defines the position in the list, only items immediately preceding the item with that ID will be returned.
     * @param limit The limit of items to be returned in the list, between 0 and 200.
     * @returns any Returns a dictionary with an items property that contains an array of SIMs.
     * @throws ApiError
     */
    public static siMsList(
        project: string,
        provider?: Array<string>,
        status?: Array<'inactive' | 'active' | 'retired'>,
        type?: 'eSIM' | 'pSIM',
        user?: string,
        after?: string,
        before?: string,
        limit: number = 10,
    ): CancelablePromise<{
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
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/sims',
            path: {
                'project': project,
            },
            query: {
                'provider': provider,
                'status': status,
                'type': type,
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

}
