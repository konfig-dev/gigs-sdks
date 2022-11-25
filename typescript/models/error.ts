/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { propertyErrorDetailError } from './propertyErrorDetailError';

export type error = {
    /**
     * Type of object is always `error`.
     */
    object: string;
    /**
     * A machine-readable description of the error.
     */
    code?: string;
    /**
     * Optional array containing specific information for the current error.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This property is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     */
    details?: Array<propertyErrorDetailError>;
    /**
     * An optional list of URLs providing further information to resolve the error.
     */
    documentation?: Array<string>;
    /**
     * An optional explanation how to resolve the error.
     */
    hint?: string;
    /**
     * A human readable description of the error.
     */
    message: string;
    /**
     * The type of [error](https://developers.gigs.com/docs/api/ZG9jOjExMTYzMDU0-error-handling) returned.
     */
    type: string;
};

