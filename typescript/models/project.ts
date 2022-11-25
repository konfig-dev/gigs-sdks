/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { organization } from './organization';

export type project = {
    /**
     * Type of object is always `project`.
     */
    object: string;
    /**
     * Globally unique identifier for the project.
     */
    id: string;
    /**
     * The canonical domain to access the project if available.
     * @deprecated
     */
    domain: string | null;
    /**
     * Small-resolution project icon with an aspect ratio of `1:1`.
     *
     * <!-- theme: info -->
     * > #### Preview
     * >
     * > This property is currently in preview and might change in the future.
     * > We’re excited to hear your feedback and ideas. Please send an email
     * > to [support@gigs.com](mailto:support@gigs.com) to share your thoughts.
     *
     */
    image: string | null;
    /**
     * Deprecated object of project images. Please use the image property instead.
     * @deprecated
     */
    images: {
        /**
         * Small-resolution project favicon with an aspect ratio of `1:1`.
         */
        favicon: string | null;
        /**
         * Small-resolution project icon with an aspect ratio of `1:1`.
         */
        icon: string | null;
        /**
         * High-resolution project logo with an aspect ratio of `7:1`.
         */
        logoHorizontal: string | null;
    };
    /**
     * List of supported locales represented as [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag), ordered by preference.
     */
    locales: Array<string>;
    /**
     * A human-readable name for the project.
     */
    name: string;
    organization: organization;
    /**
     * Deprecated object of application and integration settings. Please use the new project settings endpoints instead.
     * @deprecated
     */
    settings: Record<string, any>;
};

