/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { plan } from '../models/plan';
import type { planDocument } from '../models/planDocument';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlansService {

    /**
     * Retrieve a plan document
     * Retrieves the details of an existing document for a given plan.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param plan The unique identifier for the plan.
     * @param id The unique identifier for the document.
     * @returns planDocument Returns the plan if it exists and is owned by the plan.
     * @throws ApiError
     */
    public static planDocumentRetrieve(
        project: string,
        plan: string,
        id: string,
    ): CancelablePromise<planDocument> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/plans/{plan}/documents/{id}',
            path: {
                'project': project,
                'plan': plan,
                'id': id,
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
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param plan The unique identifier for the plan.
     * @returns any Returns a list of document objects.
     * @throws ApiError
     */
    public static planDocumentsList(
        project: string,
        plan: string,
    ): CancelablePromise<{
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
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/plans/{plan}/documents',
            path: {
                'project': project,
                'plan': plan,
            },
            errors: {
                404: `The requested resource doesn't exist.`,
            },
        });
    }

    /**
     * Retrieve a plan
     * Retrieve the details of an existing plan.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the plan.
     * @returns plan Returns the plan if it exists.
     * @throws ApiError
     */
    public static plansRetrieve(
        project: string,
        id: string,
    ): CancelablePromise<plan> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/plans/{id}',
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
     * Update a plan
     * Updates the specified plan by setting the values of the parameters passed.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the plan.
     * @param requestBody Plan attributes to update.
     * @returns plan Returns the updated plan.
     * @throws ApiError
     */
    public static plansUpdate(
        project: string,
        id: string,
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
    ): CancelablePromise<plan> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/projects/{project}/plans/{id}',
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
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the plan.
     * @returns plan Returns the archived plan.
     * @throws ApiError
     */
    public static plansArchive(
        project: string,
        id: string,
    ): CancelablePromise<plan> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{project}/plans/{id}/archive',
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
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param id The unique identifier for the plan.
     * @returns plan Returns the available plan.
     * @throws ApiError
     */
    public static plansPublish(
        project: string,
        id: string,
    ): CancelablePromise<plan> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{project}/plans/{id}/publish',
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
     * List all plans
     * Returns a list of plans.
     * @param project The unique identifier for the [project](https://developers.gigs.com/docs/api/b3A6MzMwODcxMzI-retrieve-a-project).
     * @param provider The network provider ID to filter the plans by.
     * @param simType The type of SIM card to filter the plans by.
     * @param status The status to filter the plans by. Only available plans are returned by default.
     * @param after A cursor for use in pagination. The `after` parameter takes an object ID that defines the position in the list, only items immediately following the item with that ID will be returned.
     * @param before A cursor for use in pagination. The `before` parameter takes an object ID that defines the position in the list, only items immediately preceding the item with that ID will be returned.
     * @param limit The limit of items to be returned in the list, between 0 and 200.
     * @returns any Returns a list of plan objects.
     * @throws ApiError
     */
    public static plansList(
        project: string,
        provider?: Array<string>,
        simType?: Array<'eSIM' | 'pSIM'>,
        status?: Array<'available' | 'archived' | 'pending' | 'draft'>,
        after?: string,
        before?: string,
        limit: number = 10,
    ): CancelablePromise<{
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
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project}/plans',
            path: {
                'project': project,
            },
            query: {
                'provider': provider,
                'simType': simType,
                'status': status,
                'after': after,
                'before': before,
                'limit': limit,
            },
        });
    }

}
