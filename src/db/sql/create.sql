CREATE DATABASE SCHOOL2;

CREATE TABLE STUDENTS(
    studentId SERIAL PRIMARY KEY,
    studentName varchar(50) NOT NULL,
    age int NOT NULL,
    gender varchar(50) NOT NULL,
    class varchar(7) NOT NULL,
    rollNumber int NOT NULL,
    section char(1) NOT NULL,
    house varchar(7) NOT NULL, 
);

CREATE TABLE SPOKEN_LANGUAGE(
   studentId INT NOT NULL ON DELETE CASCADE,
   spokenLanguage varchar(10),
   CONSTRAINT PK_SPOKEN_LANGUAGE PRIMARY KEY (studentId,spokenLanguage),
   CONSTRAINT FK_SPOKEN_LANGUAGE FOREIGN KEY (studentId) REFERENCES STUDENTS(studentId)
);

CREATE TABLE SUBJECTS(
   subjectCode INT PRIMARY KEY AUTO_INCREMENT,
   subjectName varchar(10) NOT NULL,
);