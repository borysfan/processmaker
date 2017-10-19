
var centerPanel;

Ext.onReady(function(){
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    //center iframe panel
    centerPanel = {
        region : 'center',
        xtype  : 'iframepanel',
        frameConfig:{
            name : 'casesSubFrame',
            id   : 'casesSubFrame'
        },
        deferredRender: false
    };


    var viewport = new Ext.Viewport({
        layout:'fit',
        name : 'viewportDashboard',
        id   : 'viewportDashboard',
        items:[{
            xtype:'portal',
            region:'center',
            margins:'35 5 5 5',
            name : 'portalDashboard',
            id   : 'portalDashboard',
            items:[{
                columnWidth:.33,
                id   : 'columnPos0',
                style:'padding:10px 10px 10px 10px',
                items:[
                    {
                        items: {
                            xtype: 'form',
                            buttonAlign: 'center',
                            labelWidth: 200,
                            height: 120,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Nazwa wniosku',
                                    value: 'Wniosek urlopowy'
                                }, {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Ilość dostpęnych dni urlopowych',
                                    value: '7'
                                }, {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Ilość dni UNŻ',
                                    value: '3'
                                }
                            ],
                            buttons: [
                                {
                                    xtype: 'button',
                                    width: 100,
                                    text: 'Dodaj wniosek'
                                }
                            ]
                        }
                    }
                ]
            },{
                columnWidth:.33,
                id   : 'columnPos1',
                style:'padding:10px 0 10px 10px',
                items:[
                    {
                        items: {
                            xtype: 'form',
                            buttonAlign: 'center',
                            labelWidth: 200,
                            height: 120,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Nazwa wniosku',
                                    value: 'Anulowanie urlopu'
                                }, {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Wnioski możliwe do anulowania',
                                    value: '1'
                                }, {
                                    xtype: 'displayfield',
                                    fieldLabel: '',
                                    value: ''
                                }
                            ],
                            buttons: [
                                {
                                    xtype: 'button',
                                    width: 100,
                                    text: 'Dodaj wniosek'
                                }
                            ]
                        }
                    }
                ]
            },{
                columnWidth:.33,
                id   : 'columnPos2',
                style:'padding:10px',
                items:[]
            }]

        }]
    });

});


