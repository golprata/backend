
CREATE TABLE `contato` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(150) NULL DEFAULT NULL,
	`email` VARCHAR(150) NULL DEFAULT NULL,
	`nascimento` DATE NULL DEFAULT NULL,
	`profissao` VARCHAR(50) NULL DEFAULT NULL,
	`empresa` VARCHAR(50) NULL DEFAULT NULL,
	`aceita_emails` VARCHAR(3) NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=8
;


CREATE TABLE `endereco` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`rua` VARCHAR(150) NULL DEFAULT NULL,
	`bairro` VARCHAR(150) NULL DEFAULT NULL,
	`cidade` VARCHAR(150) NULL DEFAULT NULL,
	`estado` VARCHAR(150) NULL DEFAULT NULL,
	`cep` VARCHAR(9) NULL DEFAULT NULL,
	`contato_id` INT(11) NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `FK__contato` (`contato_id`),
	CONSTRAINT `FK__contato` FOREIGN KEY (`contato_id`) REFERENCES `contato` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;