Delimiter $$
create procedure cust(IN city varchar(35))
begin
select CUST_NAME FROM customer where WORKING_AREA = city;
end $$

DELIMITER ;
