/**
 *  jQuery  1.7 required
 *
 */
(function(exports, $){
	var EventMgr = function () {
		var o = function () {
				'use strict';
				return $('body');
			},
			/**
			 * bind custom event
			 */
			bind = function (event, callback) {
				'use strict';
				this.o().on(event, callback);
			},
			/**
			 * wrapper for jQuery bind
			 */
			obind = function (object, event, callback) {
				'use strict';
				if ( typeof object == 'string') {
					$(object).on(event, callback);
				} else {
					object.on(event, callback);
				}
			},
			/**
			 * wrapper for jQuery on
			 */
			on = function(outObject, innerSelect, event, callback) {
				'use strict';
				if (typeof outObject == 'string') {
					$(outObject).on(event, innerSelect, callback);
				} else {
					outObject.on(event, innerSelect, callback);
				}
			},
			/**
			 * wrapper for jQuery off
			 */
			off = function (outObject, event) {
				'use strict';
				if (typeof outObject == 'string') {
					$(outObject).off(event);
				} else {
					outObject.off(event);
				}
			},
			/**
			 * unbind custom event
			 */
			unbind = function (event) {
				'use strict';
				this.o().off(event, false);
			},
			/**
			 * trigger for custom/native event with transmission data
			 */
			trigger = function (event, data, delay) {
				'use strict';
				if(delay) {
					setTimeout(function(self) { return function(){
						self.o().trigger(event, [{data : data}]);}
					}(this), delay);
				} else {
					this.o().trigger(event, [{data : data}]);
				}
			};

		return {
			bind: bind,
			unbind: unbind,
			obind: obind,
			on: on,
			off: off,
			trigger: trigger
		}
	};

	exports.EventMgr = EventMgr();
}) (window, jQuery);