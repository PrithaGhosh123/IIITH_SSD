SELECT concat(E.Fname, " ", E.Minit, " ", E.Lname) as "Full name", E.Ssn, E.Dno, D.Dname 
FROM EMPLOYEE E 
JOIN DEPARTMENT D ON E.Dno = D.Dnumber 
WHERE E.Dno IN (SELECT E.Dno FROM EMPLOYEE E JOIN WORKS_ON W ON E.Ssn = W.Essn WHERE W.Hours < 40);
