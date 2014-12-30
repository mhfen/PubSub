/* ========================================================================
 * PubSub.js v0.2.0
 * https://github.com/mhfen/PubSub.git
 * ========================================================================
 * Copyright 2014 Matt Fender
 * License: (https://github.com/mhfen/PubSub/blob/master/LICENSE)
 * ======================================================================== */

(function() {
    'use strict';

    /**
     * A utlity class for publishing events and
     * subscribing to events
     *
     * @class PubSub
     */
    var PubSub = function() {
        /**
         * An array of published topics
         *
         * @property topics
         * @type Array
         * @default {}
         */
        this.topics = {};

        /**
         * A shortcut to the hasOwnProperty method
         * of this.topics
         *
         * @property hOP
         * @type method
         * @returns boolean
         */
        this.hOP = this.topics.hasOwnProperty;
    };

    /**
     * Subscribes to a particular topic
     *
     * @method subscribe
     * @param {String} topic
     * @param {Object} listener
     */
    PubSub.prototype.subscribe = function(topic, listener) {
        // Check to see if the topic's object has been created
        // if not, create it
        if (!this.hOP.call(this.topics, topic)) {
            this.topics[topic] = [];
        }

        // Add the listener to the topic queue
        this.topics[topic].push(listener);
    };

    /**
     * Publishes information to a topic event
     *
     * @method publish
     * @param {String} topic
     * @param {Object} info
     */
    PubSub.prototype.publish = function(topic, info) {
        // If the topic doesn't exist, exit
        if (!this.hOP.call(this.topics, topic)) {
            return;
        }

        // Iterate through the topic queue and publish
        // the information to the topic
        this.topics[topic].forEach(function(item) {
            var theInfo = info !== undefined ? info : {};
            item(theInfo);
        });
    };
})();