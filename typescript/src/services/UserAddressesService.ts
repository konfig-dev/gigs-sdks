/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { userAddress } from '../models/userAddress';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserAddressesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all user addresses
     * Returns a list of addresses owned by the given user. The addresses returned are sorted by creation date, with the most recently created addresses appearing first.
     * @returns any Returns a list of address objects.
     * @throws ApiError
     */
    public userAddressesList({
        project,
        user,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the user.
         */
        user: string,
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `userAddress`.
         */
        items: Array<userAddress>;
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
            url: '/projects/{project}/users/{user}/addresses',
            path: {
                'project': project,
                'user': user,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Create a user address
     * Create a new address for the given user with the given parameters.
     * @returns userAddress Returns the created address.
     * @throws ApiError
     */
    public userAddressesCreate({
        project,
        user,
        requestBody,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the user.
         */
        user: string,
        /**
         * User address attributes to create.
         */
        requestBody: {
            /**
             * Type of object is always `userAddress`.
             * @deprecated
             */
            object?: string;
            /**
             * The first line of the given street address, e.g. street and house number.
             */
            line1: string;
            /**
             * The second line of the given street address, e.g. Apartment number.
             */
            line2?: string | null;
            /**
             * The city/municipality of the given street address.
             */
            city: string;
            /**
             * The state/province/region of the given street address. Required for US/CA addresses to be a valid ISO 3166-2 2 letter code.
             */
            state?: string | null;
            /**
             * The postal code of the given street address. Required for countries with postal codes.
             */
            postalCode?: string | null;
            /**
             * The ISO 3166-1 alpha-2 country code for the given address.
             */
            country: string;
        },
    }): CancelablePromise<userAddress> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/users/{user}/addresses',
            path: {
                'project': project,
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The address creation request can't be processed, due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Retrieve a user address
     * Retrieves the details of an existing address for a given user.
     * @returns userAddress Returns the address if it exists and is owned by the user.
     * @throws ApiError
     */
    public userAddressesRetrieve({
        project,
        user,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the user.
         */
        user: string,
        /**
         * The unique identifier for the address.
         */
        id: string,
    }): CancelablePromise<userAddress> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/users/{user}/addresses/{id}',
            path: {
                'project': project,
                'user': user,
                'id': id,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Delete a user address
     * Retrieves the details of an existing user address and deletes it.
     * @returns userAddress Returns the address after a successful deletion.
     * @throws ApiError
     */
    public userAddressesDelete({
        project,
        user,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the user.
         */
        user: string,
        /**
         * The unique identifier for the address.
         */
        id: string,
    }): CancelablePromise<userAddress> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project}/users/{user}/addresses/{id}',
            path: {
                'project': project,
                'user': user,
                'id': id,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

}
