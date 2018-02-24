<?php

class AppAudit extends BaseAppAudit {

    public function insertAudit($aData)
    {
        $this->setTasUid($aData['TAS_UID']);
        $this->setAppUid($aData['APP_UID']);
        $this->setDynContent($aData['DYN_CONTENT']);
        $this->setAppData($aData['APP_DATA']);
        return $this->save();
    }

}