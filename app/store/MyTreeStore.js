/*
 * File: app/store/MyTreeStore.js
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

Ext.define('explorer.store.MyTreeStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyTreeStore',
            root: {
                expanded: true,
                text: 'My Documents',
                children: [
                    {
                        text: 'New Folder1',
                        expanded: true,
                        children: [
                            {
                                text: 'untitled.txt',
                                leaf: true
                            },
                            {
                                text: 'myPicture.jpg',
                                leaf: true
                            },
                            {
                                text: 'hello World.js',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'my Files',
                        expanded: true,
                        children: [
                            {
                                text: 'xampp.exe',
                                leaf: true
                            },
                            {
                                text: 'workbench.exe',
                                leaf: true
                            },
                            {
                                text: 'office 2013 x64.msi',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'my Folder',
                        expanded: true,
                        children: [
                            {
                                text: 'this is my text.docx',
                                leaf: true
                            },
                            {
                                text: 'myData.txt',
                                leaf: true
                            },
                            {
                                text: 'modeling.php',
                                leaf: true
                            }
                        ]
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});