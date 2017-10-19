<?php
/**
 * Created by PhpStorm.
 * User: dominik
 * Date: 19.10.2017
 * Time: 14:24
 */

$oHeadPublisher = &headPublisher::getSingleton();
$oHeadPublisher->addExtJsScript( "newApplication/main", false ); //Adding a javascript file .js
$oHeadPublisher->addContent( "newApplication/main" ); //Adding a html file  .html.

G::RenderPage("publish", "extJs");