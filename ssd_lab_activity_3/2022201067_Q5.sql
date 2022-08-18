SELECT D.Mgr_ssn, D.Dnumber, COUNT(P.Essn)
FROM DEPARTMENT D JOIN DEPENDENT P
ON P.Essn = D.Mgr_ssn
WHERE D.Dnumber in (SELECT Dnumber FROM DEPT_LOCATIONS GROUP BY Dnumber HAVING COUNT(Dnumber) > 1) GROUP BY D.Mgr_ssn;

