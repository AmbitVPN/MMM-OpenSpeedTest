/* Magic Mirror
 * Module: MMM-OpenSpeedTest

 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-OpenSpeedTest",{

	defaults: {
			height:"500px",
			width:"750px",
	},

	getStyles: function() {
        return ["MMM-OpenSpeedTest.css"];
    },


	getDom: function() {


		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";

        iframe.src="http://100widgets.com/js_data.php?id=200";

		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_SPEED') {
            this.hide(1000);
        }  else if (notification === 'SHOW_SPEED') {
            this.show(1000);
        }

    },

});
