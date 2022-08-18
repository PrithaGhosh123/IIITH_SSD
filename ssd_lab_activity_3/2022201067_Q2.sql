SELECT concat(E.Fname, " ", E.Minit, " ", E.Lname) as "Full name", E.Ssn, E.Dno, COUNT(M.Ssn) FROM EMPLOYEE E JOIN EMPLOYEE M ON E.Ssn = M.Super_ssn WHERE M.Super_ssn IN (SELECT 
