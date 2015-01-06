/*
 * File: app/store/propertyStore.js
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

Ext.define('Xplorer.store.propertyStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Xplorer.model.Properties',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Xplorer.model.Properties',
            storeId: 'propertyStore',
            data: [
                {
                    Name: 'This is my files Uploaded',
                    Size: 835,
                    Type: '.CSS',
                    Date: 2015/1/2,
                    User: 'Jeslrel Agang'
                },
                {
                    Name: 'samples of me',
                    Size: 277,
                    Type: '.JPEG',
                    Date: 2015/1/2,
                    User: 'Kevin Leysa'
                },
                {
                    Name: 'Hellow World!',
                    Size: 519,
                    Type: '.JS',
                    Date: 2015/1/2,
                    User: 'Wilfred Ronquillo'
                },
                {
                    Name: 'my Examples',
                    Size: 626,
                    Type: '.PHP',
                    Date: 2015/1/2,
                    User: 'Rich Barlett'
                },
                {
                    Name: 'This is my files Uploaded',
                    Size: 835,
                    Type: '.CSS',
                    Date: 2015/1/2,
                    User: 'Jeslrel Agang'
                },
                {
                    Name: 'samples of me',
                    Size: 277,
                    Type: '.JPEG',
                    Date: 2015/1/2,
                    User: 'Kevin Leysa'
                },
                {
                    Name: 'Hellow World!',
                    Size: 519,
                    Type: '.JS',
                    Date: 2015/1/2,
                    User: 'Wilfred Ronquillo'
                },
                {
                    Name: 'my Examples',
                    Size: 626,
                    Type: '.PHP',
                    Date: 2015/1/2,
                    User: 'Rich Barlett'
                },
                {
                    Name: 'This is my files Uploaded',
                    Size: 835,
                    Type: '.CSS',
                    Date: 2015/1/2,
                    User: 'Jeslrel Agang'
                },
                {
                    Name: 'samples of me',
                    Size: 277,
                    Type: '.JPEG',
                    Date: 2015/1/2,
                    User: 'Kevin Leysa'
                },
                {
                    Name: 'Hellow World!',
                    Size: 519,
                    Type: '.JS',
                    Date: 2015/1/2,
                    User: 'Wilfred Ronquillo'
                },
                {
                    Name: 'my Examples',
                    Size: 626,
                    Type: '.PHP',
                    Date: 2015/1/2,
                    User: 'Rich Barlett'
                },
                
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});