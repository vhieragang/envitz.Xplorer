/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Xplorer.controller.MyController', {
    extend: 'Ext.app.Controller',

    onGridpanelCellContextMenu: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var me=this;
        e.stopEvent();


         // create the Grid
          this.mygridpanel = Ext.create('Ext.grid.Panel', {
            // ...
            listeners: {
              beforeitemcontextmenu: function(view, record, item, index, e)
              {
                e.stopEvent();
                gridMenu.showAt(e.getXY());
              }
            }
          });

         gridMenu.showAt(e.getXY());
    },

    init: function(application) {
        this.control({
            "#mygridpanel": {
                cellcontextmenu: this.onGridpanelCellContextMenu
            }
        });
    }

});
