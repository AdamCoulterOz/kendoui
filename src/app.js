$(document).ready(function () {

    var urlName = "http://localhost:7071/api/todo"
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: urlName,
                method: "GET",
                dataType: "jsonp",
                cache: "false",
                success: function(response) {
                  console.log(response);
                },
                error: function(response) {
                    console.log(response);
                }
                // data: {
                //     format: "json" //url input fields
                // }
            },
            create: {
                url: urlName,
                method: "POST",
                dataType: "jsonp"
            },
            update: {
                url: urlName,
                method: "PUT",
                dataType: "jsonp"
            },
            destroy: {
                url: urlName,
                method: "DELETE",
                dataType: "jsonp"
            },
            parameterMap: function(options, operation) {
                if (operation !== "read" && options.models) {
                    return {models: kendo.stringify(options.models)};
                }
            }
        },
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { editable: false, nullable: true},
                    createdTime: { },
                    taskDescription: { },
                    isCompleted: { type: "boolean" },
                    partitionKey: {  },
                    rowKey: {  },
                    timestamp: {  },
                    eTag: { type: "datetime" }
                }
            }
        }
    });

    $("#grid").kendoGrid({
        dataSource: dataSource,
        navigatable: true,
        pageable: true,
        height: 550,
        toolbar: ["create", "save", "cancel"],
        columns: ["id", "taskDescription"],
        editable: true
    });


    // var node = window.document.getElementById('grid')

    // var grid = new kendo.ui.Grid(node)
    // var gridColumns = new Array()
    // var gridColumn = {}
    // gridColumn.field = "id"
    // gridColumn.title = "Identification Number"
    // gridColumns.push(gridColumn)
    // grid.columns = gridColumns

    // grid.options.dataSource = dataSource
    // grid.options.pageable = false
    // grid.options.toolbar = ["create"]
    // grid.options.editable = true
    // grid.options.height = 500
    // grid.options.toolbar = ["create","save","cancel"]


});