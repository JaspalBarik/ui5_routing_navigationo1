sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "routingnavigation01/model/models"
], (UIComponent, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("routingnavigation01.Component", {
        metadata: {

           // Connect this component to manifest.json.
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        // init() executes when the application component is initialized.
        init: function() {

            // call the base component's init function
              // Initialize the parent UIComponent.
            // This is necessary for the standard component setup.
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            // It provides device-related information such as screen size.
            this.setModel(models.createDeviceModel(), "device");


             // Create employee data
            // Employees is an array containing employee objects.
             const oEmployeeData = {
                Employees: [
                 
                   {
                        employeeId: "101",
                        name: "John",
                        designation: "Developer",
                        department: "IT"
                    },
                    {
                        employeeId: "102",
                        name: "Sarah",
                        designation: "Tester",
                        department: "Quality Assurance"
                    },
                    {
                        employeeId: "103",
                        name: "Jaspal",
                        designation: "Analyst",
                        department: "Business"
                    }
                ]
             };

            // Create a JSONModel using the employee data.
             var oEmployeeModel = new JSONModel(oEmployeeData);

             // Set the model on the component
             // Set the employee model as the default model
            // at component level so that application views can access it.
            //
            // Because it is the default model, XML binding uses:
            // {/Employees}, {name}, {designation}, etc.
             this.setModel(oEmployeeModel);

             // Initialize the application's router.
            // This activates routing and displays the initial route.
            this.getRouter().initialize();
        }
    });
});