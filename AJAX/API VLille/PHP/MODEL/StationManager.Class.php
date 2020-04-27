<?php
class StationManager
{
    public static function add(Station $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("INSERT INTO stations (nom,adresse,ville,longitude,latitude,nbvelos,nbplaces,etat) VALUES (:nom,:adresse,:ville,:longitude,:latitude,:nbvelos,:nbplaces,:etat)");
        $q->bindValue(":nom", $obj->getNom());
        $q->bindValue(":adresse", $obj->getAdresse());
        $q->bindValue(":ville", $obj->getVille());
        $q->bindValue(":longitude", $obj->getLongitude());
        $q->bindValue(":latitude", $obj->getLatitude());
        $q->bindValue(":nbvelos", $obj->getNbvelos());
        $q->bindValue(":nbplaces", $obj->getNbplaces());
        $q->bindValue(":etat", $obj->getEtat());
        $q->execute();
    }

    public static function update(Station $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("UPDATE stations SET nom=:nom, adresse=:adresse, ville=:ville, longitude=:longitude, latitude=:latitude, nbvelos=:nbvelos, nbplaces=:nbplaces, etat=:etat WHERE idstation=:idstation");
        $q->bindValue(":nom", $obj->getNom());
        $q->bindValue(":adresse", $obj->getAdresse());
        $q->bindValue(":ville", $obj->getVille());
        $q->bindValue(":longitude", $obj->getLongitude());
        $q->bindValue(":latitude", $obj->getLatitude());
        $q->bindValue(":nbvelos", $obj->getNbvelos());
        $q->bindValue(":nbplaces", $obj->getNbplaces());
        $q->bindValue(":etat", $obj->getEtat());
        $q->bindValue(":idstation", $obj->getIdstation());
        $q->execute();
    }

    public static function delete(Station $obj)
    {
        $db = DbConnect::getDb();
        $db->exec("DELETE FROM stations WHERE idstation=" . $obj->getIdstation());
    }

    public static function findById($id)
    {
        $db = DbConnect::getDb();
        $id = (int) $id;
        $q = $db->query("SELECT * FROM stations WHERE idstation=$id");
        $results = $q->fetch(PDO::FETCH_ASSOC);
        if ($results != false) {
            return new Station($results);
        } else {
            return false;
        }
    }

    public static function getList()
    {
        $db = DbConnect::getDb();
        $stations = [];
        $q = $db->query("SELECT * FROM stations");
        while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
            if ($donnees != false) {
                $stations[] = new Station($donnees);
            }
        }
        return $stations;
    }

    public static function getFromAPI()
    {
        
    }

}
