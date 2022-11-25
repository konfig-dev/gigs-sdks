/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coverage } from './coverage';

export type plan = {
    /**
     * Type of object is always `plan`.
     */
    object: string;
    /**
     * Unique identifier for the plan.
     */
    id: string;
    coverage: coverage;
    /**
     * The data allowance included in this plan. A value of `-1` indicates unlimited data.
     */
    data: number;
    /**
     * The unit of the data value is always `byte`.
     */
    dataUnit: string;
    /**
     * The plan's description, meant to be displayable to the users.
     */
    description: string | null;
    /**
     * The plan's image, meant to be displayable to the users.
     */
    image: string | null;
    /**
     * The plan's name, meant to be displayable to the users.
     */
    name: string;
    price: {
        /**
         * The price amount in the currency's minor unit, e.g. "cents" for many currencies.
         */
        amount: number;
        /**
         * Three-letter ISO 4217 currency code. Must be a supported currency.
         */
        currency: string;
    };
    /**
     * The ID of the network provider supported by this plan.
     */
    provider: string;
    requirements: {
        /**
         * The address requirements that must be fulfilled before a user may purchase a subscription.
         */
        address: plan.address;
        /**
         * The user birthday requirements that must be fulfilled before a user may purchase a subscription.
         */
        'user.birthday': plan.'user.birthday';
        /**
         * The user full name requirements that must be fulfilled before a user may purchase a subscription.
         */
        'user.fullName': plan.'user.fullName';
    };
    /**
     * List of SIM types supported by this plan. Can be `eSIM`, `pSIM`, or both.
     */
    simTypes: Array<'eSIM' | 'pSIM'>;
    /**
     * The SMS allowance included in this plan. A value of `-1` indicates unlimited SMS.
     */
    sms: number;
    /**
     * The unit of the sms value is always `message`.
     */
    smsUnit: string;
    status: plan.status;
    /**
     * List of tags describing this plan.
     * @deprecated
     */
    tags: Array<string>;
    validity: {
        /**
         * The minimum number of subscription periods that the plan must be renewed.
         */
        minimumPeriods: number;
        /**
         * The validity type of this plan, either `oneTime` or `recurring`.
         */
        type: plan.type;
        /**
         * The time unit of the subscription period, either `day` or `month`.
         */
        unit: plan.unit;
        /**
         * The amount of units (specified in the `unit` property) in each subscription period.
         */
        value: number;
    };
    /**
     * The voice call allowance in seconds included in this plan. A value of `-1` indicates unlimited voice calls.
     */
    voice: number;
    /**
     * The unit of the voice value is always `second`.
     */
    voiceUnit: string;
    /**
     * Time when the plan was created.
     */
    createdAt: string;
};

export namespace plan {

    /**
     * The address requirements that must be fulfilled before a user may purchase a subscription.
     */
    export enum address {
        NONE = 'none',
        PRESENT = 'present',
        VERIFIED = 'verified',
    }

    /**
     * The user birthday requirements that must be fulfilled before a user may purchase a subscription.
     */
    export enum 'user.birthday' {
        NONE = 'none',
        PRESENT = 'present',
        VERIFIED = 'verified',
    }

    /**
     * The user full name requirements that must be fulfilled before a user may purchase a subscription.
     */
    export enum 'user.fullName' {
        NONE = 'none',
        PRESENT = 'present',
        VERIFIED = 'verified',
    }

    export enum status {
        AVAILABLE = 'available',
        ARCHIVED = 'archived',
        PENDING = 'pending',
        DRAFT = 'draft',
    }

    /**
     * The validity type of this plan, either `oneTime` or `recurring`.
     */
    export enum type {
        ONE_TIME = 'oneTime',
        RECURRING = 'recurring',
    }

    /**
     * The time unit of the subscription period, either `day` or `month`.
     */
    export enum unit {
        DAY = 'day',
        MONTH = 'month',
    }


}

