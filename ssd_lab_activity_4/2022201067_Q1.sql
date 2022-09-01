DELIMITER $$
create procedure add_nums(
IN a float, 
IN b float, 
OUT answer float
)
begin
set answer = a + b;
end$$
DELIMITER ;

