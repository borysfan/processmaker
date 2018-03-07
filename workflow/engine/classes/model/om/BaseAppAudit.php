<?php
require_once 'propel/om/BaseObject.php';

require_once 'propel/om/Persistent.php';


include_once 'propel/util/Criteria.php';

include_once 'classes/model/AppAuditPeer.php';

abstract class BaseAppAudit extends BaseObject implements Persistent {

    protected $tas_uid = '';

    protected $app_uid = '';

    protected $app_data = '';

    protected $dyn_content = '';

    protected $alreadyInSave = false;

    protected $alreadyInValidation = false;


    /**
     * @return string
     */
    public function getTasUid()
    {
        return $this->tas_uid;
    }

    /**
     * @return string
     */
    public function getAppUid()
    {
        return $this->app_uid;
    }

    /**
     * @return string
     */
    public function getAppData()
    {
        return $this->app_data;
    }

    /**
     * @return string
     */
    public function getDynContent()
    {
        return $this->dyn_content;
    }

    /**
     * @param string $tas_uid
     */
    public function setTasUid($tas_uid)
    {
        if ($tas_uid !== null && !is_string($tas_uid)) {
            $tas_uid = (string) $tas_uid;
        }

        if ($this->tas_uid !== $tas_uid || $tas_uid === '') {
            $this->tas_uid = $tas_uid;
            $this->modifiedColumns[] = AppAuditPeer::TAS_UID;
        }
    }

    public function setAppUid($app_uid)
    {
        if ($app_uid !== null && !is_string($app_uid)) {
            $app_uid = (string) $app_uid;
        }

        if ($this->app_uid !== $app_uid || $app_uid === '') {
            $this->app_uid = $app_uid;
            $this->modifiedColumns[] = AppAuditPeer::APP_UID;
        }
    }

    /**
     * @param string $app_data
     */
    public function setAppData($app_data)
    {
        if ($app_data !== null && !is_string($app_data)) {
            $app_data = (string) $app_data;
        }

        if ($this->app_data !== $app_data || $app_data === '') {
            $this->app_data = $app_data;
            $this->modifiedColumns[] = AppAuditPeer::APP_DATA;
        }
    }

    /**
     * @param string $dyn_content
     */
    public function setDynContent($dyn_content)
    {

        if ($dyn_content !== null && !is_string($dyn_content)) {
            $dyn_content = (string) $dyn_content;
        }

        if ($this->dyn_content !== $dyn_content || $dyn_content === '') {
            $this->dyn_content = $dyn_content;
            $this->modifiedColumns[] = AppAuditPeer::DYN_CONTENT;
        }
    }

     /**
      * getter for the object primaryKey.
      *
      * @return     ObjectKey the object primaryKey as an Object
      */
     public function getPrimaryKey()
     {
         return $this->getTasUid();
     }

     /**
      * Sets the PrimaryKey for the object.
      *
      * @param      mixed $primaryKey The new PrimaryKey object or string (result of PrimaryKey.toString()).
      * @return     void
      * @throws     Exception, This method might throw an exceptions
      */
     public function setPrimaryKey($primaryKey)
     {
         $this->setTasUid($primaryKey);
     }

     /**
      * Deletes the object.
      * @param      Connection $con
      * @return     void
      * @throws     Exception
      */
     public function delete($con = null)
     {
        throw new PropelException("Operation delete not supported.");
     }

     /**
      * Saves the object.
      * @param      Connection $con
      * @return     void
      * @throws     Exception
      */
     public function save($con = null)
     {
         if ($this->isDeleted()) {
             throw new PropelException("You cannot save an object that has been deleted.");
         }

         if ($con === null) {
             $con = Propel::getConnection(BaseAppAuditPeer::DATABASE_NAME);
         }

         try {
             $con->begin();
             $affectedRows = $this->doSave($con);
             $con->commit();
             return $affectedRows;
         } catch (PropelException $e) {
             $con->rollback();
             throw $e;
         }
     }

    protected function doSave($con)
    {
        $affectedRows = 0; // initialize var to track total num of affected rows
        if (!$this->alreadyInSave) {
            $this->alreadyInSave = true;


            // If this object has been modified, then save it to the database.
            if ($this->isModified()) {
                if ($this->isNew()) {
                    $pk = BaseAppAuditPeer::doInsert($this, $con);
                    $affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
                    // should always be true here (even though technically
                    // BasePeer::doInsert() can insert multiple rows).

                    $this->setNew(false);
                } else {
                    $affectedRows += BaseAppAuditPeer::doUpdate($this, $con);
                }
                $this->resetModified(); // [HL] After being saved an object is no longer 'modified'
            }

            $this->alreadyInSave = false;
        }
        return $affectedRows;
    }

    public function buildCriteria()
    {
        $criteria = new Criteria(AppAuditPeer::DATABASE_NAME);

        if ($this->isColumnModified(AppAuditPeer::TAS_UID)) {
            $criteria->add(AppAuditPeer::TAS_UID, $this->tas_uid);
        }

        if ($this->isColumnModified(AppAuditPeer::APP_UID)) {
            $criteria->add(AppAuditPeer::APP_UID, $this->app_uid);
        }

        if ($this->isColumnModified(AppAuditPeer::DYN_CONTENT)) {
            $criteria->add(AppAuditPeer::DYN_CONTENT, $this->dyn_content);
        }

        if ($this->isColumnModified(AppAuditPeer::APP_DATA)) {
            $criteria->add(AppAuditPeer::APP_DATA, $this->app_data);
        }

        return $criteria;
    }

    public function buildPkeyCriteria()
    {
        $criteria = new Criteria(AppAuditPeer::DATABASE_NAME);

        $criteria->add(AppAuditPeer::APP_UID, $this->app_uid);
        $criteria->add(AppAuditPeer::TAS_UID, $this->tas_uid);
        return $criteria;
    }

    /**
     * Hydrates (populates) the object variables with values from the database resultset.
     *
     * An offset (1-based "start column") is specified so that objects can be hydrated
     * with a subset of the columns in the resultset rows.  This is needed, for example,
     * for results of JOIN queries where the resultset row includes columns from two or
     * more tables.
     *
     * @param      ResultSet $rs The ResultSet class with cursor advanced to desired record pos.
     * @param      int $startcol 1-based offset column which indicates which restultset column to start with.
     * @return     int next starting column
     * @throws     PropelException  - Any caught Exception will be rewrapped as a PropelException.
     */
    public function hydrate(ResultSet $rs, $startcol = 1)
    {
        try {

            $this->tas_uid = $rs->getString($startcol + 0);

            $this->app_uid = $rs->getString($startcol + 1);

            $this->dyn_content = $rs->getString($startcol + 2);

            $this->app_data = $rs->getString($startcol + 3);

            $this->resetModified();

            $this->setNew(false);


            // FIXME - using NUM_COLUMNS may be clearer.
            return $startcol + 4;

        } catch (Exception $e) {
            throw new PropelException("Error populating AppAudit object", $e);
        }
    }
 }