/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { plan } from '../models/plan';
import type { planDocument } from '../models/planDocument';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlansService {

    public readonly project: string;

    constructor(public readonly httpRequest: BaseHttpRequest, project: string) {
        this.project = project
    }

    /**
     * Retrieve a plan document
     * Retrieves the details of an existing document for a given plan.
     * @returns planDocument Returns the plan if it exists and is owned by the plan.
     * @throws ApiError
     */
    public planDocumentRetrieve({
        plan,
        id,
    }: {
        /**
         * The unique identifier for the plan.
         */
        plan: string,
        /**
         * The unique identifier for the document.
         */
        id: string,
    }): CancelablePromise<planDocument> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/plans/{plan}/documents/{id}',
            path: {
                'project': this.project
                ,
                'plan': plan
                ,
                'id': id
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * List all plan documents
     * Returns a list of documents related to the given plan. The documents returned are sorted by creation date, with the most recently created documents appearing first.
     * @returns any Returns a list of document objects.
     * @throws ApiError
     */
    public planDocumentsList({
        plan,
    }: {
        /**
         * The unique identifier for the plan.
         */
        plan: string,
    }): CancelablePromise<{
        /**
         * Type of object is always `list`.
         */
        object: string;
        /**
         * List of objects of type `planDocument`.
         */
        items: Array<planDocument>;
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
            url: '/projects/{project}/plans/{plan}/documents',
            path: {
                'project': this.project
                ,
                'plan': plan
                ,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Retrieve a plan
     * Retrieve the details of an existing plan.
     * @returns plan Returns the plan if it exists.
     * @throws ApiError
     */
    public retrieve({
        id,
    }: {
        /**
         * The unique identifier for the plan.
         */
        id: string,
    }): CancelablePromise<plan> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project}/plans/{id}',
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
     * Update a plan
     * Updates the specified plan by setting the values of the parameters passed.
     * @returns plan Returns the updated plan.
     * @throws ApiError
     */
    public update({
        id,
        requestBody,
    }: {
        /**
         * The unique identifier for the plan.
         */
        id: string,
        /**
         * Plan attributes to update.
         */
        requestBody: {
            /**
             * The plan's name, meant to be displayable to the users.
             */
            name?: string;
            /**
             * The plan's description, meant to be displayable to the users.
             */
            description?: string | null;
            /**
             * The plan's image, meant to be displayable to the users.
             */
            image?: string | null;
        },
    }): CancelablePromise<plan> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project}/plans/{id}',
            path: {
                'project': this.project
                ,
                'id': id
                ,
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
     * Archive a plan
     * Set the status of a plan to archived. An archived plan can not be used to create new subscriptions.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This endpoint is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     * @returns plan Returns the archived plan.
     * @throws ApiError
     */
    public archive({
        id,
    }: {
        /**
         * The unique identifier for the plan.
         */
        id: string,
    }): CancelablePromise<plan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/plans/{id}/archive',
            path: {
                'project': this.project
                ,
                'id': id
                ,
            },
            errors: {
                403: `The authenticated user doesn't have permissions to perform the request.`,
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * Publish a plan
     * Set the status of a plan to available. Available plans can be used to create new subscriptions.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This endpoint is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     * @returns plan Returns the available plan.
     * @throws ApiError
     */
    public publish({
        id,
    }: {
        /**
         * The unique identifier for the plan.
         */
        id: string,
    }): CancelablePromise<plan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project}/plans/{id}/publish',
            path: {
                'project': this.project
                ,
                'id': id
                ,
            },
            errors: {
                403: `The authenticated user doesn't have permissions to perform the request.`,
                404: `The requested resource doesn't exist.`,
                422: `The request can't be processed, often due to an invalid parameter or incompatible system state.`,
            },
        });
    }

    /**
     * List all plans
     * Returns a list of plans.
     * @returns any Returns a list of plan objects.
     * @throws ApiError
     */
    public list({
        provider,
        simType,
        status,
        after,
        before,
        limit = 10,
    }: {
        /**
         * The network provider ID to filter the plans by.
         */
        provider?: Array<string>,
        /**
         * The type of SIM card to filter the plans by.
         */
        simType?: Array<'eSIM' | 'pSIM'>,
        /**
         * The status to filter the plans by. Only available plans are returned by default.
         */
        status?: Array<'available' | 'archived' | 'pending' | 'draft'>,
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
         * List of objects of type `plan`.
         */
        items: Array<plan>;
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
            url: '/projects/{project}/plans',
            path: {
                'project': this.project
                ,
            },
            query: {
                'provider': provider
                ,
                'simType': simType
                ,
                'status': status
                ,
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
