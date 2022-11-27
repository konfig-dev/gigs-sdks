/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscription } from '../models/subscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Cancel an active subscription
     * Retrieves the details of an existing subscription and schedules termination of the plan at the end of the next renewal date. You need only supply the unique subscription identifier that was returned upon purchasing a plan.
     * @returns subscription Returns the subscription after a successful cancellation.
     * @throws ApiError
     */
    public subscriptionsCancel({
        project,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the subscription.
         */
        id: string,
    }): CancelablePromise<subscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/subscriptions/{id}/cancel',
            path: {
                'project': project,
                'id': id,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Retrieve a subscription
     * Retrieves the details of an existing subscription. You need only supply the unique subscription identifier that was returned upon purchasing a plan.
     * @returns subscription Returns the subscription if it exists.
     * @throws ApiError
     */
    public subscriptionsRetrieve({
        project,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the subscription.
         */
        id: string,
    }): CancelablePromise<subscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/subscriptions/{id}',
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
     * End an active subscription
     * Ends an active plan subscription immediately. You only need to supply the unique subscription identifier that was returned upon purchasing a plan.
     * @returns subscription Returns the ended subscription after a successful termination.
     * @throws ApiError
     */
    public subscriptionsEnd({
        project,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the subscription.
         */
        id: string,
    }): CancelablePromise<subscription> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project}/subscriptions/{id}',
            path: {
                'project': project,
                'id': id,
            },
            errors: {
                403: `The authenticated user doesn't have permissions to perform the request.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Resume a canceled subscription
     * Removes the cancellation and end times of the subscription. The subscription will continue to auto-renew until canceled again.
     * @returns subscription Returns the resumed subscription.
     * @throws ApiError
     */
    public subscriptionsResume({
        project,
        id,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the subscription.
         */
        id: string,
    }): CancelablePromise<subscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/subscriptions/{id}/resume',
            path: {
                'project': project,
                'id': id,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * List all subscriptions
     * Returns a list of subscriptions. The subscriptions returned are sorted by creation date, with the most recently created subscriptions appearing first.
     * @returns any Returns a list of subscription objects.
     * @throws ApiError
     */
    public subscriptionsList({
        project,
        user,
        plan,
        sim,
        status,
        after,
        before,
        limit = 10,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * The unique identifier for the user to be filtered by.
         */
        user?: string,
        /**
         * The unique identifier for the plan to be filtered by.
         */
        plan?: string,
        /**
         * The unique identifier for the sim to be filtered by.
         */
        sim?: string,
        /**
         * A comma-separated list of statuses to filter the subscriptions by. Only pending and active subscriptions are returned by default.
         */
        status?: Array<'pending' | 'active' | 'ended'>,
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
         * List of objects of type `subscription`.
         */
        items: Array<subscription>;
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
            url: '/projects/{project}/subscriptions',
            path: {
                'project': project,
            },
            query: {
                'user': user,
                'plan': plan,
                'sim': sim,
                'status': status,
                'after': after,
                'before': before,
                'limit': limit,
            },
        });
    }

    /**
     * Create a subscription
     * Creates a new subscription for an existing user in the specified project.
     * @returns subscription Returns the newly created subscription and supporting objects.
     * @throws ApiError
     */
    public subscriptionsCreate({
        project,
        requestBody,
    }: {
        /**
         * The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
         */
        project: string,
        /**
         * Optional and required parameters to be passed in the request body to create a new subscription:
         */
        requestBody: {
            /**
             * The unique identifier for the existing [plan](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzA-retrieve-a-plan) to be used for the subscription.
             */
            plan: string;
            /**
             * The unique identifier for the existing [SIM](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzQ-retrieve-a-sim) to be used for the subscription. In combination with an eSIM plan, it can be omitted to request a new eSIM.
             */
            sim?: string | null;
            /**
             * The unique identifier for the existing [user address](https://developers.gigs.com/docs/api/b3A6MzMwODcxNDk-retrieve-a-user-address) to be used for the subscription. Only needed if the plan requires an address.
             */
            userAddress?: string | null;
            /**
             * The unique identifier for the existing [user](https://developers.gigs.com/docs/api/b3A6MzMwODcxNDM-retrieve-a-user) to which the subscription will be assigned.
             */
            user: string;
        },
    }): CancelablePromise<subscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/subscriptions',
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

}
