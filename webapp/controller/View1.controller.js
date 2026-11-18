sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("routingnavigation01.controller.View1", {

      // onInit() executes when the Home page is initialized.
        onInit: function() {
           
        }, 

        // NAVIGATION WITH PARAMETERS-

        // This function executes when the user clicks an employee.
        onEmployeePress: function(oEvent) {

            // Get the clicked employee list item.
            // getSource() returns the control that triggered the event.
            var oItem = oEvent.getSource();

            // Get the binding context of the clicked employee.
            // getPath() returns the employee's JSONModel path.
            //
            // Example:
            // John  = /Employees/0
            // Sarah = /Employees/1
            // Jaspal = /Employees/2
            var sPath = oItem.getBindingContext().getPath();

            // Get the application's router
            // We use the router to navigate between views.
            var oRouter = UIComponent.getRouterFor(this);

            // Navigate to the route named "Detail".
            // Pass the selected employee's path as a route parameter.
            // encodeURIComponent() encodes special URL characters.
            oRouter.navTo("Detail",{
                employeePath: encodeURIComponent(sPath)
            });
        } 
    }); 
});
