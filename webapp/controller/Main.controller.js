sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.ui5.learning.calculator.sapui5learning1calculator.controller.Main", {
			onInit: function () {
				var jsonData = {
					operations: [
						{ key:"+",text:"Sum" },
						{ key:"-",text:"Subtraction" },
						{ key:"/",text:"Division" },
						{ key:"*",text:"Multiplication	"}
					]
				};
				const oModel = new sap.ui.model.json.JSONModel(jsonData);
				this.getView().setModel(oModel);
			}
		});
	});
