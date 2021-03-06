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

    onGridpanelContainerContextMenu: function(dataview, e, eOpts) {
            var contextMenu = Ext.create('Ext.menu.Menu', {
                        items: [{
                            text: 'View',
                        },{
                            text: 'Download',
                        }]
                    });
                   e.stopEvent();
                   contextMenu.showAt(e.getXY());
    },

    init: function(application) {
        this.control({
            "#mygridpanel": {
                containercontextmenu: this.onGridpanelContainerContextMenu
            }
        });
    }

});
