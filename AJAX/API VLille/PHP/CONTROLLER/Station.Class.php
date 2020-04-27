<?php

class Station
{
    private $_idstation;
    private $_nom;
    private $_adresse;
    private $_ville;
    private $_latitude;
    private $_longitude;
    private $_nbvelos;
    private $_nbplaces;
    private $_etat;

	############# ACCESSEURS #############

    public function getEtat()
    {
        return $this->_etat;
    }

    public function setEtat($_etat)
    {
        $this->_etat = $_etat;
    }

    public function getNbplaces()
    {
        return $this->_nbplaces;
    }

    public function setNbplaces($_nbplaces)
    {
        $this->_nbplaces = $_nbplaces;
    }

    public function getNbvelos()
    {
        return $this->_nbvelos;
    }

    public function setNbvelos($_nbvelos)
    {
        $this->_nbvelos = $_nbvelos;
    }

    public function getLongitude()
    {
        return $this->_longitude;
    }

    public function setLongitude($_longitude)
    {
        $this->_longitude = $_longitude;
    }

    public function getLatitude()
    {
        return $this->_latitude;
    }

    public function setLatitude($_latitude)
    {
        $this->_latitude = $_latitude;
    }

    public function getVille()
    {
        return $this->_ville;
    }

    public function setVille($_ville)
    {
        $this->_ville = $_ville;
    }

    public function getAdresse()
    {
        return $this->_adresse;
    }

    public function setAdresse($_adresse)
    {
        $this->_adresse = $_adresse;
    }

    public function getNom()
    {
        return $this->_nom;
    }

    public function setNom($_nom)
    {
        $this->_nom = $_nom;
    }

    public function getIdstation()
    {
        return $this->_idstation;
    }

    public function setIdstation($_idstation)
    {
        $this->_idstation = $_idstation;
    }

    // Constructeur
    public function __construct(array $options = [])
    {
        if (!empty($options)) {
            $this->hydrate($options);
        }
    }
    public function hydrate($data)
    {
        foreach ($data as $key => $value) {
            $method = 'set' . ucfirst($key);

            if (is_callable([$this, $method])) {
                $this->$method($value);
            }
        }
    }

}
