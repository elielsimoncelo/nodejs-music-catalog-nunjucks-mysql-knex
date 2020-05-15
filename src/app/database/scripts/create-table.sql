USE musica_catalogo;

CREATE TABLE `musica_catalogo`.`musicas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome`VARCHAR(30) NOT NULL,
    `artista` VARCHAR(30) NOT NULL,
    `estrelas` INT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;