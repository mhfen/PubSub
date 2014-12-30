PubSub
======

A simple utility class for creating a publish / subscribe object in JavaScript. Based on the PubSub util David Walsh posted [here](http://davidwalsh.name/pubsub-javascript). It is meant to be helpful in cross-module communication.

## Usage

### Via JavaScript

Instantiate a PubSub object, then publish and subscribe:

```javascript
var newPubSub = new PubSub();

newPubSub.subscribe('aNewTopic', function() {
    // do things when aNewTopic is published to
});

newPubSub.publish('aNewTopic', {
    data: 'I want to publish this data to the topic.'
});
```