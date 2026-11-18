
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], (Controller, UIComponent, History) => {

    "use strict";

    return Controller.extend("routingnavigation01.controller.Detail", {

        // ROUTING PARAMETER HANDLING

        // onInit() runs when the Detail view is initialized.
        // We use it to get the application router and listen
        // for navigation to the Detail route.

        onInit: function () {

            // Get the router of our SAPUI5 application.
            var oRouter = UIComponent.getRouterFor(this);

            // Listen for the Detail route.
            // Whenever this route matches, execute _onObjectMatched().
            //
            // this._onObjectMatched = function to execute.
            // this = controller context, so "this" works correctly
            // inside the _onObjectMatched function.

            oRouter.getRoute("Detail").attachPatternMatched(
                this._onObjectMatched,
                this
            );

        },

        // This function executes when the Detail route matches.
        // It receives the employeePath parameter passed from View1.

        _onObjectMatched: function (oEvent) {

            // Read the employeePath parameter from the routing event.
            // Example encoded value: %2FEmployees%2F1

            var sEmployeePath = decodeURIComponent(
                oEvent.getParameter("arguments").employeePath
            );

            // Decode the parameter to get the original JSONModel path.
            // Example: /Employees/1
            //
            // bindElement() sets the selected employee as the
            // binding context of the Detail view.
            // Now child controls can use relative bindings like:
            // {name}, {designation}, {department}

            this.getView().bindElement({
                path: sEmployeePath
            });

        },

        // STEP 32: BACK NAVIGATION AND HISTORY-

        // This function executes when the user clicks
        // the Back button in the Detail page.

        onNavBack: function () {

            // Get the SAPUI5 navigation History instance.
            // It helps us check whether a previous navigation exists.

            var oHistory = History.getInstance();

            // Get the previous navigation hash.
            // If it is undefined, there is no previous
            // application navigation hash available.

            var sPreviousHash = oHistory.getPreviousHash();

            // Check whether a previous navigation exists.

            if (sPreviousHash !== undefined) {

                // A previous navigation exists.
                // Go back by one browser history entry.
                //
                // -1 means one step backward.

                window.history.go(-1);

            } else {

                // No previous application navigation exists.
                // For example, the user may have opened the
                // Detail page directly using its URL.

                // Get the application router.

                var oRouter = UIComponent.getRouterFor(this);

                // Navigate directly to the Home page.
                //
                // "RouteView1" = Home route name from manifest.json.
                // {} = No routing parameters are required.
                // true = Replace the current history entry
                // instead of adding a new one.

                oRouter.navTo("RouteView1", {}, true);

            }

        }

    });

});
