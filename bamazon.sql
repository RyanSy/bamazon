CREATE TABLE Products (
    ItemID int AUTO_INCREMENT,
    ProductName varchar(64) NOT NULL,
    DepartmentName varchar(64) NOT NULL,
    Price int NOT NULL,
    StockQuantity int NOT NULL,
    PRIMARY KEY(ItemID)
    );

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Nas - Illmatic","Albums",25,10);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Wu-Tang Clan - Enter the 36 Chambers","Albums",25,2);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Pharcyde - Passin' Me By","Singles",8,6);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Biz Markie - Just a Friend","Singles",8,9);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Beatnuts - Musical Massacre","Albums",25,1);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Gang Starr - Hard to Earn","Albums",25,3);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Notorious B.I.G. - Juicy","Singles",8,7);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Jay-Z - Reasonable Doubt","Albums",25,8);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("A Tribe Called Quest - Find a Way","Singles",8,2);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) 
VALUES ("Big L - Ebonics","Singles",8,3);
