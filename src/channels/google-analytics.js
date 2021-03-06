/**
 * Google Analytics Channel
 *
 * Submit the provided event to Google Analytics directly via ga() function
 *
 * @param {string} eventType Type of event, provided by tracker.type
 * @param {string } eventLabel Label for event, contains granular identifiers constructed by LabelBuilder
 * @param {string|number} eventValue value of the event, provided by tracker.value
 * @param {object} callbackEvent Event to dispatch in callback
 * @returns {boolean|*} true if successful, error when thrown
 */
const GoogleAnalytics = (eventType, eventLabel, eventValue, callbackEvent) => {
  try {
    window.gtag('event', eventType, {
      event_category: window.location.href,
      event_label: eventLabel,
      value: eventValue,
      event_callback: () => document.dispatchEvent(callbackEvent)
    })
    return true
  } catch (error) {
    console.error(error)
  }
}

export default GoogleAnalytics
