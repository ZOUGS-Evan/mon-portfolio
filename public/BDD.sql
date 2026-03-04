Materiel
CREATE TABLE Materiel (
    id INT PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    marque VARCHAR(50),
    etat VARCHAR(50)
);

Adherent
CREATE TABLE Adherent (
    id INT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    dateDeNaissance DATE
);

Responsable
CREATE TABLE Responsable (
    id INT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    login VARCHAR(50) NOT NULL,
    mot_de_passe VARBINARY(255) NOT NULL
);

Monopalme
CREATE TABLE Monopalme (
    id_materiel INT PRIMARY KEY,
    pointure INT,
        FOREIGN KEY (id_materiel)
        REFERENCES Materiel(id)
        ON DELETE CASCADE
);

Tuba_frontal
CREATE TABLE Tuba_frontal (
    id_materiel INT PRIMARY KEY,
    taille VARCHAR(20),
        FOREIGN KEY (id_materiel)
        REFERENCES Materiel(id)
        ON DELETE CASCADE
);

Lunette (
    id_materiel INT PRIMARY KEY,
        FOREIGN KEY (id_materiel)
        REFERENCES Materiel(id)
        ON DELETE CASCADE
);

Combinaison
CREATE TABLE Combinaison (
    id_materiel INT PRIMARY KEY,
    taille VARCHAR(20),
        FOREIGN KEY (id_materiel)
        REFERENCES Materiel(id)
        ON DELETE CASCADE
);

Pret
CREATE TABLE Pret (
    id INT PRIMARY KEY,
    id_materiel INT,
    id_adherent INT,
    dateDebut DATE,
    dateFin DATE,
        FOREIGN KEY (id_materiel)
        REFERENCES Materiel(id),
        FOREIGN KEY (id_adherent)
        REFERENCES Adherent(id)
);

Retour
CREATE TABLE Retour (
    id INT PRIMARY KEY,
    id_pret INT,
    etat VARCHAR(50),
    dateRetour DATE,
        FOREIGN KEY (id_pret)
        REFERENCES Pret(id)
);
