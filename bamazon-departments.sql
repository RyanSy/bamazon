CREATE TABLE Departments (
    DepartmentID int AUTO_INCREMENT,
    DepartmentName varchar(64) NOT NULL,
    OverheadCosts int NOT NULL,
    TotalSales int NOT NULL,
    PRIMARY KEY(DepartmentID)
    );

INSERT INTO Departments (DepartmentName,OverheadCosts,TotalSales) 
VALUES ("Albums",1050,0);

INSERT INTO Departments (DepartmentName,OverheadCosts,TotalSales) 
VALUES ("Singles",224,0);