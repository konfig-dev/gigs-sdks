/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from '../models/user';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    public readonly project: string;

    constructor(public readonly httpRequest: BaseHttpRequest, project: string) {
        this.project = project
    }

    /**
     * Retrieve a user
     * Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.
     * @returns user Returns the user object if the user exists.
     * @throws ApiError
     */
    public retrieve({
        id,
    }: {
        /**
         * The unique identifier for the user.
         */
        id: string,
    }): CancelablePromise<user> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/users/{id}',
            path: {
                'project': this.project

                ,
                'id':
                id
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Delete a user
     * Retrieves the details of an existing user and deletes it.
     * @returns user Returns the user after a successful deletion.
     * @throws ApiError
     */
    public delete({
        id,
    }: {
        /**
         * The unique identifier for the user.
         */
        id: string,
    }): CancelablePromise<user> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project}/users/{id}',
            path: {
                'project': this.project

                ,
                'id':
                id
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Update a user
     * Updates the specified user by setting the values of the parameters passed.
     * @returns user Returns the updated user.
     * @throws ApiError
     */
    public update({
        id,
        requestBody,
    }: {
        /**
         * The unique identifier for the user.
         */
        id: string,
        /**
         * User attributes to update.
         */
        requestBody: {
            /**
             * Type of object is always `user`.
             * @deprecated
             */
            object?: string;
            /**
             * The birthday of the user.
             */
            birthday?: string;
            /**
             * The primary verified email address of the user.
             */
            email?: string;
            /**
             * The user's full name. Required for some Plans.
             */
            fullName?: string;
            /**
             * The user's locale preference represented as an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
             */
            preferredLocale?: string;
        },
    }): CancelablePromise<user> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project}/users/{id}',
            path: {
                'project': this.project

                ,
                'id':
                id
                ,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Search for users
     * Searches for existing users matching the given parameters.
     * @returns any Returns the users matching the search criteria.
     * @throws ApiError
     */
    public search({
        requestBody,
    }: {
        /**
         * User attributes to search by.
         */
        requestBody: {
            /**
             * The primary email address of the user.
             */
            email: string;
        },
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `user`.
         */
        items: Array<user>;
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
            url: '/projects/{project}/users/search',
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
     * List all users
     * Returns a list of users. The users returned are sorted by creation date, with the most recently created users appearing first.
     * @returns any Returns a dictionary with an items property that contains an array of user objects.
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
         * List of objects of type `user`.
         */
        items: Array<user>;
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
            url: '/projects/{project}/users',
            path: {
                'project': this.project

                ,
            },
            query: {
                'after':
                after
                ,
                'before':
                before
                ,
                'limit':
                limit
                ,
            },
        });
    }

    /**
     * Create a user
     * Creates a new user with the given parameters.
     * @returns user Returns the created user.
     * @throws ApiError
     */
    public create({
        requestBody,
    }: {
        /**
         * User attributes to create.
         */
        requestBody: {
            /**
             * Type of object is always `user`.
             * @deprecated
             */
            object?: string;
            /**
             * The birthday of the user.
             */
            birthday?: string | null;
            /**
             * The primary verified email address of the user.
             */
            email: string;
            /**
             * The user's full name. Some plans require the user name to be present when creating a subscription. Check the plan requirements for that.
             */
            fullName?: string | null;
            /**
             * The user's locale preference represented as an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). It defaults to the project's preferred locale.
             */
            preferredLocale?: string;
        },
    }): CancelablePromise<user> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/users',
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

}
