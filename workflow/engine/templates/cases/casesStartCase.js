//Ext.BLANK_IMAGE_URL = 'resources/s.gif';
var startCaseFilter;
var newCaseNewTab;

Ext.chart.Chart.CHART_URL = '/images/charts.swf';
Ext.FlashComponent.EXPRESS_INSTALL_URL = '/images/expressinstall.swf';
// The Quicktips are used for the toolbar and Tree mouseover tooltips!

// Refresh treePanel
try {
  if (typeof(parent.timer) != 'undefined') {
    parent.timer();
  }
} catch(theError) {
  // This try-catch is for Zimbra error
}


var conn = new Ext.data.Connection();

Docs = {};

var infoCase = new Ext.form.FormPanel({
    xtype: 'panel',
    region : 'center',
    width : '100%',
    labelAlign: 'right',
    waitMsgTarget: true,
    layout:'form',
    bodyStyle:'padding:25px',
    height: 'auto',
    html: _('ID_CASES_NOT_START')
});

Ext.onReady(function() {
  var newCaseTree = new Ext.ux.MaskTree({
    id: 'startCaseTreePanel',
    region: 'center',
    useArrows: true,
    animate: true,
    split : true,
    autoScroll: true,
    dataUrl: 'casesStartPage_Ajax?action=getProcessList',
    rootVisible: false,
    containerScroll: true,
    border: false,
    root: {
      nodeType: 'async',
      expanded : true
    },
    tbar : [
      {
        xtype : 'textfield',
        name : 'processesFilter',
        id : 'processesFilter',
        emptyText : _('ID_FIND_A_PROCESS'),
        enableKeyEvents : true,
        listeners : {
          render : function(f) {
            startCaseFilter = new Ext.ux.tree.TreeFilterX(Ext.getCmp('startCaseTreePanel'));
          },
          specialkey : function(f, e) {
            if (e.getKey() == e.ENTER) {
              txt = Ext.getCmp('processesFilter').getValue();
              startCaseFilter.clear();
              var re = new RegExp('.*' + txt + '.*', 'i');
              startCaseFilter.filter(re, 'text');
            }
          },
          scope : this
        }
      }, {
        text : 'X',
        ctCls : 'pm_search_x_button',
        handler : function() {
        	Ext.Ajax.request({
                url : 'casesStartPage_Ajax' ,
                params : {action : 'verifySession'},
                success: function ( result, request ) {
                  var data = Ext.util.JSON.decode(result.responseText);
                  if( data.lostSession ) {
                   Ext.Msg.show({
                          title: _('ID_ERROR'),
                          msg: data.message,
                          animEl: 'elId',
                          icon: Ext.MessageBox.ERROR,
                          buttons: Ext.MessageBox.OK,
                          fn : function(btn) {
                            try 
                                  {
                                    prnt = parent.parent;
                                    top.location = top.location;
                                  }
                                catch (err) 
                                  {
                                    parent.location = parent.location;
                                  }
                          }
                        });
                  } else {
                      Ext.getCmp('processesFilter').setValue('');
                      startCaseFilter.clear();
                  }
                },
                failure: function ( result, request) {
                 if (typeof(result.responseText) != 'undefined') {
                         Ext.MessageBox.alert( _('ID_FAILED'), result.responseText);
                     }
                }
           });
        }
      }, ' ', ' ', {
        iconCls : 'icon-expand-all',
        tooltip :  _('ID_EXPAND_ALL'),
        handler : function() {
        	Ext.Ajax.request({
                url : 'casesStartPage_Ajax' ,
                params : {action : 'verifySession'},
                success: function ( result, request ) {
                  var data = Ext.util.JSON.decode(result.responseText);
                  if( data.lostSession ) {
                   Ext.Msg.show({
                          title: _('ID_ERROR'),
                          msg: data.message,
                          animEl: 'elId',
                          icon: Ext.MessageBox.ERROR,
                          buttons: Ext.MessageBox.OK,
                          fn : function(btn) {
                            try 
                                  {
                                    prnt = parent.parent;
                                    top.location = top.location;
                                  }
                                catch (err) 
                                  {
                                    parent.location = parent.location;
                                  }
                          }
                        });
                  } else {
                 Ext.getCmp("startCaseTreePanel").root.expand(true);
                  }
                },
                failure: function ( result, request) {
                 if (typeof(result.responseText) != 'undefined') {
                         Ext.MessageBox.alert( _('ID_FAILED'), result.responseText);
                     }
                }
           });
        },
        scope : this
      }, '-', {
        iconCls : 'icon-collapse-all',
        tooltip : _('ID_COLLAPSE_ALL'),
        handler : function() {
        	Ext.Ajax.request({
                url : 'casesStartPage_Ajax' ,
                params : {action : 'verifySession'},
                success: function ( result, request ) {
                  var data = Ext.util.JSON.decode(result.responseText);
                  if( data.lostSession ) {
                   Ext.Msg.show({
                          title: _('ID_ERROR'),
                          msg: data.message,
                          animEl: 'elId',
                          icon: Ext.MessageBox.ERROR,
                          buttons: Ext.MessageBox.OK,
                          fn : function(btn) {
                            try 
                                  {
                                    prnt = parent.parent;
                                    top.location = top.location;
                                  }
                                catch (err) 
                                  {
                                    parent.location = parent.location;
                                  }
                          }
                        });
                  } else {
                     Ext.getCmp("startCaseTreePanel").root.collapse(true);
                  }
                },
                failure: function ( result, request) {
                 if (typeof(result.responseText) != 'undefined') {
                         Ext.MessageBox.alert( _('ID_FAILED'), result.responseText);
                     }
                }
           });
        },
        scope : this
      }, ' ', ' ', {
        xtype : 'tbbutton',
        cls : 'x-btn-icon',
        icon : '/images/refresh.gif',

        handler : function() {
        	Ext.Ajax.request({
                url : 'casesStartPage_Ajax' ,
                params : {action : 'verifySession'},
                success: function ( result, request ) {
                  var data = Ext.util.JSON.decode(result.responseText);
                  if( data.lostSession ) {
                   Ext.Msg.show({
                          title: _('ID_ERROR'),
                          msg: data.message,
                          animEl: 'elId',
                          icon: Ext.MessageBox.ERROR,
                          buttons: Ext.MessageBox.OK,
                          fn : function(btn) {
                            try 
                                  {
                                    prnt = parent.parent;
                                    top.location = top.location;
                                  }
                                catch (err) 
                                  {
                                    parent.location = parent.location;
                                  }
                          }
                        });
                  } else {
                      tree = Ext.getCmp('startCaseTreePanel');
                      tree.getLoader().load(tree.root);
                  }
                },
                failure: function ( result, request) {
                 if (typeof(result.responseText) != 'undefined') {
                         Ext.MessageBox.alert( _('ID_FAILED'), result.responseText);
                     }
                }
           });
        }
      }
    ],
    listeners : {
        dblclick : function(n) {
            openCaseA(n);
        },
        // click : function(n) {
        // 	Ext.Ajax.request({
        //         url : 'casesStartPage_Ajax' ,
        //         params : {action : 'verifySession'},
        //         success: function ( result, request ) {
        //           var data = Ext.util.JSON.decode(result.responseText);
        //           if( data.lostSession ) {
        //            Ext.Msg.show({
        //                   title: _('ID_ERROR'),
        //                   msg: data.message,
        //                   animEl: 'elId',
        //                   icon: Ext.MessageBox.ERROR,
        //                   buttons: Ext.MessageBox.OK,
        //                   fn : function(btn) {
        //                     try
        //                           {
        //                             prnt = parent.parent;
        //                             top.location = top.location;
        //                           }
        //                         catch (err)
        //                           {
        //                             parent.location = parent.location;
        //                           }
        //                   }
        //                 });
        //           } else {
        //               showDetailsA(n);
        //           }
        //         },
        //         failure: function ( result, request) {
        //          if (typeof(result.responseText) != 'undefined') {
        //                  Ext.MessageBox.alert( _('ID_FAILED'), result.responseText);
        //              }
        //         }
        //    });
        // },
        load: function(node){
            if (node.childNodes.length == 0)
            {
                infoCase.show();
            } else {
                newCaseTree.show();
            }
        }
    }
  });


  /*var details = {
    xtype:'form',
    id : 'process-detail-panel',
    region : 'east',
    split : true,
    width : 450,
    style : {
      width : '450'
    },
    minWidth : 250,
    labelAlign: 'right',
    labelWidth: 85,
    waitMsgTarget: true,
    title: TRANSLATIONS.ID_PROCESS_INFORMATION,
    layout:'form',
    defaults: {width: 350},
    defaultType: 'displayfield',
    autoScroll: true,
    items: [{
        fieldLabel: TRANSLATIONS.ID_PROCESS,
        name: 'processName',
        allowBlank:false,
        value: '',
        labelStyle : 'font-size:11px;',
        style : {
          fontSize:'11px'
        },
        id:"processName",
        htmlEncode: true
      },
      {
        xtype: 'compositefield',
        fieldLabel: TRANSLATIONS.ID_TASK,
        labelStyle : 'font-size:11px;',
        style : {
          fontSize:'11px'
        },
        items: [
          {
            xtype : 'button',
            id : 'starCaseButton',
            disabled : true,
            iconCls : "ICON_CASES_START_CASE",
            text : TRANSLATIONS.ID_TITLE_START_CASE,
            autoWidth : true,
            handler : function() {
              tree = Ext.getCmp('startCaseTreePanel');
              var selectedNode = tree.getSelectionModel().getSelectedNode();
              if (selectedNode) {
                openCaseA(selectedNode);
              }
            }
          },
          {
            xtype     : 'displayfield',
            name: 'taskName',
            allowBlank:false,
            value: '',
            width:200,
            id:"taskName",
            htmlEncode: true
          }
        ]},
        {
          xtype:'textarea',
          fieldLabel: TRANSLATIONS.ID_DESCRIPTION,
          name: 'processDescription',
          value: '',
          readOnly: true,
          labelStyle : 'font-size:11px;',
          style : {
            fontSize:'11px'
          },
          id:"processDescription"
        },{
          fieldLabel: TRANSLATIONS.ID_CATEGORY,
          name: 'processCategory',
          value: '',
          readOnly: true,
          labelStyle : 'font-size:11px;',
          style : {
            fontSize:'11px'
          },
          id:"processCategory",
          htmlEncode: true
        },
        {
          fieldLabel: TRANSLATIONS.ID_CALENDAR,
          name: 'calendarName',
          labelStyle : 'font-size:11px;',
          style : {
            fontSize:'11px'
          },
          id:"calendarName"
      },
      {
        xtype:'checkboxgroup',
        fieldLabel: TRANSLATIONS.ID_WORKING_DAYS,
        name: 'calendarWorkDays',
        disabled: true,
        readOnly: true,
        disabledClass:"",
        labelStyle : 'font-size:11px;',
        style : {
          fontSize:'11px'
        },
        id:"calendarWorkDays",
        columns: 7,
        items: [
          {boxLabel: TRANSLATIONS.ID_SUN, name: '0',disabledClass:""},
          {boxLabel: TRANSLATIONS.ID_MON, name: '1',disabledClass:""},
          {boxLabel: TRANSLATIONS.ID_TUE, name: '2',disabledClass:""},
          {boxLabel: TRANSLATIONS.ID_WEN, name: '3',disabledClass:""},
          {boxLabel: TRANSLATIONS.ID_THU, name: '4',disabledClass:""},
          {boxLabel: TRANSLATIONS.ID_FRI, name: '5',disabledClass:""},
          {boxLabel: TRANSLATIONS.ID_SAT, name: '6',disabledClass:""}
        ]
      },
      {
        xtype:'checkbox',
        fieldLabel: TRANSLATIONS.ID_DEBUG_MODE,
        name: 'processDebug',
        labelStyle : 'font-size:11px;',
        style : {
          fontSize:'11px'
        },
        disabled: true,
        readOnly: true,
        id:"processDebug",
        disabledClass:""
      }
    ]
  }*/

    Ext.Ajax.request({
        url: 'casesStartPage_Ajax?action=getProcessList',
        success: function(response, opts) {
            var obj = Ext.decode(response.responseText);
            var processes = extractProcesses(obj);
            showProcessesPanel(processes);
        },
        failure: function(response, opts) {
            console.log('There was a problem with loading list of available processes ' + response.status);
        }
    });

    function extractProcesses(obj) {
        var processes = [];
        for (var categoryIdx = 0; categoryIdx <obj.length;categoryIdx++) {
            for (var childrenIdx = 0; childrenIdx < obj[categoryIdx].children.length; childrenIdx++) {
                processes.push(obj[categoryIdx].children[childrenIdx]);
            }
        }
        return processes;
    }

    Ext.QuickTips.init();

    function showProcessesPanel(processes) {
        // var columnsNo = 3;
        // var columnItems ={
        //     0: [],
        //     1: [],
        //     2: []
        // };
        // for (var idx = 0; idx < processes.length; idx++) {
        //     columnItems[idx % columnsNo].push({
        //             xtype: 'startCasePanel',
        //             name: processes[idx].otherAttributes.PRO_TITLE,
        //             processDetails: processes[idx],
        //             fields: processes[idx].attributes
        //         });
        //     columnItems[idx % columnsNo].push(new Ext.Spacer({
        //         height: 15
        //     }));
        // }
        //
        // columnItems[0].push({
        //     xtype: 'panel',
        //     layout: 'anchor',
        //     buttonAlign:'center',
        //     buttons:  [{
        //         xtype: 'button',
        //         width: 100,
        //         text: 'Dodaj wniosek',
        //         listeners: {
        //             click: function() {
        //                 openCaseA(me.buildStartProcessCommand());
        //             }
        //         }
        //     }],
        //     items: [{
        //       xtype: 'displayfield',
        //       value: 'some value'
        //     }]
        // });

        var portal = {
            xtype: 'portal',
            region: 'center',
            margins: '35 5 5 5',
            name: 'portalDashboard',
            id: 'portalDashboard',
            noOfColumns:0,
            tbar: {
                html: '<span>Dodaj nowy wniosek</span>'
            },
            listeners: {
                resize: function(component, adjWidth, adjHeight, rawWidth, rawHeight) {
                    console.log("Resize portal" + adjWidth + " " + adjHeight + " " + rawWidth + " " + rawHeight);
                    resizeIfApplicable(component);

                },
                afterrender: function(component) {
                    console.log("Portal width " + component.getWidth());
                    resizeIfApplicable(component);
                    component.doLayout();
                }
            }

        };

        function resizeIfApplicable(component) {
            var width = component.getWidth();
            var noOfColumns = component.noOfColumns;
            if (width >= 1200 && noOfColumns !== 3) {
                adjust(component, 3);
            } else if (width >= 800 && width < 1200 && noOfColumns !== 2) {
                adjust(component, 2);
            } else if (width < 800 && noOfColumns !== 1) {
                adjust(component, 1);
            }
        }

        function adjust(component, noOfColumns) {
            component.removeAll();
            console.log("adjusting to " + noOfColumns);
            component.noOfColumns = noOfColumns;
            var columnItems = group(noOfColumns);
            var columns = createColumns(columnItems);
            component.add(columns, noOfColumns);
            component.doLayout();

        }

        function createColumns(columnItems) {
            var columns = [];
            var noOfColumns = columnItems.length;
            for (var i=0; i< noOfColumns;i++) {
                columns.push({
                    columnWidth: 1/noOfColumns,
                    style: 'padding:10px 10px 10px 10px; margin: 10px 10px 10px 10px;',
                    items: columnItems[i]
                });
            }
            return columns;
        }

        function group(noOfColumns) {
            var columnItems = [];
            for (var i=0; i< noOfColumns;i++) {
                columnItems[i] = [];
            }

            for (var idx = 0; idx < processes.length; idx++) {
                columnItems[idx % noOfColumns].push({
                    xtype: 'newStartCasePanel',
                    name: processes[idx].otherAttributes.PRO_TITLE,
                    processDetails: processes[idx],
                    fields: processes[idx].attributes,
                    description: processes[idx].description
                });
                columnItems[idx % noOfColumns].push(new Ext.Spacer({
                    height: 15
                }));
            }
            console.log(columnItems);
            return columnItems;
        }

        var viewport = new Ext.Viewport({
            layout: 'fit',
            name: 'viewportDashboard',
            id: 'viewportDashboard',
            items: [
                portal
            ]
        });
    }
    //newCaseTree.hide();infoCase.hide();
    // var viewport = new Ext.Viewport({
    //     layout : 'border',
    //     items : [ infoCase , newCaseTree/*,  details*/]
    // });

  //routine to hide the debug panel if it is open
  if( typeof parent != 'undefined' ){
    if( parent.PANEL_EAST_OPEN ){
      parent.PANEL_EAST_OPEN = false;
      parent.Ext.getCmp('debugPanel').hide();
      parent.Ext.getCmp('debugPanel').ownerCt.doLayout();
    }
  }

  if (FORMATS.startCaseHideProcessInf) {
    /*Ext.getCmp('process-detail-panel').hide();*/
    Ext.getCmp('startCaseTreePanel').ownerCt.doLayout();
  }
});

function openCaseA(n){
  if (n.attributes.optionType == "startProcess") {
    if(!isIE) {
      Ext.Msg.show({
        title : '',
        msg : TRANSLATIONS.ID_STARTING_NEW_CASE  + '<br><br><b>' + n.attributes.text + '</b>',
        wait:true,
        waitConfig: {interval:500}
      });
    }
    Ext.Ajax.request({
      url : 'casesStartPage_Ajax.php',
      params : {
        action : 'startCase',
        processId : n.attributes.pro_uid,
        taskId : n.attributes.tas_uid
      },
      success : function(response) {
        var nameTab;
        try {
          var res = Ext.util.JSON.decode(response.responseText);
          if (res.openCase) {
            if(isIE) {
              if(newCaseNewTab) {
                newCaseNewTab.close();
              }
              nameTab = PM.Sessions.getCookie('PM-TabPrimary') + '_openCase';
              newCaseNewTab = window.open(res.openCase.PAGE, nameTab);
            } else {
              window.location = res.openCase.PAGE;
            }
          }else if (res.lostSession) {
              Ext.Msg.show({
                       title : TRANSLATIONS.ID_ERROR_CREATING_NEW_CASE, // 'Error creating a new Case',
                       msg : res.message,
                       icon : Ext.MessageBox.ERROR,
                       buttons : Ext.Msg.OK,
                       fn : function(btn) {
                          try 
                                  {
                                    prnt = parent.parent;
                                    top.location = top.location;
                                  }
                                catch (err) 
                                  {
                                    parent.location = parent.location;
                                  }
                       }
                  }); 
          } else {
            Ext.Msg.show({
              title : TRANSLATIONS.ID_ERROR_CREATING_NEW_CASE, // 'Error creating a new Case',
              msg : '<textarea cols="50" rows="10">'
                  + res.message + '</textarea>',
              icon : Ext.MessageBox.ERROR,
              buttons : Ext.Msg.OK
            });
          }
        }
        catch(e) {
          Ext.Msg.show({
            title : TRANSLATIONS.ID_ERROR_CREATING_NEW_CASE, // 'Error creating a new Case',
            msg : 'JSON Decode Error:<br /><textarea cols="50" rows="2">'
                + e.message + '</textarea><br />Server Response<br /><textarea cols="50" rows="5">'+response.responseText+'</textarea>',
            icon : Ext.MessageBox.ERROR,
            buttons : Ext.Msg.OK
          });
        }
      },
      failure : function() {
        Ext.Msg.alert(TRANSLATIONS.ID_ERROR, TRANSLATIONS.ID_UNABLE_START_CASE);
      }
    });
  }
};

// function showDetailsA(selectedNode) {
//
//   // console.log(selectedNode);
//   var detailEl = Ext.getCmp('process-detail-panel').body;
//   if ((selectedNode)&&(selectedNode.attributes.otherAttributes)) {
//     otherAttributes = selectedNode.attributes.otherAttributes;
//     calendarDays=(otherAttributes.CALENDAR_WORK_DAYS).split("|");
//     calendarObj={0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false};
//
//     for(i=0;i<calendarDays.length;i++){
//     calendarObj[calendarDays[i]]=true;
//     }
//     //console.log(otherAttributes);
//     //starCaseButton
//     Ext.ComponentMgr.get("starCaseButton").enable();
//     Ext.getCmp('process-detail-panel').getForm().setValues({
//       processName : otherAttributes.PRO_TITLE,
//       taskName : otherAttributes.PRO_TAS_TITLE,
//       calendarName : otherAttributes.CALENDAR_NAME,
//       calendarDescription : otherAttributes.CALENDAR_DESCRIPTION,
//       processCalendar:otherAttributes.CALENDAR_NAME+" "+otherAttributes.CALENDAR_DESCRIPTION,
//       calendarWorkDays : calendarObj,/* (otherAttributes.CALENDAR_WORK_DAYS).split("|"), */
//       processCategory : otherAttributes.PRO_CATEGORY_LABEL,
//       processDebug : otherAttributes.PRO_DEBUG,
//       processDescription : otherAttributes.PRO_DESCRIPTION,
//       myInbox : otherAttributes.myInbox,
//       totalInbox : otherAttributes.totalInbox
//
//     });
//
//   } else {
//     //detailEl.update('');
//   }
//
//   return;
// };


Ext.ux.MaskTree = Ext.extend(Ext.tree.TreePanel, {
    /**
     * @cfg {Boolean} mask Indicates if the tree panel should have a loadmask applied when loading nodes
     */
    mask: true,
    /**
     * @cfg {Object} maskConfig A configuration object that can be applied to the loadmask.
     */
    maskConfig: { msg: _('ID_LOADING') },

    //init
    initComponent:function() {
        // call parent
        Ext.ux.MaskTree.superclass.initComponent.apply(this, arguments);

        if (this.mask) { this.on('render', this.createMask, this); }
    }, //end initComponent

    /**
     * @private
     */
    createMask: function() {
        var mask = new Ext.LoadMask(Ext.getBody(), this.maskConfig);
        this.getLoader().on('beforeload', mask.show, mask);
        this.getLoader().on('load', mask.hide, mask);
    }
}); // end of extend
Ext.reg('masktree', Ext.ux.MaskTree);

Ext.ux.NewStartCasePanel = Ext.extend(Ext.Panel, {
    name: '',
    description: ' ',
    fields: [],
    processDetails: undefined,
    initComponent: function() {
        var me = this;
        this.layout =  'anchor';
        this.buttonAlign = 'center';
        this.bodyStyle = 'border-radius: 10px 10px 10px 10px; border: 1px solid; background-color: rgb(159,203,131); font: normal 10pt "Open Sans", Tahoma, sans-serif, MiscFixed; color: white;';
        Ext.Button.buttonTemplate = new Ext.Template(
            '<div id="{4}" style="text-align: center;"><button type="{0}" style="width:200px; height: 25px; border-radius: 10px; background-color: rgb(74, 119, 47); cursor: pointer; color: #ffffff; font-size: 14px;"></button></div>');
        Ext.Button.buttonTemplate.compile();
        this.items = [{
            xtype: 'container',
            style: 'width: auto; height: 140px; background-color: rgb(74, 119, 47); border-radius:10px; margin: 15px 15px 15px 15px; overflow: auto;',
            items: this.initDisplayFields()
        }, {
            xtype: 'button',
            text: 'Dodaj wniosek',
            handleMouseEvents: false,
            height: 35,
            template:Ext.Button.buttonTemplate,
            listeners: {
                click: function() {
                    openCaseA(me.buildStartProcessCommand());
                }
            }
        }];

        Ext.ux.NewStartCasePanel.superclass.initComponent.call(this);
    },

    buildStartProcessCommand: function() {
        return {
            attributes: this.processDetails
        }
    },

    initDisplayFields: function() {
        var displayFields = [];
        displayFields.push({
           xtype: 'box',
           html: '<div style="text-align: center; padding-top: 5px; font-size: 20px;">'+ this.name +'</div>'
        });
        displayFields.push({
            xtype: 'box',
            html: '<div><span>'+ this.description +'</span></div>',
            style: 'padding-left: 10px; text-align:center; font-style: italic;'
        });
        for (var i = 0; i < this.fields.length; i++) {
            displayFields.push({
                xtype: 'box',
                html: '<div><span style="font-weight: bold;">'+this.fields[i].Label+': </span><span>'+this.fields[i].Value+'</span></div>',
                style: 'padding-left: 10px; padding-top:10px;'
            });
        }
        return displayFields;
    }

});
Ext.reg('newStartCasePanel', Ext.ux.NewStartCasePanel);


Ext.EventManager.on(window, 'beforeunload', function () {
  if(newCaseNewTab) {
    newCaseNewTab.close();
  }
}); 
